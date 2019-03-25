// tslint:disable no-unnecessary-override
import { EventEmitter } from 'eventemitter3';
import * as WebSocket from 'websocket';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

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

export interface Message<Event extends EventTypes> {
  /** Event type */
  event: Event;

  /** Parsed payload data */
  data: EventTypesMap[Event];
}

/**
 * Mastodon streaming api wrapper
 */
export class StreamingHandler extends EventEmitter {
  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param params URL parameters
   */
  public connect = async (url: string) =>
    new Promise<StreamingHandler>((resolve, reject) => {
      new WebSocket.client()
        .on('connectFailed', reject)
        .on('connect', connection => {
          connection.on('message', this.handleMessage);
          resolve(this);
        })
        .connect(url);
    });

  /**
   * Parse JSON data and emit it as an event
   * @param message Websocket message
   */
  private handleMessage = (message: WebSocket.IMessage) => {
    if (message.type !== 'utf8' || !message.utf8Data) {
      return;
    }

    const parsedMessage = JSON.parse(message.utf8Data);

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
  public on<Event extends EventTypes>(
    event: Event,
    callback: (payload: Message<Event>) => void,
  ): this {
    return super.on(event, callback);
  }
}
