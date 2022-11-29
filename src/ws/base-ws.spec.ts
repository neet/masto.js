import { SerializerNativeImpl } from '../serializers';
import { BaseWs } from './base-ws';

class Test extends BaseWs {
  baseUrl = 'wss://mastodon.social';
  config = {
    url: 'https://mastodon.social',
    accessToken: 'token',
  };
  serializer = new SerializerNativeImpl();
  version = '99.99.9';
  stream = jest.fn();
}

describe('BaseWs', () => {
  it('resolves url', () => {
    const test = new Test();
    expect(test.resolveUrl('/api/v1/streaming/public')).toBe(
      'wss://mastodon.social/api/v1/streaming/public',
    );
  });

  it('resolves url with params', () => {
    const test = new Test();
    expect(test.resolveUrl('/api/v1/streaming/public', { public: true })).toBe(
      'wss://mastodon.social/api/v1/streaming/public?public=true',
    );
  });

  it('resolves protocols', () => {
    const test = new Test();
    expect(test.createProtocols()).toEqual(['token']);
  });
});
