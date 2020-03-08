import { Account } from './account';
import { Status } from './status';

export interface Conversation {
  /** The ID of the conversation */
  id: string;
  /** Wether authorized user has read latest status */
  unread: boolean;
  /** An array of accounts that mentioned this conversation */
  accounts: Account[];
  /** The latest status of this conversation */
  lastStatus: Status;
}
