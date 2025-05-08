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

declare namespace mastodon.v1 {
  declare namespace Notification {
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

    /**
     * Someone signed up (optionally sent to admins)
     */
    export type AdminSignUp = BaseNotificationPlain<"admin.sign_up">;

    export type AdminReport = BaseNotificationWithReport<"admin.report">;

    /**
     * Some of your follow relationships have been severed as a result of a moderation or block event
     */
    export type SeveredRelationships =
      BaseNotificationPlain<"severed_relationships"> & {
        event: RelationshipSeveranceEvent;
      };

    /**
     * A moderator has taken action against your account or has sent you a warning
     */
    export type ModerationWarning =
      BaseNotificationPlain<"moderation_warning"> & {
        moderationWarning: AccountWarning;
      };

    export type Type = Notification["type"];
  }

  export interface NotificationRegistry {
    mention: Notification.Mention;
    status: Notification.Status;
    reblog: Notification.Reblog;
    follow: Notification.Follow;
    follow_request: Notification.FollowRequest;
    favourite: Notification.Favourite;
    poll: Notification.Poll;
    update: Notification.Update;
    "admin.sign_up": Notification.AdminSignUp;
    "admin.report": Notification.AdminReport;
    severed_relationships: Notification.SeveredRelationships;
    moderation_warning: Notification.ModerationWarning;
  }

  /**
   * Represents a notification of an event relevant to the user.
   * @see https://docs.joinmastodon.org/entities/notification
   */
  export type Notification = NotificationRegistry[keyof NotificationRegistry];
}
