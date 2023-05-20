import type WebSocket from 'ws';

import { MastoInvalidArgumentError } from '../errors';
import type { Logger } from '../logger';
import { ExponentialBackoff } from '../utils';
import { waitForAsyncIterableToEnd } from '../utils/wait-for-async-iterable-to-end';
import { webSocket } from '../utils/web-socket';

export type WebSocketConnection = {
  readonly messages: AsyncIterable<WebSocket.MessageEvent>;
  readonly readyState: number;
  readonly close: () => void;
  readonly send: (data: string) => void;
};

export class WebSocketConnector {
  private ws?: WebSocket;
  private isClosed = false;

  constructor(
    private readonly params: ConstructorParameters<typeof WebSocket>,
    private readonly logger: Logger,
    private readonly maxAttempts = Number.POSITIVE_INFINITY,
  ) {}

  async *getConnections(): AsyncGenerator<WebSocketConnection> {
    const backoff = new ExponentialBackoff(2);

    while (backoff.attempts < this.maxAttempts && !this.isClosed) {
      try {
        this.ws = await webSocket.promises.connect(this.params);
        this.logger.debug('WebSocket connection established');
        const messages = webSocket.toAsyncIterable(this.ws);

        yield {
          messages,
          readyState: this.ws.readyState,
          send: this.ws.send.bind(this.ws),
          close: this.close.bind(this),
        };

        await waitForAsyncIterableToEnd(messages);
        this.logger.debug('WebSocket connection closed');
        backoff.clear();
      } catch (error) {
        this.logger.warn('WebSocket error occurred', error);
      } finally {
        this.logger.debug(`Reconnecting in ${backoff.timeout}ms...`);
        await backoff.sleep();
      }
    }
  }

  close(): void {
    if (this.ws == undefined) {
      throw new MastoInvalidArgumentError('WebSocket is not connected');
    }

    this.isClosed = true;
    this.ws.close();
  }
}
