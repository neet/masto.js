import { type Account } from "./account.js";
import { type Appeal } from "./appeal.js";

interface AccountWarningActionRegistry {
  none: never;
  disable: never;
  mark_statuses_as_sensitive: never;
  delete_statuses: never;
  sensitive: never;
  silence: never;
  suspend: never;
}

export type AccountWarningAction = keyof AccountWarningActionRegistry;

/**
 * Moderation warning against a particular account.
 */
export interface AccountWarning {
  /** The ID of the account warning in the database. */
  id: string;
  /** Action taken against the account. */
  action: AccountWarningAction;
  /** Message from the moderator to the target account. */
  text: string;
  /** List of status IDs that are relevant to the warning. When action is mark_statuses_as_sensitive or delete_statuses, those are the affected statuses. */
  statusIds: string[];
  /** Account against which a moderation decision has been taken. */
  targetAccount: Account;
  /** Appeal submitted by the target account, if any. */
  appeal?: Appeal | null;
  /** When the event took place. */
  createdAt: string;
}
