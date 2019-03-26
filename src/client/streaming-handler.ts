// tslint:disable no-unnecessary-override
import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

/** Callback argument of `ws` */
export interface Message {
  data: any;
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

export interface Event<T extends EventTypes = EventTypes> {
  /** Event type */
  event: T;
  /** Parsed payload data */
  data: EventTypesMap[T];
}

/**
 * Mastodon streaming api wrapper
 */
export class StreamingHandler extends EventEmitter {
  private ws?: WebSocket;

  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param params URL parameters
   */
  public connect = async (url: string) =>
    new Promise<StreamingHandler>((resolve, reject) => {
      this.ws = new WebSocket(url);

      this.ws.addEventListener('message', this.handleMessage);
      this.ws.addEventListener('error', reject);
      this.ws.addEventListener('open', () => {
        resolve(this);
      });
    });

  /**
   * Disconnect from the websocket endpoint
   */
  public disconnect = () => {
    if (!this.ws) return;
    this.ws.close();
  };

  /**
   * Parse JSON data and emit it as an event
   * @param message Websocket message
   */
  private handleMessage = (message: Message) => {
    if (message.type !== 'utf8') {
      return;
    }

    const parsedMessage = JSON.parse(message.data);

    try {
      parsedMessage.data = JSON.parse(parsedMessage.payload);
    } catch {
      // If parsing failed, returns raw data
      // Basically this is handling for `filters_changed` event
      // Which doesn't contain payload in the data
      parsedMessage.data = parsedMessage.payload;
    }

    this.emit(parsedMessage.event, parsedMessage);
  };

  /**
   * Add listener for the event
   * @param event Type of the event. One of `update`, `delete`, `notification`, `filters_changed`, `conversation`
   * @param callback Callback function
   */
  public on<T extends EventTypes>(
    event: T,
    callback: (payload: Event<T>) => void,
  ): this {
    return super.on(event, callback);
  }
}
