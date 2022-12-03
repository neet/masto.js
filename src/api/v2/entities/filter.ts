export type FilterContext =
  | 'home'
  | 'notifications'
  | 'public'
  | 'thread'
  | 'account';

export type FilterAction = 'warn' | 'hide';

/**
 * Represents a user-defined filter for determining which statuses should not be shown to the user.
 * @see https://docs.joinmastodon.org/entities/filter/
 */
export interface Filter {
  /** The ID of the filter in the database. */
  id: string;
  /** The text to be filtered. */
  phrase: string;
  /** The contexts in which the filter should be applied. */
  context: FilterContext[];
  /** When the filter should no longer be applied */
  expiresAt?: string | null;
  /** Should matching entities in home and notifications be dropped by the server? */
  irreversible: boolean;
  /** Should the filter consider word boundaries? */
  wholeWord: boolean;
  /**
   * The action to be taken when a status matches this filter.
   *
   * `warn` = show a warning that identifies the matching filter by title, and allow the user to expand the filtered status. This is the default (and unknown values should be treated as equivalent to warn).
   *
   * `hide` = do not show this status if it is received
   */
  filterAction: FilterAction;
}
