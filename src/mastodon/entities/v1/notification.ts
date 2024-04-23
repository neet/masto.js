import { type Account } from "./account";
import { type Report } from "./report";
import { type Status } from "./status";

interface BaseNotification<T> {
  /** The id of the notification in the database. */
  id: string;
  /** The type of event that resulted in the notification. */
  type: T;
  /** The timestamp of the notification. */
  createdAt: string;
  /** The account that performed the action that generated the notification. */
  account: Account;
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

export namespace Notification {
  /**
   * Someone mentioned you in their status
   */
  export type Mention = BaseNotificationWithStatus<"mention">;

  /**
   * Someone you enabled notifications for has posted a status
   */
  export type Status = BaseNotificationWithStatus<"status">;

  /**
   * Someone boosted one of your statuses
   */
  export type Reblog = BaseNotificationWithStatus<"reblog">;

  /**
   * Someone followed you
   */
  export type Follow = BaseNotificationPlain<"follow">;

  /**
   * Someone requested to follow you
   */
  export type FollowRequest = BaseNotificationPlain<"follow_request">;

  /**
   * Someone favourited one of your statuses
   */
  export type Favourite = BaseNotificationWithStatus<"favourite">;

  /**
   * A poll you have voted in or created has ended
   */
  export type Poll = BaseNotificationWithStatus<"poll">;

  /**
   * A status you interacted with has been edited
   */
  export type Update = BaseNotificationWithStatus<"update">;

  export namespace Admin {
    /**
     * Someone signed up (optionally sent to admins)
     */
    export type SignUp = BaseNotificationPlain<"admin.sign_up">;

    export type Report = BaseNotificationWithReport<"admin.report">;
  }

  export type Type = Notification["type"];
}

/**
 * Represents a notification of an event relevant to the user.
 * @see https://docs.joinmastodon.org/entities/notification
 */
export type Notification =
  | Notification.Mention
  | Notification.Status
  | Notification.Reblog
  | Notification.Follow
  | Notification.FollowRequest
  | Notification.Favourite
  | Notification.Poll
  | Notification.Update
  | Notification.Admin.SignUp
  | Notification.Admin.Report;

/** @deprecated Use Notification.Type */
export type NotificationType = Notification.Type;

/** @deprecated Use Notification.Mention */
export type MentionNotification = Notification.Mention;

/** @deprecated Use Notification.Status */
export type StatusNotification = Notification.Status;

/** @deprecated Use Notification.Reblog */
export type ReblogNotification = Notification.Reblog;

/** @deprecated Use Notification.Follow */
export type FollowNotification = Notification.Follow;

/** @deprecated Use Notification.FollowRequest */
export type FollowRequestNotification = Notification.FollowRequest;

/** @deprecated Use Notification.Favourite */
export type FavouriteNotification = Notification.Favourite;

/** @deprecated Use Notification.Poll */
export type PollNotification = Notification.Poll;

/** @deprecated Use Notification.Update */
export type UpdateNotification = Notification.Update;

/** @deprecated Use Notification.Admin.SignUp */
export type AdminSignUpNotification = Notification.Admin.SignUp;

/** @deprecated Use Notification.Admin.Report */
export type AdminReportNotification = Notification.Admin.Report;
