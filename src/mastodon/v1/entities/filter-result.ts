import type { v2 } from '../../mastodon';

/**
 * Represents a filter whose keywords matched a given status.
 * @see https://docs.joinmastodon.org/entities/FilterResult/
 */
export interface FilterResult {
  /** The filter that was matched. */
  filter: v2.Filter;
  /** The keyword within the filter that was matched. */
  keywordMatches: string[] | null;
  /** The status ID within the filter that was matched. */
  statusMatches: string[] | null;
}
