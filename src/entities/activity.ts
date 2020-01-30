export interface Activity {
  /** Timestamp of 0 o'clock on Monday of the week */
  week: string;
  /** Number of statuses created while the week */
  statuses: string;
  /** Active users while the week */
  logins: string;
  /** New registrations while the week */
  registrations: string;
}

/**
 * @deprecated Use Activity
 */
export type InstanceActivity = Activity;
