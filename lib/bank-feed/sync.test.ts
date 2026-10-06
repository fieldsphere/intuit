import assert from "node:assert/strict";
import { test } from "node:test";
import { createLedger, syncBankFeed, type PostedTransaction } from "./sync.ts";

function rowsFor(rows: PostedTransaction[], externalId: string): PostedTransaction[] {
  return rows.filter((row) => row.externalId === externalId);
}

test("concurrent syncs post one row for the same bank transaction", async () => {
  const ledger = createLedger();
  const transaction = { externalId: "bank-tx-1", amountCents: 2500 };

  let releaseGate: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    releaseGate = resolve;
  });
  let parked = false;

  const first = syncBankFeed(ledger, [transaction], {
    beforePost: async () => {
      parked = true;
      await gate;
    }
  });

  while (!parked) {
    await new Promise((resolve) => setImmediate(resolve));
  }

  const second = syncBankFeed(ledger, [transaction]);
  releaseGate();
  const [firstRows, secondRows] = await Promise.all([first, second]);

  const posted = rowsFor(ledger.posted, "bank-tx-1");
  assert.equal(posted.length, 1);
  assert.equal(posted[0]?.amountCents, 2500);
  assert.equal(firstRows.length, 1);
  assert.equal(secondRows.length, 1);
  assert.equal(firstRows[0]?.id, secondRows[0]?.id);
});

test("a second sync of the same bank transaction does not post again", async () => {
  const ledger = createLedger();

  await syncBankFeed(ledger, [{ externalId: "bank-tx-2", amountCents: 800 }]);
  await syncBankFeed(ledger, [
    { externalId: "bank-tx-2", amountCents: 800 },
    { externalId: "bank-tx-3", amountCents: 100 }
  ]);

  assert.equal(rowsFor(ledger.posted, "bank-tx-2").length, 1);
  assert.equal(rowsFor(ledger.posted, "bank-tx-3").length, 1);
  assert.equal(ledger.posted.length, 2);
});
