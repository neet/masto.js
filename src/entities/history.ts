export interface History {
  /** String of UNIX timestamp */
  day: string;
  /** How many times was used */
  uses: number;
  /** How many unique users are there */
  accounts: number;
}

export type TagHistory = History;
