import { SerializerNativeImpl } from '../adapters/serializers';
import { MastoLogConfig } from './log-config';
import { MastoWebSocketConfig } from './web-socket-config';

describe('WebSocketConfig', () => {
  it('resolves WS path with path', () => {
    const config = new MastoWebSocketConfig(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
      new MastoLogConfig(),
    );

    const url = config.resolvePath('/path/to/somewhere').toString();
    expect(url).toEqual('wss://mastodon.social/path/to/somewhere');
  });

  it('resolves WS path with path with token when Sec-Websocket-Protocols is not supported', () => {
    const config = new MastoWebSocketConfig(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
      new MastoLogConfig(),
    );

    const url = config.resolvePath('/path/to/somewhere').toString();
    expect(url).toEqual(
      'wss://mastodon.social/path/to/somewhere?access_token=token',
    );
  });

  it('creates websocket protocol with token when supported', () => {
    const config = new MastoWebSocketConfig(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
      new MastoLogConfig(),
    );

    expect(config.getProtocols()).toEqual(['token']);
  });

  it('creates websocket protocol without token when not supported', () => {
    const config = new MastoWebSocketConfig(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
      new MastoLogConfig(),
    );

    expect(config.getProtocols()).toEqual([]);
  });
});
