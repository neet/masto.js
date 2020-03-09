import { Account, Status, Tag } from '.';

/**
 * Represents the results of a search.
 * @see https://docs.joinmastodon.org/entities/results/
 */
export interface Results {
  /** Accounts which match the given query */
  accounts: Account[];
  /** Statuses which match the given query */
  statuses: Status[];
  /** Hashtags which match the given query */
  hashtags: Tag[];
}
