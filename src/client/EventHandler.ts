import * as queryString from 'query-string';
import * as WebSocket from 'websocket';
import EventEmitter from 'eventemitter3';
import { Status } from '../entities/Status';
import { Notification } from '../entities/Notification';

export interface Events {
  // Mastodon Events
  on (event: 'update', callback: (payload: Status) => void): this;
  on (event: 'delete', callback: (payload: Status['id']) => void): this;
  on (event: 'notification', callback: (payload: Notification) => void): this;
  on (event: 'filters_changed', callback: (payload: undefined) => void): this;

  // WebSocket.client events
  on (event: 'connect', callback: (payload: WebSocket.connection) => void): this;
  on (event: 'connectFailed', callback: (payload: Error) => void): this;
}

export class EventHandler extends EventEmitter implements Events {

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

}
