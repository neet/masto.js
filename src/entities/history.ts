/** Represents daily usage history of a hashtag. */
export interface History {
  /** UNIX timestamp on midnight of the given day. */
  day: string;
  /** the counted usage of the tag within that day. */
  uses: string;
  /** the total of accounts using the tag within that day. */
  accounts: string;
}
