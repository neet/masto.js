import getPort from "get-port";
import { WebSocketServer } from "isomorphic-ws";

import { MastoWebSocketError } from "../errors";
import { WebSocketConnectorImpl } from "./web-socket-connector";

describe("WebSocketConnector", () => {
  it("returns existing connection if it exists", async () => {
    const port = await getPort();
    const server = new WebSocketServer({ port });
    const connector = new WebSocketConnectorImpl({
      constructorParameters: [`ws://localhost:${port}`],
    });

    const ws1 = await connector.acquire();
    const ws2 = await connector.acquire();

    expect(ws1).toBe(ws2);

    server.close();
    connector.kill();
  });

  it("rejects if WebSocket closes", async () => {
    const connector = new WebSocketConnectorImpl({
      constructorParameters: [`ws://localhost:0`],
    });
    const promise = connector.acquire();
    connector.kill();

    await expect(promise).rejects.toBeInstanceOf(MastoWebSocketError);
  });

  it("rejects if it reaches max attempts", async () => {
    const connector = new WebSocketConnectorImpl({
      constructorParameters: [`ws://localhost:0`],
      maxAttempts: 1,
    });

    const promise = connector.acquire();
    await expect(promise).rejects.toBeInstanceOf(MastoWebSocketError);
  });
});
