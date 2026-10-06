export type BankTransaction = {
  externalId: string;
  amountCents: number;
};

export type PostedTransaction = {
  id: string;
  externalId: string;
  amountCents: number;
};

export type BankLedger = {
  posted: PostedTransaction[];
};

export type SyncBankFeedOptions = {
  beforePost?: () => Promise<void>;
};

const inflight = new WeakMap<BankLedger, Map<string, Promise<PostedTransaction>>>();

export function createLedger(): BankLedger {
  return { posted: [] };
}

function flightsFor(ledger: BankLedger): Map<string, Promise<PostedTransaction>> {
  let flights = inflight.get(ledger);
  if (!flights) {
    flights = new Map();
    inflight.set(ledger, flights);
  }
  return flights;
}

export async function syncBankFeed(
  ledger: BankLedger,
  transactions: readonly BankTransaction[],
  options?: SyncBankFeedOptions
): Promise<PostedTransaction[]> {
  const rows: PostedTransaction[] = [];

  for (const transaction of transactions) {
    rows.push(await postOnce(ledger, transaction, options));
  }

  return rows;
}

function postOnce(
  ledger: BankLedger,
  transaction: BankTransaction,
  options: SyncBankFeedOptions | undefined
): Promise<PostedTransaction> {
  const flights = flightsFor(ledger);
  const pending = flights.get(transaction.externalId);
  if (pending) {
    return pending;
  }

  // Register before commit runs. The old path checked `posted`, awaited the
  // bank write, then inserted — two syncs both missed and each posted a row.
  const flight = Promise.resolve()
    .then(() => commitPost(ledger, transaction, options))
    .catch((error: unknown) => {
      flights.delete(transaction.externalId);
      throw error;
    });
  flights.set(transaction.externalId, flight);
  return flight;
}

async function commitPost(
  ledger: BankLedger,
  transaction: BankTransaction,
  options: SyncBankFeedOptions | undefined
): Promise<PostedTransaction> {
  const existing = ledger.posted.find((row) => row.externalId === transaction.externalId);
  if (existing) {
    return existing;
  }

  if (options?.beforePost) {
    await options.beforePost();
  }

  const row: PostedTransaction = {
    id: `post-${transaction.externalId}`,
    externalId: transaction.externalId,
    amountCents: transaction.amountCents
  };
  ledger.posted.push(row);
  return row;
}
