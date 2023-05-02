import type { Account } from './account';
import type { Report } from './report';
import type { Status } from './status';

export type NotificationType =
  | 'mention' // Someone mentioned you in their status
  | 'status' //Someone you enabled notifications for has posted a status
  | 'reblog' //Someone boosted one of your statuses
  | 'follow' // Someone followed you
  | 'follow_request' // Someone requested to follow you
  | 'favourite' // Someone favourited one of your statuses
  | 'poll' // A poll you have voted in or created has ended
  | 'update' // A status you interacted with has been edited
  | 'admin.sign_up' // Someone signed up (optionally sent to admins)
  | 'admin.report'; // A new report has been filed

/**
 * Represents a notification of an event relevant to the user.
 * @see https://docs.joinmastodon.org/entities/notification
 */
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

  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report?: Report | null;
}
