import { Account } from './account';
import { Status } from './status';
import { Tag } from './tag';

export interface ResultsV1 {
  /** An array of matched Accounts */
  accounts: Account[];
  /** An array of matched Statuses */
  statuses: Status[];
  /** An array of matched hashtags, as strings */
  hashtags: string[];
}

export interface Results {
  /** An array of matched Accounts */
  accounts: Account[];
  /** An array of matched Statuses */
  statuses: Status[];
  /** An array of matched hashtags, as strings */
  hashtags: Tag[];
}
