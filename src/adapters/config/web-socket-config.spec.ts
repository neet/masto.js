import { MastoInvalidArgumentError } from "../errors";
import { SerializerNativeImpl } from "../serializers";
import { WebSocketConfigImpl } from "./web-socket-config";

describe("WebSocketConfigImpl", () => {
  it("throws invalid argument error when url is not specified", () => {
    expect(() => {
      new WebSocketConfigImpl(
        {
          streamingApiUrl: "",
        },
        new SerializerNativeImpl(),
      );
    }).toThrowError(MastoInvalidArgumentError);
  });

  it("throws invalid argument error when retry is less than zero", () => {
    expect(() => {
      new WebSocketConfigImpl(
        {
          streamingApiUrl: "wss://mastodon.social",
          retry: -1,
        },
        new SerializerNativeImpl(),
      );
    }).toThrowError(MastoInvalidArgumentError);
  });

  it("throws invalid argument error when retry is not an integer", () => {
    expect(() => {
      new WebSocketConfigImpl(
        {
          streamingApiUrl: "wss://mastodon.social",
          retry: 1.5,
        },
        new SerializerNativeImpl(),
      );
    }).toThrowError(MastoInvalidArgumentError);
  });

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

  it("creates websocket protocol with token when supported", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
      },
      new SerializerNativeImpl(),
    );

    expect(config.getProtocols()).toEqual(["token"]);
  });

  it("creates websocket protocol without token when not supported", () => {
    const config = new WebSocketConfigImpl(
      {
        streamingApiUrl: "wss://mastodon.social",
        accessToken: "token",
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getProtocols()).toEqual([]);
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
