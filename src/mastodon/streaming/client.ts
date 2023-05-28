import { type Event } from './event';

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

export interface Subscription {
  unsubscribe(): void;
  values(): AsyncIterableIterator<Event>;
  [Symbol.asyncIterator](): AsyncIterator<Event, undefined>;
}

export interface Client {
  subscribe(stream: 'list', params: SubscribeListParams): Subscription;
  subscribe(
    stream: 'hashtag' | 'hashtag:local',
    params: SubscribeHashtagParams,
  ): Subscription;
  subscribe(stream: Stream): Subscription;

  close(): void;
}
