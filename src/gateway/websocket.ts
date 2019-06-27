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

      this.ws.addEventListener('open', () => {
        resolve(this);
      });

      this.ws.addEventListener('message', this.handleMessage);

      this.ws.addEventListener('error', reject);
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
  public handleMessage = ({ data }: { data: string }) => {
    const event = JSON.parse(data) as Event;
    let parsedData: EventTypeMap[EventType];

    try {
      parsedData = JSON.parse(event.payload);
    } catch {
      // If parsing failed, returns raw data
      // Basically this is handling for `filters_changed` event
      // Which doesn't contain payload in the data
      parsedData = event.payload;
    }

    this.emit(event.event, parsedData);
  };

  /*-------------------------------
   * Overwriting signatures
   *------------------------------*/

  public listeners<T extends EventType>(event: T) {
    /* istanbul ignore next */
    return super.listeners(event);
  }

  public listenerCount<T extends EventType>(event: T) {
    /* istanbul ignore next */
    return super.listenerCount(event);
  }

  public emit<T extends EventType>(event: T, ...args: any[]) {
    /* istanbul ignore next */
    return super.emit(event, ...args);
  }

  public addListener<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    /* istanbul ignore next */
    return super.addListener(event, fn, context);
  }

  public on<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    /* istanbul ignore next */
    return super.on(event, fn, context);
  }

  public once<T extends EventType>(
    event: T,
    fn: EventListener<T>,
    context?: any,
  ) {
    /* istanbul ignore next */
    return super.once(event, fn, context);
  }

  public removeListener<T extends EventType>(
    event: T,
    fn?: EventListener<T>,
    context?: any,
    once?: boolean,
  ) {
    /* istanbul ignore next */
    return super.removeListener(event, fn, context, once);
  }

  public off<T extends EventType>(
    event: T,
    fn?: EventListener<T>,
    context?: any,
    once?: boolean,
  ) {
    /* istanbul ignore next */
    return super.off(event, fn, context, once);
  }

  public removeAllListeners<T extends EventType>(event?: T) {
    /* istanbul ignore next */
    return super.removeAllListeners(event);
  }
}
