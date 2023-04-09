import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';

import type { MastoConfig } from '../config';
import type { Logger } from '../logger';
import type { Serializer } from '../serializers';
import type { Event, EventType, EventTypeMap, Ws, WsEvents } from './ws';

/**
 * Mastodon streaming api wrapper
 */
export class WsEventsNativeImpl
  extends EventEmitter<EventTypeMap>
  implements WsEvents
{
  constructor(
    private readonly ws: WebSocket,
    private readonly serializer: Serializer,
    private readonly logger: Logger,
  ) {
    super();
  }

  /**
   * Connect to the websocket endpoint
   * @param url URL of the websocket endpoint
   * @param protocols Subprotocol(s) for `Sec-Websocket-Protocol`
   * @param params URL parameters
   */
  static connect(
    url: string,
    serializer: Serializer,
    logger: Logger,
    protocols?: string | string[],
  ): Promise<WsEvents> {
    return new Promise<WsEvents>((resolve, reject) => {
      const ws = new WebSocket(url, protocols);
      const instance = new WsEventsNativeImpl(ws, serializer, logger);
      ws.addEventListener('message', instance.handleMessage);
      ws.addEventListener('error', reject);
      ws.addEventListener('open', () => resolve(instance));
    });
  }

  /**
   * Disconnect from the websocket endpoint
   */
  disconnect(): void {
    if (!this.ws) return;
    this.ws.close();
  }

  /**
   * Parse JSON data and emit it as an event
   * @param message Websocket message
   */
  private handleMessage = ({ data }: WebSocket.MessageEvent): void => {
    const { event, payload } = this.serializer.deserialize<Event>('json', data);

    this.logger.info(`↓ WEBSOCKET ${event}`);
    this.logger.debug('\tbody', payload);

    // https://github.com/neet/masto.js/issues/750
    if (event === 'delete') {
      return void this.emit(event, payload);
    }

    let args: EventTypeMap[EventType] = [];
    try {
      args.push(this.serializer.deserialize('json', payload));
    } catch {
      args = [];
    }

    this.emit(event, ...args);
  };
}

export class WsNativeImpl implements Ws {
  constructor(
    private readonly config: MastoConfig,
    private readonly serializer: Serializer,
    private readonly logger: Logger,
  ) {}

  stream(
    path: string,
    params: Record<string, unknown> = {},
  ): Promise<WsEvents> {
    return WsEventsNativeImpl.connect(
      this.config.resolveWebsocketPath(path, params),
      this.serializer,
      this.logger,
      this.config.createWebsocketProtocols(),
    );
  }
}
