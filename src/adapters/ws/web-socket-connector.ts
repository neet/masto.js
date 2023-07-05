import type WebSocket from 'ws';

import { type Logger, type WebSocketConfig } from '../../interfaces';
import { ExponentialBackoff } from '../../utils';
import { toAsyncIterable } from './async-iterable';
import { connect } from './connect';
import { waitForAsyncIterableToEnd } from './wait-for-async-iterable-to-end';

export type WebSocketConnection = {
  readonly messages: AsyncIterable<WebSocket.MessageEvent>;
  readonly readyState: number;
  readonly close: () => void;
  readonly send: (data: string) => void;
};

export class WebSocketConnector {
  private ws?: WebSocket;
  private disableRetry = false;

  constructor(
    private readonly params: ConstructorParameters<typeof WebSocket>,
    private readonly logger: Logger,
    private readonly config: WebSocketConfig,
  ) {}

  async *getConnections(): AsyncGenerator<WebSocketConnection> {
    const backoff = new ExponentialBackoff(2);

    while (this.shouldRetry(backoff)) {
      try {
        this.ws = await connect(this.params);
        this.logger.info('WebSocket connection established');
        const messages = toAsyncIterable(this.ws);

        yield {
          messages,
          readyState: this.ws.readyState,
          send: this.ws.send.bind(this.ws),
          close: this.close.bind(this),
        };

        await waitForAsyncIterableToEnd(messages);
        this.logger.info('WebSocket connection closed');
        backoff.clear();
      } catch (error) {
        this.logger.warn('WebSocket error occurred', error);
      } finally {
        this.logger.info(`Reconnecting in ${backoff.getTimeout()}ms...`);
        await backoff.sleep();
      }
    }
  }

  close(): void {
    // It can be undefined if client is closed before connection is established
    if (this.ws == undefined) {
      return;
    }

    this.disableRetry = true;
    this.ws.close();
  }

  private shouldRetry(backoff: ExponentialBackoff): boolean {
    if (this.disableRetry) {
      return false;
    }

    return backoff.getAttempts() < this.config.getMaxAttempts();
  }
}
