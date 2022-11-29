import type EventEmitter from 'eventemitter3';

import type { Conversation, Notification, Status } from '../entities';

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
  /** Status updated */
  'status.update': [Status];
  /** for RxJS' `fromEvent` compatibility */
  [K: string]: unknown[];
}

/** Supported event names */
export type EventType = keyof EventTypeMap;

/** Mastodon event */
export interface Event {
  event: EventType;
  payload: string;
}

export type WsEventHandler<T extends EventType> = (
  ...data: EventTypeMap[T]
) => unknown;

export interface WsEvents extends Omit<EventEmitter<EventTypeMap>, 'on'> {
  readonly disconnect: () => void;
  readonly on: <T extends EventType>(name: T, cb: WsEventHandler<T>) => void;
}

export interface Ws {
  stream(path: string, params: unknown): Promise<WsEvents>;
}
