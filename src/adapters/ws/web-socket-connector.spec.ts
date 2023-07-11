import getPort from "get-port";
import { WebSocketServer } from "ws";

import { MastoWebSocketError } from "../errors";
import { WebSocketConnectorImpl } from "./web-socket-connector";

describe("WebSocketConnector", () => {
  it("returns existing connection if it exists", async () => {
    const port = await getPort();
    const server = new WebSocketServer({ port });
    const connector = new WebSocketConnectorImpl([`ws://localhost:${port}`]);

    const ws1 = await connector.acquire();
    const ws2 = await connector.acquire();

    expect(ws1).toBe(ws2);

    server.close();
    connector.close();
  });

  it("rejects if WebSocket closes", async () => {
    const connector = new WebSocketConnectorImpl([`ws://localhost:0`]);
    const promise = connector.acquire();
    connector.close();

    await expect(promise).rejects.toBeInstanceOf(MastoWebSocketError);
  });

  it("rejects if it reaches max attempts", async () => {
    const connector = new WebSocketConnectorImpl(
      [`ws://localhost:0`],
      undefined,
      1,
    );

    const promise = connector.acquire();
    await expect(promise).rejects.toBeInstanceOf(MastoWebSocketError);
  });
});
