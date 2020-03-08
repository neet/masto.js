import { Emoji, Field, Source } from '.';

/** Represents a user of Mastodon and their associated profile. */
export interface Account {
  /** The account id */
  id: string;
  /** The username of the account, not including domain */
  username: string;
  /** The WebFinger account URI. Equal to `username` for local users, or `username@domain` for remote users. */
  acct: string;
  /** The location of the user's profile page. */
  url: string;

  /** The profile's display name. */
  displayName: string;
  /** The profile's bio / description. */
  note: string;
  /** An image icon that is shown next to statuses and in the profile. */
  avatar: string;
  /** A static version of the `avatar`. Equal to avatar if its value is a static image; different if `avatar` is an animated GIF. */
  avatarStatic: string;
  /** An image banner that is shown above the profile and in profile cards. */
  header: string;
  /** A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. */
  headerStatic: string;
  /** Whether the account manually approves follow requests. */
  locked: boolean;
  /** Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned. */
  emojis: Emoji[];
  /** Whether the account has opted into discovery features such as the profile directory. */
  discoverable: false;

  /** When the account was created. */
  createdAt: string;
  /** How many statuses are attached to this account. */
  statusesCount: number;
  /** The reported followers of this profile. */
  followersCount: number;
  /** The reported follows of this profile. */
  followingCount: number;
  /** Time of the last status posted */
  lastStatusAt: string;

  /** Indicates that the profile is currently inactive and that its user has moved to a new account. */
  moved?: boolean | null;
  /** Additional metadata attached to a profile as name-value pairs. */
  fields?: Field[] | null;
  /** Boolean to indicate that the account performs automated actions */
  bot?: boolean | null;
}

export interface AccountCredentials extends Account {
  /**
   * Note the extra `source` property, which is not visible on accounts other than your own.
   * Also note that plain-text is used within `source` and HTML is used for their
   * corresponding properties such as `note` and `fields`.
   */
  source: Source;
}
