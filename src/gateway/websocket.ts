// tslint:disable no-unnecessary-override
import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

/** Callback argument of `ws` */
export interface Message {
  data: string;
  type: string;
  target: WebSocket;
}

export interface EventTypesMap {
  /** Status posted */
  update: Status;
  /** Status deleted */
  delete: Status['id'];
  /** User's notification */
  notification: Notification;
  /** User's filter changed */
  filters_changed: undefined;
  /** Status added to a conversation */
  conversation: Conversation;
}

export type EventTypes = keyof EventTypesMap;

/**
 * Mastodon streaming api wrapper
 */
export class WebSocketEvents extends EventEmitter {
  private ws?: WebSocket;

  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param protocols Subprotocol(s) for `Sec-Websocket-Protocol`
   * @param params URL parameters
   */
  public connect(url: string, protocols?: string | string[]) {
    return new Promise<WebSocketEvents>((resolve, reject) => {
      this.ws = new WebSocket(url, protocols);

      this.ws.addEventListener('message', this.handleMessage);
      this.ws.addEventListener('error', reject);
      this.ws.addEventListener('open', () => {
        resolve(this);
      });
    });
  }

  /**
   * Disconnect from the websocket endpoint
   */
  public disconnect() {
    if (!this.ws) return;
    this.ws.close();
  }

  /**
   * Parse JSON data and emit it as an event
   * @param message Websocket message
   */
  public handleMessage = (message: Message) => {
    const parsedMessage = JSON.parse(message.data);
    let data: string | { [key: string]: any };

    try {
      data = JSON.parse(parsedMessage.payload);
    } catch {
      // If parsing failed, returns raw data
      // Basically this is handling for `filters_changed` event
      // Which doesn't contain payload in the data
      data = parsedMessage.payload;
    }

    this.emit(parsedMessage.event, data);
  };

  /**
   * Add listener for the event
   * @param event Type of the event. One of `update`, `delete`, `notification`, `filters_changed`, `conversation`
   * @param callback Callback function
   */
  public on<T extends EventTypes>(
    event: T,
    callback: (payload: EventTypesMap[T]) => void,
  ) {
    return super.on(event, callback);
  }
}
