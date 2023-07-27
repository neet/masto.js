import node_http from "node:http";

import getPort from "get-port";

import { HttpConfigImpl } from "../config";
import { MastoTimeoutError } from "../errors";
import { SerializerNativeImpl } from "../serializers";
import { HttpNativeImpl } from "./http-native-impl";

describe("HttpNativeImpl", () => {
  it("timeouts", async () => {
    const serializer = new SerializerNativeImpl();
    const http = new HttpNativeImpl(
      serializer,
      new HttpConfigImpl(
        {
          url: "https://example.com",
          timeout: 0,
        },
        serializer,
      ),
    );

    await expect(() => http.get("/")).rejects.toThrowError(MastoTimeoutError);
  });

  it("throws an error if server returned non-JSON", async () => {
    const server = node_http.createServer((_, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello World\n");
    });

    const port = await getPort();
    server.listen(port);

    const serializer = new SerializerNativeImpl();
    const http = new HttpNativeImpl(
      serializer,
      new HttpConfigImpl({ url: `http://localhost:${port}` }, serializer),
    );

    await expect(() =>
      http.get("/"),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"The server returned data with an unknown encoding."`,
    );

    server.close();
  });

  it("throws an error if server returned non-JSON error", async () => {
    const server = node_http.createServer((_, res) => {
      res.writeHead(503, { "Content-Type": "text/plain" });
      res.end("Hello World\n");
    });

    const port = await getPort();
    server.listen(port);

    const serializer = new SerializerNativeImpl();
    const http = new HttpNativeImpl(
      serializer,
      new HttpConfigImpl({ url: `http://localhost:${port}` }, serializer),
    );

    await expect(() =>
      http.get("/"),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"The server returned data with an unknown encoding. The server may be down."`,
    );

    server.close();
  });
});
