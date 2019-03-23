import { EventEmitter } from 'eventemitter3';
import * as querystring from 'querystring';
import * as WebSocket from 'websocket';
import { Conversation } from '../entities/conversation';
import { Notification } from '../entities/notification';
import { Status } from '../entities/status';

interface EventTypes {
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

  /** WebSocket connected */
  connect: WebSocket.connection;

  /** WebSocket connection failed */
  connectFailed: Error;
}

/**
 * Mastodon streaming api wrapper
 * @param id URL of the websocket endpoint
 * @param token Access token
 */
export class EventHandler extends EventEmitter {
  constructor(url: string, options: { [key: string]: string }) {
    super();

    const client = new WebSocket.client();

    client.connect(`${url}?${querystring.stringify(options)}`);

    client.on('connect', connection => {
      connection.on('message', message => {
        if (message.type !== 'utf8' || !message.utf8Data) {
          return;
        }

        const data = JSON.parse(message.utf8Data);
        const event = data.event;
        let payload = '';

        try {
          payload = JSON.parse(data.payload);
        } catch {
          payload = data.payload;
        }

        this.emit(event, payload);
      });

      this.emit('connect', connection);
    });

    client.on('connectFailed', errorDescription => {
      this.emit('connectFailed', errorDescription);
    });

    return this;
  }

  // Adds type information
  // tslint:disable-next-line no-unnecessary-override
  public on<E extends keyof EventTypes, P = EventTypes[E]>(
    event: E,
    callback: (payload: P) => void,
  ): this {
    return super.on(event, callback);
  }
}
