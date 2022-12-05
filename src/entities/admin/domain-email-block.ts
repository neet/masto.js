export interface HistoryEmailBlock {
  day: string;
  account: string;
  uses: string;
}

export interface DomainEmailBlock {
  /** The ID of the email domain block in the database. */
  id: string;
  /** The domain of the email domain block in the database. */
  domain: string;
  /** The create date of the email domain block in the database. */
  createdAt: string;
  /** The history of the email domain block in the database. */
  history: HistoryEmailBlock[];
}
