import type { V1 } from '../..';

/**
 * Represents the results of a search.
 * @see https://docs.joinmastodon.org/entities/Search/
 */
export interface Search {
  /** Accounts which match the given query */
  accounts: V1.Account[];
  /** Statuses which match the given query */
  statuses: V1.Status[];
  /** Hashtags which match the given query */
  hashtags: V1.Tag[];
}
