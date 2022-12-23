/**
 * Represents a mention of a user within the content of a status.
 * @see https://docs.joinmastodon.org/entities/mention/
 */
export interface Mention {
  /** The account id of the mentioned user. */
  id: string;
  /** The username of the mentioned user. */
  username: string;
  /** The location of the mentioned user's profile. */
  url: string;
  /**
   * The WebFinger acct: URI of the mentioned user.
   * Equivalent to username for local users, or `username@domain` for remote users.
   */
  acct: string;
}
