import { AccountField } from './account';
import { StatusVisibility } from './status';

export interface Source {
  /** Selected preference: Default privacy of new toots */
  privacy?: StatusVisibility | null;
  /** Selected preference: Mark media as sensitive by default? */
  sensitive?: boolean | null;
  /** User's default language */
  language: string | null;
  /** Plain-text version of the account's `note` */
  note: string;
  /** Plain-text version of the account's field */
  fields: AccountField;
  /** The number of pending follow requests. */
  followRequestsCount: number;
}

/**
 * @deprecated Use Source
 */
export type AccountSource = Source;
