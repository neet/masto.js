import { SerializerNativeImpl } from "../serializers";
import { WebSocketConfigImpl } from "./web-socket-config";

describe("WebSocketConfigImpl", () => {
  it("resolves WS path with path", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolvePath("/path/to/somewhere").toString();
    expect(url).toEqual("wss://mastodon.social/path/to/somewhere");
  });

  it("resolves WS path with path with token when Sec-Websocket-Protocols is not supported", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolvePath("/path/to/somewhere").toString();
    expect(url).toEqual(
      "wss://mastodon.social/path/to/somewhere?access_token=token",
    );
  });

  it("creates websocket header with token when supported", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
      },
      new SerializerNativeImpl(),
    );

    expect(config.getHeaders()).toEqual({ Authorization: "token" });
  });

  it("creates websocket header without token when not supported", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getHeaders()).toEqual({});
  });

  it("gets max attempts with retry true", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        retry: true,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getMaxAttempts()).toEqual(Number.POSITIVE_INFINITY);
  });

  it("gets max attempts with retry false", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        retry: false,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getMaxAttempts()).toEqual(1);
  });

  it("gets max attempts with retry number", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        retry: 5,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getMaxAttempts()).toEqual(5);
  });
});
