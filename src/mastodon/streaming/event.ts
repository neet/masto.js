import type * as v1 from "../entities/v1";

export interface RawEventOk {
  stream: string[];
  event: string;
  payload?: string;
}

export interface RawEventError {
  error: string;
}

export type RawEvent = RawEventOk | RawEventError;

interface BaseEvent<T, U> {
  stream: string[];
  event: T;
  payload: U;
}

export type Event =
  | Event.Update
  | Event.Delete
  | Event.Notification
  | Event.FiltersChanged
  | Event.Conversation
  | Event.Announcement
  | Event.Announcement.Reaction
  | Event.Announcement.Delete
  | Event.Status.Update;

export namespace Event {
  export type Update = BaseEvent<"update", v1.Status>;

  export type Delete = BaseEvent<"delete", string>;

  export type Notification = BaseEvent<"notification", v1.Notification>;

  export type FiltersChanged = BaseEvent<"filters_changed", undefined>;

  export type Conversation = BaseEvent<"conversation", v1.Conversation>;

  export type Announcement = BaseEvent<"announcement", v1.Announcement>;

  export namespace Announcement {
    export type Reaction = BaseEvent<"announcement.reaction", v1.Reaction>;

    export type Delete = BaseEvent<"announcement.delete", string>;
  }

  export namespace Status {
    export type Update = BaseEvent<"status.update", v1.Status>;
  }
}

/** @deprecated Use Event.Update */
export type UpdateEvent = Event.Update;

/** @deprecated Use Event.Delete */
export type DeleteEvent = Event.Delete;

/** @deprecated Use Event.Notification */
export type NotificationEvent = Event.Notification;

/** @deprecated Use Event.FiltersChanged */
export type FiltersChangedEvent = Event.FiltersChanged;

/** @deprecated Use Event.Conversation */
export type ConversationEvent = Event.Conversation;

/** @deprecated Use Event.Announcement */
export type AnnouncementEvent = Event.Announcement;

/** @deprecated Use Event.Announcement.Reaction */
export type AnnouncementReactionEvent = Event.Announcement.Reaction;

/** @deprecated Use Event.Announcement.Delete */
export type AnnouncementDeleteEvent = Event.Announcement.Delete;

/** @deprecated Use Event.Status.Update */
export type StatusUpdateEvent = Event.Status.Update;
