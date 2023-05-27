import WebSocket from 'ws';

import type { Serializer } from '../../interfaces';
import type { mastodon } from '../../mastodon';
import { MastoUnexpectedError } from '../errors';
import type { WebSocketConnection } from './web-socket-connector';

export class WebSocketClientNativeImpl implements mastodon.streaming.Client {
  private connection?: WebSocketConnection;

  constructor(
    private readonly connections: AsyncIterable<WebSocketConnection>,
    private readonly serializer: Serializer,
    private readonly onClose: () => void,
  ) {}

  get readyState(): number {
    return this.connection?.readyState ?? WebSocket.CLOSED;
  }

  subscribe(
    stream: 'list',
    params: mastodon.streaming.SubscribeListParams,
  ): AsyncIterableIterator<mastodon.streaming.Event>;
  subscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: mastodon.streaming.SubscribeHashtagParams,
  ): AsyncIterableIterator<mastodon.streaming.Event>;
  subscribe(
    stream: mastodon.streaming.Stream,
  ): AsyncIterableIterator<mastodon.streaming.Event>;
  async *subscribe(
    stream: unknown,
    params?: Record<string, unknown>,
  ): AsyncIterableIterator<mastodon.streaming.Event> {
    for await (this.connection of this.connections) {
      const data = this.serializer.serialize('json', {
        type: 'subscribe',
        stream,
        ...params,
      });

      if (data == undefined) {
        throw new MastoUnexpectedError('Failed to serialize data');
      }

      this.connection.send(data);

      for await (const event of this.mapEvents(this.connection.messages)) {
        if (!event.stream.includes(stream as string)) {
          continue;
        }

        yield event;
      }
    }
  }

  unsubscribe(
    stream: 'list',
    params: mastodon.streaming.SubscribeListParams,
  ): void;
  unsubscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: mastodon.streaming.SubscribeHashtagParams,
  ): void;
  unsubscribe(stream: mastodon.streaming.Stream): void;
  unsubscribe(stream: unknown, params?: Record<string, unknown>): void {
    const data = this.serializer.serialize('json', {
      type: 'unsubscribe',
      stream,
      ...params,
    });

    if (this.connection == undefined) {
      throw new MastoUnexpectedError('No connection established');
    }

    if (data == undefined) {
      throw new MastoUnexpectedError('Failed to serialize data');
    }

    this.connection.send(data);
  }

  close(): void {
    this.onClose();
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
