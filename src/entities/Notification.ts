import { Account } from './Account';
import { Status } from './Status';

export type NotificationTypes  = 'mention'|'reblog'|'favourite'|'follow';

export interface Notification {
  /** The notification ID */
  id: string;

  /** One of: "mention", "reblog", "favourite", "follow" */
  type: NotificationTypes;

  /** The time the notification was created */
  created_at: string;

  /** The Account sending the notification to the user */
  account: Account;

  /** The Status associated with the notification, if applicable */
  status?: Status;
}
