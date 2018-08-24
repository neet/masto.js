import * as queryString from 'query-string';
import * as WebSocket from 'websocket';
import EventEmitter from 'eventemitter3';
import { Status } from '../entities/Status';
import { Notification } from '../entities/Notification';

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
   * @param id ID of the channel e.g. "public/local"
   * @param path Base URL of WebScoekt
   * @param token Access token
   */
  constructor (id: string, path: string, token?: string) {
    super();

    const params: any = { stream: id };

    if ( token ) {
      params.access_token = token;
    }

    const client = new WebSocket.client();

    client.connect(`${path}/streaming?${queryString.stringify(params)}`);

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

  public on <E extends keyof EventTypes, P = EventTypes[E]>(event: E, callback: (payload: P) => void): this {
    return super.on(event, callback);
  }
}
