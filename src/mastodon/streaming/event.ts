import {
  type Announcement,
  type Conversation,
  type Notification,
  type Reaction,
  type Status,
} from "../entities/v1/index.js";
interface BaseEvent<T, U> {
  stream: string[];
  event: T;
  payload: U;
}

export type UpdateEvent = BaseEvent<"update", Status>;

export type DeleteEvent = BaseEvent<"delete", string>;

export type NotificationEvent = BaseEvent<"notification", Notification>;

export type FiltersChangedEvent = BaseEvent<"filters_changed", undefined>;

export type ConversationEvent = BaseEvent<"conversation", Conversation>;

export type AnnouncementEvent = BaseEvent<"announcement", Announcement>;

export type AnnouncementReactionEvent = BaseEvent<
  "announcement.reaction",
  Reaction
>;

export type AnnouncementDeleteEvent = BaseEvent<"announcement.delete", string>;

export type StatusUpdateEvent = BaseEvent<"status.update", Status>;

/** Accepted notification requests have finished merging, and the notifications list should be refreshed. Payload can be ignored. Available since v4.3.0 */
export type NotificationsMergedEvent = BaseEvent<
  "notifications_merged",
  undefined
>;

export interface EventRegistry {
  update: UpdateEvent;
  delete: DeleteEvent;
  notification: NotificationEvent;
  filters_changed: FiltersChangedEvent;
  conversation: ConversationEvent;
  announcement: AnnouncementEvent;
  "announcement.reaction": AnnouncementReactionEvent;
  "announcement.delete": AnnouncementDeleteEvent;
  "status.update": StatusUpdateEvent;
  notifications_merged: NotificationsMergedEvent;
}

export type Event = EventRegistry[keyof EventRegistry];
