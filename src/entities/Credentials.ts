import { Account, Field } from './Account';
import { StatusVisibility } from './Status';

export interface Credentials extends Account {
  source: Source;
}

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
  fields: Field;
}
