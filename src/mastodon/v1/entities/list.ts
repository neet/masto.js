/**
 * Represents a list of some users that the authenticated user follows.
 * @see https://docs.joinmastodon.org/entities/list/
 */
export interface List {
  /** The internal database ID of the list. */
  id: string;
  /** The user-defined title of the list. */
  title: string;
}
