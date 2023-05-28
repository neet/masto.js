import type WebSocket from 'ws';

import { type Serializer } from '../../interfaces';
import { type mastodon } from '../../mastodon';
import { MastoUnexpectedError } from '../errors';
import { type WebSocketConnection } from './web-socket-connector';

export class WebSocketSubscription implements mastodon.streaming.Subscription {
  private connection?: WebSocketConnection;

  constructor(
    private readonly connections: AsyncIterable<WebSocketConnection>,
    private readonly serializer: Serializer,
    private readonly stream: mastodon.streaming.Stream,
    private readonly params?: Record<string, unknown>,
  ) {}

  async *values(): AsyncIterableIterator<mastodon.streaming.Event> {
    for await (this.connection of this.connections) {
      const data = this.serializer.serialize('json', {
        type: 'subscribe',
        stream: this.stream,
        ...this.params,
      });

      if (data == undefined) {
        throw new MastoUnexpectedError('Failed to serialize data');
      }

      this.connection.send(data);

      for await (const event of this.mapEvents(this.connection.messages)) {
        if (!event.stream.includes(this.stream as string)) {
          continue;
        }

        yield event;
      }
    }
  }

  unsubscribe(): void {
    const data = this.serializer.serialize('json', {
      type: 'unsubscribe',
      stream: this.stream,
      ...this.params,
    });

    if (this.connection == undefined) {
      throw new MastoUnexpectedError('No connection established');
    }

    if (data == undefined) {
      throw new MastoUnexpectedError('Failed to serialize data');
    }

    this.connection.send(data);
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<mastodon.streaming.Event> {
    return this.values();
  }

  private async *mapEvents(messages: AsyncIterable<WebSocket.MessageEvent>) {
    for await (const message of messages) {
      const event = await this.parseMessage(message.data as string);
      yield event;
    }
  }

  private async parseMessage(
    rawEvent: string,
  ): Promise<mastodon.streaming.Event> {
    const data = this.serializer.deserialize<mastodon.streaming.RawEvent>(
      'json',
      rawEvent,
    );

    if ('error' in data) {
      throw new MastoUnexpectedError(data.error);
    }

    const payload =
      data.event === 'delete'
        ? data.payload
        : this.serializer.deserialize('json', data.payload);

    return {
      stream: data.stream,
      event: data.event,
      payload: payload,
    } as mastodon.streaming.Event;
  }
}
