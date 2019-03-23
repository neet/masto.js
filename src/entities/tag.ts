export interface Tag {
  /** The hashtag, not including the preceding `#` */
  name: string;

  /** The URL of the hashtag */
  url: string;

  /** Array of History */
  history: TagHistory[];
}

export interface TagHistory {
  /** String of UNIX timestamp */
  day: string;

  /** How many times was used */
  uses: number;

  /** How many unique users are there */
  accounts: number;
}
