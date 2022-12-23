import type { Account, Status } from '..';

/**
 * Admin-level information about a filed report.
 * @see https://docs.joinmastodon.org/entities/admin-report/
 */
export interface Report {
  /** The ID of the report in the database. */
  id: string;
  /** The action taken to resolve this report. */
  actionTaken: string;
  /** An optional reason for reporting. */
  comment: string;
  /** The time the report was filed. */
  createdAt: string;
  /** The time of last action on this report. */
  updatedAt: string;
  /** The account which filed the report. */
  account: Account;
  /** The account being reported. */
  targetAccount: Account;
  /** The account of the moderator assigned to this report. */
  assignedAccount: Account;
  /** The action taken by the moderator who handled the report. */
  actionTakenByAccount: Account;
  /** Statuses attached to the report, for context. */
  statuses: Status[];
}
