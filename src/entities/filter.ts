export type FilterContext =
  | 'home'
  | 'notifications'
  | 'public'
  | 'thread'
  | 'account';

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
  /** Should matching entities in home and notifications be dropped by the server? */
  irreversible: boolean;
  /** Should the filter consider word boundaries? */
  wholeWord: boolean;
}
