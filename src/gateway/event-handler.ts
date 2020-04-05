import EventEmitter from 'eventemitter3';

import { Conversation, Notification, Status } from '../entities';

/** Map of event name and callback argument */
export interface EventTypeMap {
  /** Status posted */
  update: [Status];
  /** Status deleted */
  delete: [Status['id']];
  /** User's notification */
  notification: [Notification];
  /** User's filter changed */
  filters_changed: [];
  /** Status added to a conversation */
  conversation: [Conversation];
  /** for RxJS' `fromEvent` compatibility */
  [K: string]: unknown[];
}

/** Supported event names */
export type EventType =
  | 'update'
  | 'delete'
  | 'notification'
  | 'filters_changed'
  | 'conversation';

/** Mastodon event */
export interface Event {
  event: EventType;
  payload: string;
}

export interface EventHandler extends EventEmitter<EventTypeMap> {
  connect(url: string, protocols: string[]): Promise<EventHandler>;
  disconnect(): void;
}
