import { MastoUnexpectedError, MastoWebSocketError } from "../errors/index.js";
import { createLogger } from "../logger/index.js";
import { SerializerNativeImpl } from "../serializers/index.js";
import {
  WebSocketConnectorImpl,
  WebSocketSubscriptionCounterImpl,
} from "../ws/index.js";
import { WebSocketActionDispatcher } from "./dispatcher-ws.js";

describe("DispatcherWs", () => {
  it("throws for unknown action type", async () => {
    const dispatcher = new WebSocketActionDispatcher(
      new WebSocketConnectorImpl({
        constructorParameters: ["wss://example.com"],
      }),
      new WebSocketSubscriptionCounterImpl(),
      new SerializerNativeImpl(),
      createLogger("error"),
    );

    expect(() => {
      return dispatcher.dispatch({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: "unknown" as any,
        path: "/api/v2/unknown",
        data: undefined,
        meta: {},
        raw: false,
      });
    }).toThrow(MastoUnexpectedError);
  });

  it("can be disposed", () => {
    const connector = new WebSocketConnectorImpl({
      constructorParameters: ["wss://example.com"],
    });
    const dispatcher = new WebSocketActionDispatcher(
      connector,
      new WebSocketSubscriptionCounterImpl(),
      new SerializerNativeImpl(),
      createLogger("error"),
    );

    dispatcher[Symbol.dispose]();
    expect(() => connector.acquire()).toThrow(MastoWebSocketError);
  });
});
