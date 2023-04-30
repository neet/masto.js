import type { mastodon } from '../..';

export type RawEventOk = {
  stream: string[];
  event: string;
  payload: string;
};

export type RawEventError = {
  error: string;
};

export type RawEvent = RawEventOk | RawEventError;

type BaseEvent<T, U> = {
  stream: string[];
  event: T;
  payload: U;
};

export type UpdateEvent = BaseEvent<'update', mastodon.v1.Status>;

export type DeleteEvent = BaseEvent<'delete', string>;

export type NotificationEvent = BaseEvent<
  'notification',
  mastodon.v1.Notification
>;

export type FiltersChangedEvent = BaseEvent<'filters_changed', undefined>;

export type ConversationEvent = BaseEvent<
  'conversation',
  mastodon.v1.Conversation
>;

export type AnnouncementEvent = BaseEvent<
  'announcement',
  mastodon.v1.Announcement
>;

export type AnnouncementReactionEvent = BaseEvent<
  'announcement.reaction',
  mastodon.v1.Reaction
>;

export type AnnouncementDeleteEvent = BaseEvent<'announcement.delete', string>;

export type StatusUpdateEvent = BaseEvent<'status.update', mastodon.v1.Status>;

export type Event =
  | UpdateEvent
  | DeleteEvent
  | NotificationEvent
  | FiltersChangedEvent
  | ConversationEvent
  | AnnouncementEvent
  | AnnouncementReactionEvent
  | AnnouncementDeleteEvent
  | StatusUpdateEvent;
