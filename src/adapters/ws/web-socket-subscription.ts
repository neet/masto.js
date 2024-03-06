import { type WebSocket } from "unws";

import {
  type Logger,
  type Serializer,
  type WebSocketConnector,
} from "../../interfaces";
import { type mastodon } from "../../mastodon";
import { MastoUnexpectedError } from "../errors";
import { toAsyncIterable } from "./async-iterable";

export class WebSocketSubscription implements mastodon.streaming.Subscription {
  private connection?: WebSocket;

  constructor(
    private readonly connector: WebSocketConnector,
    private readonly serializer: Serializer,
    private readonly stream: string,
    private readonly logger?: Logger,
    private readonly params?: Record<string, unknown>,
  ) {}

  async *values(): AsyncIterableIterator<mastodon.streaming.Event> {
    this.logger?.log("info", "Subscribing to stream", this.stream);

    while (this.connector.canAcquire()) {
      this.connection = await this.connector.acquire();

      const messages = toAsyncIterable(this.connection);

      const data = this.serializer.serialize("json", {
        type: "subscribe",
        stream: this.stream,
        ...this.params,
      });

      this.logger?.log("debug", "↑ WEBSOCKET", data);
      this.connection.send(data);

      for await (const event of this.transformIntoEvents(messages)) {
        if (!this.matches(event)) continue;
        this.logger?.log("debug", "↓ WEBSOCKET", event);
        yield event;
      }
    }
  }

  unsubscribe(): void {
    if (this.connection == undefined) {
      return;
    }

    const data = this.serializer.serialize("json", {
      type: "unsubscribe",
      stream: this.stream,
      ...this.params,
    });

    this.connection.send(data);
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<mastodon.streaming.Event> {
    return this.values();
  }

  /**
   * @experimental This is an experimental API.
   */
  [Symbol.dispose](): void {
    this.unsubscribe();
  }

  private matches(event: mastodon.streaming.Event): boolean {
    // subscribe("hashtag", { tag: "foo" }) -> ["hashtag", "foo"]
    // subscribe("list", { list: "foo" })   -> ["list", "foo"]
    const params = this.params ?? {};
    const extra = Object.values(params) as string[];
    const stream = [this.stream, ...extra];
    return stream.every((s) => event.stream.includes(s));
  }

  private async *transformIntoEvents(
    messages: AsyncIterable<WebSocket.MessageEvent>,
  ) {
    for await (const message of messages) {
      const event = await this.parseMessage(message.data as string);
      yield event;
    }
  }

  private async parseMessage(
    rawEvent: string,
  ): Promise<mastodon.streaming.Event> {
    const data = this.serializer.deserialize<mastodon.streaming.RawEvent>(
      "json",
      rawEvent,
    );

    if ("error" in data) {
      throw new MastoUnexpectedError(data.error);
    }

    const payload =
      data.event === "delete" || data.payload == undefined
        ? data.payload
        : this.serializer.deserialize("json", data.payload);

    return {
      stream: data.stream,
      event: data.event,
      payload: payload,
    } as mastodon.streaming.Event;
  }
}
