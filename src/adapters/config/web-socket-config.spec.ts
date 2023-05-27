import { SerializerNativeImpl } from '../serializers';
import { WebSocketConfigImpl } from './web-socket-config';

describe('WebSocketConfigImpl', () => {
  it('resolves WS path with path', () => {
    const config = new WebSocketConfigImpl(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolvePath('/path/to/somewhere').toString();
    expect(url).toEqual('wss://mastodon.social/path/to/somewhere');
  });

  it('resolves WS path with path with token when Sec-Websocket-Protocols is not supported', () => {
    const config = new WebSocketConfigImpl(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolvePath('/path/to/somewhere').toString();
    expect(url).toEqual(
      'wss://mastodon.social/path/to/somewhere?access_token=token',
    );
  });

  it('creates websocket protocol with token when supported', () => {
    const config = new WebSocketConfigImpl(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    expect(config.getProtocols()).toEqual(['token']);
  });

  it('creates websocket protocol without token when not supported', () => {
    const config = new WebSocketConfigImpl(
      {
        url: 'wss://mastodon.social',
        accessToken: 'token',
        useInsecureAccessToken: true,
      },
      new SerializerNativeImpl(),
    );

    expect(config.getProtocols()).toEqual([]);
  });
});
