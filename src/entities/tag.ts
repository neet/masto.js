import { History } from './history';

export interface Tag {
  /** The hashtag, not including the preceding `#` */
  name: string;
  /** The URL of the hashtag */
  url: string;
  /** Array of History */
  history: History[];
}
