import { Account } from './account';
import { Status } from './status';
import { Tag } from './tag';

/** Represents the results of a search. */
export interface Results {
  /** Accounts which match the given query */
  accounts: Account[];
  /** Statuses which match the given query */
  statuses: Status[];
  /** Hashtags which match the given query */
  hashtags: Tag[];
}
