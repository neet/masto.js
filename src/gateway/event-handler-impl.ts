import { camelCase } from 'change-case';
import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';

import { Event, EventHandler, EventType, EventTypeMap } from './event-handler';
import { transformKeys } from './transform-keys';

/**
 * Mastodon streaming api wrapper
 */
export class EventHandlerImpl
  extends EventEmitter<EventTypeMap>
  implements EventHandler {
  private ws?: WebSocket;

  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param protocols Subprotocol(s) for `Sec-Websocket-Protocol`
   * @param params URL parameters
   */
  connect(url: string, protocols?: string | string[]) {
    return new Promise<this>((resolve, reject) => {
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
    const event = transformKeys<Event>(JSON.parse(data), camelCase);
    let args: EventTypeMap[EventType] = [];

    try {
      args.push(transformKeys(JSON.parse(event.payload), camelCase));
    } catch {
      args = [];
    }

    this.emit(event.event, ...args);
  };
}
