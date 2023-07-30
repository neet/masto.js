import { type EventStream } from "../../interfaces";
import { type mastodon } from "../../mastodon";
import { type Subscription } from "../../mastodon/streaming";

export class SubscriptionHttp implements Subscription {
  constructor(
    private readonly eventStream: EventStream,
    private readonly path: string,
    private readonly params?: unknown,
  ) {}

  async *values(): AsyncIterableIterator<mastodon.streaming.Event> {
    yield* this.eventStream.stream(this.path, this.params);
  }

  unsubscribe(): void {
    return;
  }

  [Symbol.asyncIterator](): AsyncIterator<mastodon.streaming.Event, undefined> {
    return this.values();
  }
}
