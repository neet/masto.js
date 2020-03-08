import { Account } from './account';
import { Status } from './status';

export type NotificationType =
  | 'mention'
  | 'reblog'
  | 'favourite'
  | 'follow'
  | 'poll'
  | 'follow_request';

/** Represents a notification of an event relevant to the user. */
export interface Notification {
  /** The id of the notification in the database. */
  id: string;
  /** The type of event that resulted in the notification. */
  type: NotificationType;
  /** The timestamp of the notification. */
  createdAt: string;
  /** The account that performed the action that generated the notification. */
  account: Account;

  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status?: Status | null;
}
