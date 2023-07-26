import { type Event } from "./event";

export interface SubscribeListParams {
  readonly list: string;
}

export interface SubscribeHashtagParams {
  readonly tag: string;
}

export interface Subscription {
  unsubscribe(): void;
  values(): AsyncIterableIterator<Event>;
  /** @internal */
  waitForOpen(): Promise<void>;
  [Symbol.asyncIterator](): AsyncIterator<Event, undefined>;
}

export interface Client {
  public: {
    subscribe(): Subscription;
    media: {
      subscribe(): Subscription;
    };
    local: {
      subscribe(): Subscription;
      media: {
        subscribe(): Subscription;
      };
    };
    remote: {
      subscribe(): Subscription;
      media: {
        subscribe(): Subscription;
      };
    };
  };
  hashtag: {
    subscribe(params: SubscribeHashtagParams): Subscription;
    local: {
      subscribe(params: SubscribeHashtagParams): Subscription;
    };
  };
  list: {
    subscribe(params: SubscribeListParams): Subscription;
  };
  direct: {
    subscribe(): Subscription;
  };
  user: {
    subscribe(): Subscription;
    notification: {
      subscribe(): Subscription;
    };
  };

  close(): void;
}
