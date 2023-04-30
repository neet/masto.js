import { WebSocket } from 'ws';

import type { Logger, MastoConfig, Serializer } from '..';
import { WebSocketAPIConnectionImpl } from '..';
import type { WebSocketAPIConnection } from '../mastodon';
import { ExponentialBackoff } from '../utils';

export interface ConnectParams {
  readonly retry?: boolean;
}

export class WebSocketAPIConnector {
  constructor(
    private readonly config: MastoConfig,
    private readonly serializer: Serializer,
    private readonly logger: Logger,
  ) {}

  connect(params: {
    retry: true;
  }): AsyncIterableIterator<WebSocketAPIConnection>;
  connect(params?: { retry: false }): Promise<WebSocketAPIConnection>;
  connect(
    params: ConnectParams = {},
  ):
    | Promise<WebSocketAPIConnection>
    | AsyncIterableIterator<WebSocketAPIConnection> {
    const { retry = false } = params;
    return retry ? this._connectRetry() : this._connect();
  }

  private _connect(): Promise<WebSocketAPIConnection> {
    const url = this.config.resolveWebsocketPath('/api/v1/streaming');
    const protocols = this.config.createWebsocketProtocols();
    const ws = new WebSocket(url.toString(), protocols);

    return new Promise<WebSocketAPIConnection>((resolve, reject) => {
      ws.addEventListener('error', (error) => reject(error), { once: true });
      ws.addEventListener(
        'open',
        () => {
          const client = new WebSocketAPIConnectionImpl(ws, this.serializer);
          resolve(client);
        },
        { once: true },
      );
    });
  }

  private async *_connectRetry(): AsyncIterableIterator<WebSocketAPIConnection> {
    const backoff = new ExponentialBackoff(2);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const ws = await this._connect();
        this.logger.debug('WebSocket connection established');
        yield ws;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for await (const _ of ws.events) {
          // noop
        }

        backoff.clear();
      } catch (error) {
        this.logger.error('WebSocket error occurred', error);
      } finally {
        this.logger.debug(
          `WebSocket connection closed. Reconnecting in ${backoff.timeout} ms`,
        );
        await backoff.sleep();
      }
    }
  }
}
