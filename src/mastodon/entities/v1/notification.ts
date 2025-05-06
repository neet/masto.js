import { type Account } from "./account.js";
import { type AccountWarning } from "./account-warning.js";
import { type RelationshipSeveranceEvent } from "./relationship-severance-event.js";
import { type Report } from "./report.js";
import { type Status } from "./status.js";

interface BaseNotification<T> {
  /** The id of the notification in the database. */
  id: string;
  /** The type of event that resulted in the notification. */
  type: T;
  /** The timestamp of the notification. */
  createdAt: string;
  /** The account that performed the action that generated the notification. */
  account: Account;
  /** Group key shared by similar notifications, to be used in the grouped notifications feature. Should be considered opaque, but ungrouped notifications can be assumed to have a group_key of the form ungrouped-{notification_id} */
  groupKey: string;
}

type BaseNotificationPlain<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status?: undefined | null;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report?: undefined | null;
};

type BaseNotificationWithStatus<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status: Status;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report?: undefined | null;
};

type BaseNotificationWithReport<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status?: undefined | null;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report: Report;
};

/**
 * Someone mentioned you in their status
 */
export type MentionNotification = BaseNotificationWithStatus<"mention">;

/**
 * Someone you enabled notifications for has posted a status
 */
export type StatusNotification = BaseNotificationWithStatus<"status">;

/**
 * Someone boosted one of your statuses
 */
export type ReblogNotification = BaseNotificationWithStatus<"reblog">;

/**
 * Someone followed you
 */
export type FollowNotification = BaseNotificationPlain<"follow">;

/**
 * Someone requested to follow you
 */
export type FollowRequestNotification = BaseNotificationPlain<"follow_request">;

/**
 * Someone favourited one of your statuses
 */
export type FavouriteNotification = BaseNotificationWithStatus<"favourite">;

/**
 * A poll you have voted in or created has ended
 */
export type PollNotification = BaseNotificationWithStatus<"poll">;

/**
 * A status you interacted with has been edited
 */
export type UpdateNotification = BaseNotificationWithStatus<"update">;

/**
 * Someone signed up (optionally sent to admins)
 */
export type AdminSignUpNotification = BaseNotificationPlain<"admin.sign_up">;

export type AdminReportNotification =
  BaseNotificationWithReport<"admin.report">;

/**
 * Some of your follow relationships have been severed as a result of a moderation or block event
 */
export type SeveredRelationshipsNotification =
  BaseNotificationPlain<"severed_relationships"> & {
    event: RelationshipSeveranceEvent;
  };

/**
 * A moderator has taken action against your account or has sent you a warning
 */
export type ModerationWarningNotification =
  BaseNotificationPlain<"moderation_warning"> & {
    moderationWarning: AccountWarning;
  };

interface NotificationRegistry {
  mention: MentionNotification;
  status: StatusNotification;
  reblog: ReblogNotification;
  follow: FollowNotification;
  follow_request: FollowRequestNotification;
  favourite: FavouriteNotification;
  poll: PollNotification;
  update: UpdateNotification;
  "admin.sign_up": AdminSignUpNotification;
  "admin.report": AdminReportNotification;
  severed_relationships: SeveredRelationshipsNotification;
  moderation_warning: ModerationWarningNotification;
}

/**
 * Represents a notification of an event relevant to the user.
 * @see https://docs.joinmastodon.org/entities/notification
 */
export type Notification = NotificationRegistry[keyof NotificationRegistry];
export type NotificationType = Notification["type"];
