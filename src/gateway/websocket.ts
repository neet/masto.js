import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

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
}

/** Supported event names */
export type EventType = keyof EventTypeMap;

/** Mastodon event */
export interface Event {
  event: EventType;
  payload: string;
}

/**
 * Mastodon streaming api wrapper
 */
export class WebSocketEvents extends EventEmitter<EventTypeMap> {
  private ws?: WebSocket;

  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param protocols Subprotocol(s) for `Sec-Websocket-Protocol`
   * @param params URL parameters
   */
  connect(url: string, protocols?: string | string[]) {
    return new Promise<WebSocketEvents>((resolve, reject) => {
      this.ws = new WebSocket(url, protocols);
      this.ws.addEventListener('open', () => resolve(this));
      this.ws.addEventListener('message', this.handleMessage);
      this.ws.addEventListener('error', reject);
    });
  }

  /**
   * Disconnect from the websocket endpoint
   */
  disconnect() {
    if (!this.ws) return;
    this.ws.close();
  }

  /**
   * Parse JSON data and emit it as an event
   * @param message Websocket message
   */
  handleMessage = ({ data }: { data: string }) => {
    const event = JSON.parse(data) as Event;
    let args: EventTypeMap[EventType];

    try {
      args = [JSON.parse(event.payload)];
    } catch {
      args = [];
    }

    this.emit(event.event, ...args);
  };
}
