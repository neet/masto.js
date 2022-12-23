import type { v1 } from '../..';

/**
 * Represents the results of a search.
 * @see https://docs.joinmastodon.org/entities/Search/
 */
export interface Search {
  /** Accounts which match the given query */
  accounts: v1.Account[];
  /** Statuses which match the given query */
  statuses: v1.Status[];
  /** Hashtags which match the given query */
  hashtags: v1.Tag[];
}
