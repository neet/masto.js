import getPort from "get-port";
import { WebSocketServer } from "isomorphic-ws";

import { createLogger } from "../logger/index.js";
import { SerializerNativeImpl } from "../serializers/index.js";
import { WebSocketConnectorImpl } from "./web-socket-connector.js";
import { WebSocketSubscription } from "./web-socket-subscription.js";
import { WebSocketSubscriptionCounterImpl } from "./web-socket-subscription-counter.js";

describe("WebSocketSubscription", () => {
  it("implements async iterator", async () => {
    const logger = createLogger();
    const port = await getPort();
    const server = new WebSocketServer({ port });

    server.on("connection", (socket) => {
      socket.on("message", () => {
        socket.send(
          JSON.stringify({
            stream: ["public"],
            event: "delete",
            payload: "123",
          }),
        );
      });
    });

    const connector = new WebSocketConnectorImpl(
      { constructorParameters: [`ws://localhost:${port}`] },
      logger,
    );
    const subscription = new WebSocketSubscription(
      connector,
      new WebSocketSubscriptionCounterImpl(),
      new SerializerNativeImpl(),
      "public",
      logger,
    );

    let value!: string;
    for await (const message of subscription) {
      value = message.payload as string;
      break;
    }

    expect(value).toBe("123");

    connector.kill();
    server.close();
  });
});
