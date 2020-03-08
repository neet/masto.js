import { History } from '.';

/** Represents a hashtag used within the content of a status. */
export interface Tag {
  /** The value of the hashtag after the # sign. */
  name: string;
  /** A link to the hashtag on the instance. */
  url: string;

  /** Usage statistics for given days. */
  history?: History[] | null;
}
