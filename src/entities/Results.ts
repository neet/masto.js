import { Account } from './Account';
import { Status } from './Status';
import { Tag } from './Tag';

interface HashtagsValueMap {
  'v1': string[];
  'v2': Tag[];
}

export interface Results<V extends keyof HashtagsValueMap = 'v2'> {
  /** An array of matched Accounts */
  accounts: Account[];
  /** An array of matched Statuses */
  statuses: Status[];
  /** An array of matched hashtags, as strings */
  hashtags: HashtagsValueMap[V];
}
