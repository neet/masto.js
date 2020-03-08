export interface Relationship {
  /** Target account id */
  id: string;
  /** Whether the user is currently following the account */
  following: boolean;
  /** Whether reblog will be shown in your timeline */
  showingReblogs: boolean;
  /** Whether the user is currently being followed by the account */
  followedBy: boolean;
  /** Whether the user is currently being blocked by the account */
  blockedBy: boolean;
  /** Whether the user is currently blocking the account */
  blocking: boolean;
  /** Whether the user is currently muting the account */
  muting: boolean;
  /** Whether the user is also muting notifications */
  mutingNotifications: boolean;
  /** Whether the user has requested to follow the account */
  requested: boolean;
  /** Whether the user is currently blocking the accounts' domain */
  domainBlocking: boolean;
  /** Whether this user is endorsed by authenticated user */
  endorsed: boolean;
}
