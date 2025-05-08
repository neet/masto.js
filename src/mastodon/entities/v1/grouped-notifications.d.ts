import { type Account } from "./account.js";
import { type AccountWarning } from "./account-warning.js";
import { type RelationshipSeveranceEvent } from "./relationship-severance-event.ts";
import { type Report } from "./report.ts";
import { type Status } from "./status.js";

declare namespace mastodon.v1 {
  declare namespace GroupedNotifications {
    interface BaseNotificationGroup<T> {
      /** Group key identifying the grouped notifications. Should be treated as an opaque value. */
      groupKey: string;
      /** Total number of individual notifications that are part of this notification group. */
      notificationsCount: number;
      /** The type of event that resulted in the notifications in this group. */
      type: T;
      /** ID of the most recent notification in the group. */
      mostRecentNotificationId: string;
      /** ID of the oldest notification from this group represented within the current page. This is only returned when paginating through notification groups. Useful when polling new notifications. */
      pageMinId?: string;
      /** ID of the newest notification from this group represented within the current page. This is only returned when paginating through notification groups. Useful when polling new notifications. */
      pageMaxId?: string;
      /** Date at which the most recent notification from this group within the current page has been created. This is only returned when paginating through notification groups. */
      latestPageNotificationAt?: string;
      /** IDs of some of the accounts who most recently triggered notifications in this group. */
      sampleAccountIds: string;
      /** ID of the Status that was the object of the notification. Attached when type of the notification is favourite, reblog, status, mention, poll, or update. */
      statusId?: undefined | null;
      /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
      report?: undefined | null;
      /** Summary of the event that caused follow relationships to be severed. Attached when type of the notification is severed_relationships. */
      event?: undefined | null;
      /** Moderation warning that caused the notification. Attached when type of the notification is moderation_warning. */
      moderationWarning?: undefined | null;
    }

    type NotificationGroupPlain<T> = BaseNotificationGroup<T>;

    type NotificationGroupWithStatusId<T> = BaseNotificationGroup<T> & {
      /** ID of the Status that was the object of the notification. Attached when type of the notification is favourite, reblog, status, mention, poll, or update. */
      statusId: string;
    };

    type NotificationGroupWithReport<T> = BaseNotificationGroup<T> & {
      /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
      report: Report;
    };

    type NotificationGroupWithEvent<T> = BaseNotificationGroup<T> & {
      /** Summary of the event that caused follow relationships to be severed. Attached when type of the notification is severed_relationships. */
      event: RelationshipSeveranceEvent;
    };

    type NotificationGroupWithModerationWarning<T> =
      BaseNotificationGroup<T> & {
        /** Moderation warning that caused the notification. Attached when type of the notification is moderation_warning. */
        moderationWarning: AccountWarning;
      };

    /** Someone mentioned you in their status */
    export type Mention = NotificationGroupWithStatusId<"mention">;

    /** Someone you enabled notifications for has posted a status */
    export type Status = NotificationGroupWithStatusId<"status">;

    /** Someone boosted one of your statuses */
    export type Reblog = NotificationGroupWithStatusId<"reblog">;

    /** Someone followed you */
    export type Follow = NotificationGroupPlain<"follow">;

    /** Someone requested to follow you */
    export type FollowRequest = NotificationGroupPlain<"follow_request">;

    /**  Someone favourited one of your statuses */
    export type Favourite = NotificationGroupWithStatusId<"favourite">;

    /** A poll you have voted in or created has ended */
    export type Poll = NotificationGroupWithStatusId<"poll">;

    /** A status you interacted with has been edited */
    export type Update = NotificationGroupWithStatusId<"update">;

    /** Someone signed up (optionally sent to admins) */
    export type AdminSignUp = NotificationGroupPlain<"admin.sign_up">;

    /** A new report has been filed */
    export type AdminReport = NotificationGroupWithReport<"admin.report">;

    /** Some of your follow relationships have been severed as a result of a moderation or block event */
    export type SeveredRelationships =
      NotificationGroupWithEvent<"severed_relationships">;

    /** A moderator has taken action against your account or has sent you a warning */
    export type ModerationWarning =
      NotificationGroupWithModerationWarning<"moderation_warning">;

    export type Type = NotificationGroup["type"];
  }

  /** These are stripped-down versions of {@link Account} that only contain what is necessary to display a list of avatars, as well as a few other useful properties. The aim is to cut back on expensive server-side serialization and reduce the network payload size of notification groups. */
  export type PartialAccountWithAvatar = Pick<
    Account,
    "id" | "acct" | "url" | "avatar" | "avatarStatic" | "locked" | "bot"
  >;

  export interface GroupedNotificationsResults {
    /** Accounts referenced by grouped notifications. */
    accounts: Account[];
    /** Partial accounts referenced by grouped notifications. Those are only returned when requesting grouped notifications with `expand_accounts=partial_avatars`. */
    partialAccounts?: PartialAccountWithAvatar[];
    /** Statuses referenced by grouped notifications. */
    statuses: Status[];
    /** The grouped notifications themselves. */
    notificationGroups: NotificationGroup[];
  }

  export interface NotificationGroupRegistry {
    mention: GroupedNotifications.Mention;
    status: GroupedNotifications.Status;
    reblog: GroupedNotifications.Reblog;
    follow: GroupedNotifications.Follow;
    follow_request: GroupedNotifications.FollowRequest;
    favourite: GroupedNotifications.Favourite;
    poll: GroupedNotifications.Poll;
    update: GroupedNotifications.Update;
    "admin.sign_up": GroupedNotifications.AdminSignUp;
    "admin.report": GroupedNotifications.AdminReport;
    severed_relationships: GroupedNotifications.SeveredRelationships;
    moderation_warning: GroupedNotifications.ModerationWarning;
  }

  /** Group key identifying the grouped notifications. Should be treated as an opaque value. */
  export type NotificationGroup =
    NotificationGroupRegistry[keyof NotificationGroupRegistry];
}
