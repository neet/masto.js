import { Account, AccountField } from '@/entities/Account';
import { StatusVisibility } from '@/entities/Status';

export interface Credentials extends Account {
  source: {
    /** Selected preference: Default privacy of new toots */
    privacy: StatusVisibility;

    /** Selected preference: Mark media as sensitive by default? */
    sensitive: boolean;

    /** Plain-text version of the account's `note` */
    note: string;

    /** Plain-text version of the account's field */
    fields: AccountField;
  };
}
