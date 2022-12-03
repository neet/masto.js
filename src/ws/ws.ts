import type EventEmitter from 'eventemitter3';

import type {
  Announcement,
  Conversation,
  Notification,
  Reaction,
  Status,
} from '../api/v1/entities';

/**
 * Map of event name and callback argument
 * @see https://docs.joinmastodon.org/methods/streaming/#events
 */
export interface EventTypeMap {
  /** A new Status has appeared. Payload contains a Status cast to a string. Available since v1.0.0 */
  update: [Status];
  /** A status has been deleted. Payload contains the String ID of the deleted Status. Available since v1.0.0 */
  delete: [Status['id']];
  /** A new notification has appeared. Payload contains a Notification cast to a string. Available since v1.4.2 */
  notification: [Notification];
  /** Keyword filters have been changed. Either does not contain a payload (for WebSocket connections), or contains an undefined payload (for HTTP connections). Available since v2.4.3 */
  filters_changed: [];
  /** A direct conversation has been updated. Payload contains a Conversation cast to a string. Available since v2.6.0 */
  conversation: [Conversation];
  /** A Status has been edited. Payload contains a Status cast to a string. Available since v3.5.0 */
  'status.update': [Status];
  /** An announcement has been published. Payload contains an Announcement cast to a string. Available since v3.1.0 */
  announcement: [Announcement];
  /** An announcement has received an emoji reaction. Payload contains a Hash (with name, count, and announcement_id) cast to a string. Available since v3.1.0 */
  'announcement.reaction': [Reaction];
  /** An announcement has been deleted. Payload contains the String ID of the deleted Announcement. Available since v3.1.0 */
  'announcement.delete': [Announcement['id']];
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
