// tslint:disable no-unnecessary-override
import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

/** Mastodon event */
export interface Event {
  event: EventType;
  payload: string;
}

export interface EventTypeMap {
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

export type EventType = keyof EventTypeMap;
export type EventListener<T extends EventType> = (
  payload: EventTypeMap[T],
) => void;

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

      this.ws.on('message', this.handleMessage);
      this.ws.on('error', reject);
      this.ws.on('open', () => {
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
  public handleMessage = (message: string) => {
    const event = JSON.parse(message) as Event;
    let data: EventTypeMap[keyof EventTypeMap];

    try {
      data = JSON.parse(event.payload);
    } catch {
      // If parsing failed, returns raw data
      // Basically this is handling for `filters_changed` event
      // Which doesn't contain payload in the data
      data = event.payload;
    }

    this.emit(event.event, data);
  };

  /*-------------------------------
   *
   * ↓ Overwriting signatures
   *
   *------------------------------*/

  public listeners<T extends EventType>(event: T) {
    return super.listeners(event);
  }

  public listenerCount<T extends EventType>(event: T) {
    return super.listenerCount(event);
  }

  public emit<T extends EventType>(event: T, ...args: any[]) {
    return super.emit(event, ...args);
  }

  public addListener<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    return super.addListener(event, fn, context);
  }

  public on<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    return super.on(event, fn, context);
  }

  public once<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    return super.once(event, fn, context);
  }

  public removeListener<T extends EventType>(
    event: T,
    fn?: EventListener<T>,
    context?: any,
    once?: boolean,
  ) {
    return super.removeListener(event, fn, context, once);
  }

  public off<T extends EventType>(
    event: T,
    fn?: EventListener<T>,
    context?: any,
    once?: boolean,
  ) {
    return super.off(event, fn, context, once);
  }

  public removeAllListeners<T extends EventType>(event?: T) {
    return super.removeAllListeners(event);
  }
}
