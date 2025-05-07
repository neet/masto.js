import { type Event } from "./event.js";

export interface Subscription extends AsyncIterable<Event>, Disposable {
  values(): AsyncIterableIterator<Event>;
  unsubscribe(): void;
}
