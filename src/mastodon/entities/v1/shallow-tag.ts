/**
 * Represents a hashtag with minimal information, without history or following state.
 * @see https://docs.joinmastodon.org/entities/ShallowTag/
 */
export interface ShallowTag {
  /** The value of the hashtag after the # sign. */
  name: string;
  /** A link to the hashtag on the local server. */
  url: string;
}
