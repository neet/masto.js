import type { Event } from './event';

export type Stream =
  | 'public'
  | 'public:media'
  | 'public:local'
  | 'public:local:media'
  | 'public:remote'
  | 'public:remote:media'
  | 'hashtag'
  | 'hashtag:local'
  | 'user'
  | 'user:notification'
  | 'list'
  | 'direct';

export type SubscribeListParams = {
  readonly list: string;
};

export type SubscribeHashtagParams = {
  readonly tag: string;
};

export interface WebSocketAPIClient {
  subscribe(
    stream: 'list',
    params: SubscribeListParams,
  ): AsyncIterableIterator<Event>;
  subscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: SubscribeHashtagParams,
  ): AsyncIterableIterator<Event>;
  subscribe(stream: Stream): AsyncIterableIterator<Event>;

  unsubscribe(stream: 'list', params: SubscribeListParams): void;
  unsubscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: SubscribeHashtagParams,
  ): void;
  unsubscribe(stream: Stream): void;

  close(): void;
}
