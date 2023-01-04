import { SemVer } from 'semver';

import { MastoConfig } from './config';
import { SerializerNativeImpl } from './serializers';

describe('Config', () => {
  it('creates header', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('1.0.0'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );
    const headers = config.createHeader({ extra: 'header' });

    expect(headers.get('Authorization')).toBe('Bearer token');
    expect(headers.get('Content-Type')).toBe('application/json');
    expect(headers.get('extra')).toBe('header');
  });

  it('overrides content-type header', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('1.0.0'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const headers = config.createHeader({
      'Content-Type': 'multipart/form-data',
    });

    expect(headers.get('Authorization')).toBe('Bearer token');
    expect(headers.get('Content-Type')).toBe('multipart/form-data');
  });

  it('resolves HTTP path', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('1.0.0'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolveHttpPath('/api/v1/yay').toString();
    expect(url).toEqual('https://mastodon.social/api/v1/yay');
  });

  it('resolves HTTP path with query', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('1.0.0'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config
      .resolveHttpPath('/api/v1/yay', { query: 'true', list: ['1', '2', '3'] })
      .toString();
    expect(url).toEqual(
      'https://mastodon.social/api/v1/yay?query=true&list[]=1&list[]=2&list[]=3',
    );
  });

  it('resolves WS path with path', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('2.8.4'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolveWebsocketPath('/path/to/somewhere');
    expect(url).toEqual('wss://mastodon.social/path/to/somewhere');
  });

  it('preserves query parameters in the URL when no query parameters specified', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('2.8.4'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolveHttpPath('/path/to/somewhere?foo=bar').toString();
    expect(url).toEqual('https://mastodon.social/path/to/somewhere?foo=bar');
  });

  it('revokes query parameters in the URL when query parameters specified', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('2.8.4'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config
      .resolveHttpPath('/path/to/somewhere?foo=bar', { foo2: 'bar2' })
      .toString();
    expect(url).toEqual('https://mastodon.social/path/to/somewhere?foo2=bar2');
  });

  it('resolves WS path with path with token when Sec-Websocket-Protocols is not supported', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('0.0.1'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    const url = config.resolveWebsocketPath('/path/to/somewhere');
    expect(url).toEqual(
      'wss://mastodon.social/path/to/somewhere?access_token=token',
    );
  });

  it('creates websocket protocol with token when supported', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('2.8.4'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    expect(config.createWebsocketProtocols()).toEqual(['token']);
  });

  it('creates websocket protocol without token when not supported', () => {
    const config = new MastoConfig(
      {
        url: 'https://mastodon.social',
        streamingApiUrl: 'wss://mastodon.social',
        version: new SemVer('0.0.1'),
        accessToken: 'token',
      },
      new SerializerNativeImpl(),
    );

    expect(config.createWebsocketProtocols()).toEqual([]);
  });
});
