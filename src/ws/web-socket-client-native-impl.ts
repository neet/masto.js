import WebSocket from 'ws';

import { MastoUnexpectedError } from '../errors';
import type { mastodon } from '../mastodon';
import type { Serializer } from '../serializers';
import type { WebSocketConnection } from './web-socket-connector';

export class WebSocketClientNativeImpl implements mastodon.WebSocketClient {
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
    params: mastodon.SubscribeListParams,
  ): AsyncIterableIterator<mastodon.Event>;
  subscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: mastodon.SubscribeHashtagParams,
  ): AsyncIterableIterator<mastodon.Event>;
  subscribe(stream: mastodon.Stream): AsyncIterableIterator<mastodon.Event>;
  async *subscribe(
    stream: unknown,
    params?: Record<string, unknown>,
  ): AsyncIterableIterator<mastodon.Event> {
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

  unsubscribe(stream: 'list', params: mastodon.SubscribeListParams): void;
  unsubscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: mastodon.SubscribeHashtagParams,
  ): void;
  unsubscribe(stream: mastodon.Stream): void;
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

  private async parseMessage(rawEvent: string): Promise<mastodon.Event> {
    const data = this.serializer.deserialize<mastodon.RawEvent>(
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
    } as mastodon.Event;
  }
}
