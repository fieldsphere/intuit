export type InvoiceStatus = "open" | "void";

export type Invoice = {
  id: string;
  totalCents: number;
  status: InvoiceStatus;
};

export type LedgerRow = {
  id: string;
  invoiceId: string;
  kind: "charge" | "void";
  amountCents: number;
  committed: boolean;
};

export type Books = {
  invoices: Invoice[];
  ledger: LedgerRow[];
};

export type VoidInvoiceOptions = {
  beforeLedgerWrite?: () => Promise<void>;
};

export function createBooks(): Books {
  return { invoices: [], ledger: [] };
}

export function openInvoice(
  books: Books,
  input: { id: string; totalCents: number }
): Invoice {
  const invoice: Invoice = {
    id: input.id,
    totalCents: input.totalCents,
    status: "open"
  };
  books.invoices.push(invoice);
  books.ledger.push({
    id: `ledger-${input.id}-charge`,
    invoiceId: input.id,
    kind: "charge",
    amountCents: input.totalCents,
    committed: true
  });
  return invoice;
}

function findInvoice(books: Books, invoiceId: string): Invoice {
  const invoice = books.invoices.find((entry) => entry.id === invoiceId);
  if (!invoice) {
    throw new Error(`Invoice ${invoiceId} not found`);
  }
  return invoice;
}

const voidChains = new WeakMap<Books, Map<string, Promise<void>>>();

function enqueue<T>(books: Books, invoiceId: string, task: () => Promise<T>): Promise<T> {
  let chains = voidChains.get(books);
  if (!chains) {
    chains = new Map();
    voidChains.set(books, chains);
  }

  const previous = chains.get(invoiceId) ?? Promise.resolve();
  const run = previous.then(task, task);
  chains.set(
    invoiceId,
    run.then(
      () => undefined,
      () => undefined
    )
  );
  return run;
}

export function voidInvoice(
  books: Books,
  invoiceId: string,
  options?: VoidInvoiceOptions
): Promise<Invoice> {
  // Serialize voids that share this books object. The reversal is appended
  // only in the same turn as the open -> void flip, so a second caller cannot
  // insert a row and then abandon it when it loses the race.
  return enqueue(books, invoiceId, () => commitVoid(books, invoiceId, options));
}

async function commitVoid(
  books: Books,
  invoiceId: string,
  options?: VoidInvoiceOptions
): Promise<Invoice> {
  const invoice = findInvoice(books, invoiceId);
  if (invoice.status === "void") {
    return invoice;
  }

  // Held under the per-invoice chain. Must not call voidInvoice for this id.
  if (options?.beforeLedgerWrite) {
    await options.beforeLedgerWrite();
  }

  invoice.status = "void";
  books.ledger.push({
    id: `ledger-${invoiceId}-void`,
    invoiceId,
    kind: "void",
    amountCents: -invoice.totalCents,
    committed: true
  });
  return invoice;
}
