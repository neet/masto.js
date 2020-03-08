export interface AdminFetchAccountParams {
  /** Filter for local accounts? */
  local?: boolean | null;
  /** Filter for remote accounts? */
  remote?: boolean | null;
  /** Filter by the given domain */
  byDomain?: string | null;
  /** Filter for currently active accounts? */
  active?: boolean | null;
  /** Filter for currently pending accounts? */
  pending?: boolean | null;
  /** Filter for currently disabled accounts? */
  disabled?: boolean | null;
  /** Filter for currently silenced accounts? */
  silenced?: boolean | null;
  /** Filter for currently suspended accounts? */
  suspended?: boolean | null;
  /** Username to search for */
  username?: string | null;
  /** Display name to search for */
  displayName?: string | null;
  /** Lookup a user with this email */
  email?: string | null;
  /** Lookup users by this IP address */
  ip?: string | null;
  /** Filter for staff accounts? */
  staff?: boolean | null;
}

export interface AdminFetchReportsParams {
  resolved?: boolean | null;
  accountId?: string | null;
  targetAccountId?: string | null;
  byTargetDomain?: string | null;
}

export type AccountActionType = 'none' | 'disable' | 'silence' | 'suspend';

export interface AdminActionAccountParams {
  /** Type of action to be taken. Enumerable oneOf: `none` `disable` `silence` `suspend` */
  type?: AccountActionType;
  /** ID of an associated report that caused this action to be taken */
  reportId?: string;
  /** ID of a preset warning */
  warningPresetId?: string | null;
  /** Additional text for clarification of why this action was taken */
  text?: string | null;
  /** Whether an email should be sent to the user with the above information. */
  sendEmailNotification?: boolean | null;
}
