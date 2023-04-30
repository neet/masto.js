import type WebSocket from 'isomorphic-ws';

import { MastoUnexpectedError } from '../errors';
import type {
  Event,
  RawEvent,
  Stream,
  WebSocketAPIConnection,
} from '../mastodon';
import type { Serializer } from '../serializers';
import { createWebSocketAsyncIterator } from './websocket-async';

export class WebSocketAPIConnectionImpl implements WebSocketAPIConnection {
  readonly events: AsyncIterableIterator<Event>;

  constructor(
    private readonly ws: WebSocket,
    private readonly serializer: Serializer,
  ) {
    this.events = this.createEvents();
  }

  get readyState(): number {
    return this.ws.readyState;
  }

  async *subscribe(
    stream: Stream,
    params?: Record<string, unknown>,
  ): AsyncIterableIterator<Event> {
    const data = this.serializer.serialize('json', {
      type: 'subscribe',
      stream,
      ...params,
    });

    if (data == undefined) {
      throw new MastoUnexpectedError('Failed to serialize data');
    }

    this.ws.send(data);

    for await (const event of this.events) {
      if (!event.stream.includes(stream)) {
        continue;
      }
      yield event;
    }
  }

  unsubscribe(stream: Stream, params?: Record<string, unknown>): void {
    const data = this.serializer.serialize('json', {
      type: 'unsubscribe',
      stream,
      ...params,
    });

    if (data == undefined) {
      throw new MastoUnexpectedError('Failed to serialize data');
    }

    this.ws.send(data);
  }

  close(): void {
    this.ws.close();
  }

  private async *createEvents() {
    const messages = createWebSocketAsyncIterator(this.ws);

    for await (const message of messages) {
      const event = await this.parseEvent(message.data as string);
      yield event;
    }
  }

  private async parseEvent(rawEvent: string): Promise<Event> {
    const data = this.serializer.deserialize<RawEvent>('json', rawEvent);

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
    } as Event;
  }
}
