/** Represents the relationship between accounts, such as following / blocking / muting / etc. */
export interface Relationship {
  /** The account id. */
  id: string;
  /** Are you following this user? */
  following: boolean;
  /** Do you have a pending follow request for this user? */
  requested: boolean;
  /** Are you featuring this user on your profile? */
  endorsed: boolean;
  /** Are you followed by this user? */
  followedBy: boolean;
  /** Are you muting this user? */
  muting: boolean;
  /** Are you muting notifications from this user? */
  mutingNotifications: boolean;
  /** Are you receiving this user's boosts in your home timeline? */
  showingReblogs: boolean;
  /** Are you blocking this user? */
  blocking: boolean;
  /** Are you blocking this user's domain? */
  domainBlocking: boolean;
  /** Is this user blocking you? */
  blockedBy: boolean;
}
