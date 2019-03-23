export interface Mention {
  /** URL of user's profile (can be remote) */
  url: string;

  /** The username of the account */
  username: string;

  /** Equals `username` for local users, includes `@domain` for remote ones */
  acct: string;

  /** Account ID */
  id: string;
}
