import { Notification } from '@/entities/Notification';
import { Status } from '@/entities/Status';
import { EventEmitter } from 'eventemitter3';
import * as querystring from 'querystring';
import * as WebSocket from 'websocket';

interface EventTypes {
  /** Status posted */
  update: Status;
  /** Status deleted */
  delete: Status['id'];
  /** User's notification */
  notification: Notification;
  /** User's filter changed */
  filters_changed: undefined;
  /** WebSocket connected */
  connect: WebSocket.connection;
  /** WebSocket connection failed */
  connectFailed: Error;
}

export class EventHandler extends EventEmitter {

  /**
   * Starting stream with a specified channel
   * @param id URL of the websocket endpoint
   * @param token Access token
   */
  constructor (url: string, options: { [key: string]: string }) {
    super();

    const client = new WebSocket.client();

    client.connect(`${url}?${querystring.stringify(options)}`);

    client.on('connect', (connection) => {
      connection.on('message', (message) => {
        if (message.type !== 'utf8' || !message.utf8Data) {
          return;
        }

        const { event, payload } = JSON.parse(message.utf8Data);
        const parsedPayload      = JSON.parse(payload);

        this.emit(event, parsedPayload);
      });

      this.emit('connect', connection);
    });

    client.on('connectFailed', (errorDescription) => {
      this.emit('connectFailed', errorDescription);
    });

    return this;
  }

  public on <E extends keyof EventTypes, P = EventTypes[E]> (event: E, callback: (payload: P) => void): this {
    return super.on(event, callback);
  }
}
