import { type Account } from "./account.js";
import { type Status } from "./status.js";

/**
 * Represents the results of a search.
 * @see https://docs.joinmastodon.org/entities/results/
 */
export interface Search {
  /** Accounts which match the given query */
  accounts: Account[];
  /** Statuses which match the given query */
  statuses: Status[];
  /** Hashtags which match the given query */
  hashtags: string[];
}
