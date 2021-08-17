import EventEmitter from 'eventemitter3';
import WebSocket from 'isomorphic-ws';
import semver from 'semver';

import { MastoConfig } from '../config';
import { Serializer } from '../serializers';
import { Event, EventType, EventTypeMap, Ws, WsEvents } from './ws';

/**
 * Mastodon streaming api wrapper
 */
export class WsEventsImpl
  extends EventEmitter<EventTypeMap>
  implements WsEvents
{
  constructor(
    private readonly ws: WebSocket,
    private readonly serializer: Serializer,
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
    protocols?: string | string[],
  ) {
    return new Promise<WsEvents>((resolve, reject) => {
      const ws = new WebSocket(url, protocols);
      const instance = new WsEventsImpl(ws, serializer);
      ws.addEventListener('message', instance.handleMessage);
      ws.addEventListener('error', reject);
      ws.addEventListener('open', () => resolve(instance));
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
  private handleMessage = ({ data }: { data: string }) => {
    const event = this.serializer.deserialize<Event>('application/json', data);
    let args: EventTypeMap[EventType] = [];

    try {
      args.push(this.serializer.deserialize('application/json', event.payload));
    } catch {
      args = [];
    }

    this.emit(event.event, ...args);
  };
}

export class WsImpl implements Ws {
  constructor(
    private readonly baseUrl: string,
    private readonly version: string,
    private readonly config: MastoConfig,
    private readonly serializer: Serializer,
  ) {}

  stream(
    path: string,
    rawParams: Record<string, unknown> = {},
  ): Promise<WsEvents> {
    // Since v2.8.4, it is supported to pass access token with`Sec-Websocket-Protocol`
    // https://github.com/tootsuite/mastodon/pull/10818
    const protocols = [];
    if (
      this.version &&
      this.config.accessToken &&
      semver.gte(this.version, '2.8.4', { loose: true })
    ) {
      protocols.push(this.config.accessToken);
    } else if (this.config.accessToken) {
      rawParams.accessToken = this.config.accessToken;
    }

    const params = this.serializer.serialize(
      'application/x-www-form-urlencoded',
      rawParams,
    );

    const url =
      this.baseUrl + path + (Object.keys(rawParams).length ? '?' + params : '');

    return WsEventsImpl.connect(url, this.serializer, protocols);
  }
}
