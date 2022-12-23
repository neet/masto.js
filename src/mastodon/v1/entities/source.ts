import type { Field, StatusVisibility } from '.';

/**
 * Represents display or publishing preferences of user's own account.
 * Returned as an additional entity when verifying and updated credentials, as an attribute of Account.
 * @see https://docs.joinmastodon.org/entities/source/
 */
export interface Source {
  /** Profile bio. */
  note: string;
  /** Metadata about the account. */
  fields: Field;

  /** The default post privacy to be used for new statuses. */
  privacy?: StatusVisibility | null;
  /** Whether new statuses should be marked sensitive by default. */
  sensitive?: boolean | null;
  /** The default posting language for new statuses. */
  language: string | null;
  /** The number of pending follow requests. */
  followRequestsCount?: number | null;
}
