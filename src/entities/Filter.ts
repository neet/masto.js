/** Type of filter context */
export type FilterContext = 'home'|'notifications'|'public'|'thread';

export interface Filter {
  /** ID of the filter */
  id: number;

  /** Keyword or phrase */
  phrase: string;

  /** Array of strings that indicate filter context. each string is ont of `home`, `notifications`, `public`, `thread` */
  context: FilterContext[];

  /** String such as `2018-07-06T00:59:13.161Z` that indicates when this filter is expired. */
  expires_at?: string;

  /** Boolean that indicates irreversible server side filtering. */
  irreversible: boolean;

  /** Boolean that indicates word match. */
  whole_word: string;
}
