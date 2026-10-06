import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createBooks,
  openInvoice,
  voidInvoice,
  type LedgerRow
} from "./void-invoice.ts";

function voidRows(rows: LedgerRow[], invoiceId: string): LedgerRow[] {
  return rows.filter((row) => row.invoiceId === invoiceId && row.kind === "void");
}

test("concurrent voids leave one committed reversal and no orphan ledger row", async () => {
  const books = createBooks();
  openInvoice(books, { id: "inv-1", totalCents: 12500 });

  let releaseGate: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    releaseGate = resolve;
  });
  let parked = false;

  const first = voidInvoice(books, "inv-1", {
    beforeLedgerWrite: async () => {
      parked = true;
      await gate;
    }
  });

  while (!parked) {
    await new Promise((resolve) => setImmediate(resolve));
  }

  const second = voidInvoice(books, "inv-1");
  releaseGate();
  await Promise.all([first, second]);

  const reversals = voidRows(books.ledger, "inv-1");
  const orphans = reversals.filter((row) => !row.committed);

  assert.equal(books.invoices[0]?.status, "void");
  assert.equal(reversals.length, 1);
  assert.equal(orphans.length, 0);
  assert.equal(reversals[0]?.committed, true);
  assert.equal(reversals[0]?.amountCents, -12500);

  const balance = books.ledger
    .filter((row) => row.invoiceId === "inv-1" && row.committed)
    .reduce((sum, row) => sum + row.amountCents, 0);
  assert.equal(balance, 0);
});

test("a second void of the same invoice does not post another reversal", async () => {
  const books = createBooks();
  openInvoice(books, { id: "inv-2", totalCents: 4000 });

  await voidInvoice(books, "inv-2");
  await voidInvoice(books, "inv-2");

  const reversals = voidRows(books.ledger, "inv-2");
  assert.equal(reversals.length, 1);
  assert.equal(reversals.every((row) => row.committed), true);
});
