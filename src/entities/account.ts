import { Emoji } from './emoji';
import { Source } from './source';

export interface AccountField {
  /** (2.4 or later) Label of profile metadata field. */
  name?: string | null;
  /** (2.4 or later) Value of profile metadata field. */
  value?: string | null;
  /** date time*/
  verifiedAt?: string | null;
}

export interface Account {
  /** The ID of the account */
  id: string;
  /** The username of the account */
  username: string;
  /** Equals username for local users, includes `@domain` for remote ones */
  acct: string;
  /** The account's display name */
  displayName: string;
  /** Boolean for when the account cannot be followed without waiting for approval first */
  locked: boolean;
  /** Boolean to indicate that the account performs automated actions */
  bot?: boolean | null;
  /** The time the account was created */
  createdAt: string;
  /** Time of the last status posted */
  lastStatusAt: string;
  /** The number of followers for the account */
  followersCount: number;
  /** The number of accounts the given account is following */
  followingCount: number;
  /** The number of statuses the account has made */
  statusesCount: number;
  /** Biography of user */
  note: string;
  /** URL of the user's profile page (can be remote) */
  url: string;
  /** URL to the avatar image */
  avatar: string;
  /** URL to the avatar static image (gif) */
  avatarStatic: string;
  /** URL to the header image */
  header: string;
  /** URL to the header static image (gif) */
  headerStatic: string;
  /** Array of Emoji in account username and note */
  emojis: Emoji[];
  /** If the owner decided to switch accounts, new account is in this attribute */
  moved?: boolean | null;
  /** Array of profile metadata field, each element has 'name' and 'value' */
  fields?: AccountField[] | null;
  /** no-index flag */
  discoverable?: false;
}

export interface AccountCredentials extends Account {
  /**
   * Note the extra `source` property, which is not visible on accounts other than your own.
   * Also note that plain-text is used within `source` and HTML is used for their
   * corresponding properties such as `note` and `fields`.
   */
  source: Source;
}
