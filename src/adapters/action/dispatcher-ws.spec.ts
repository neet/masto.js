import { MastoUnexpectedError } from "../errors";
import { createLogger } from "../logger";
import { SerializerNativeImpl } from "../serializers";
import { WebSocketConnectorImpl } from "../ws";
import { WebSocketActionDispatcher } from "./dispatcher-ws";

describe("DispatcherWs", () => {
  it("throws for unknown action type", async () => {
    const dispatcher = new WebSocketActionDispatcher(
      new WebSocketConnectorImpl({
        constructorParameters: ["wss://example.com"],
      }),
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
      });
    }).toThrow(MastoUnexpectedError);
  });

  it("can be disposed", () => {
    const connector = new WebSocketConnectorImpl({
      constructorParameters: ["wss://example.com"],
    });
    const dispatcher = new WebSocketActionDispatcher(
      connector,
      new SerializerNativeImpl(),
      createLogger("error"),
    );

    dispatcher[Symbol.dispose]();
    expect(connector.canAcquire()).toBe(false);
  });
});
