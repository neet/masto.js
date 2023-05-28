import WebSocket from 'ws';

import { type Serializer } from '../../interfaces';
import { type mastodon } from '../../mastodon';
import { type WebSocketConnection } from './web-socket-connector';
import { WebSocketSubscription } from './web-socket-subscription';

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
  ): mastodon.streaming.Subscription;
  subscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: mastodon.streaming.SubscribeHashtagParams,
  ): mastodon.streaming.Subscription;
  subscribe(stream: mastodon.streaming.Stream): mastodon.streaming.Subscription;
  subscribe(
    stream: mastodon.streaming.Stream,
    params?: Record<string, unknown>,
  ): mastodon.streaming.Subscription {
    return new WebSocketSubscription(
      this.connections,
      this.serializer,
      stream,
      params,
    );
  }

  close(): void {
    this.onClose();
  }
}
