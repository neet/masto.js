import { SemVer } from 'semver';

import { MastoConfig } from './config';
import { BaseHttp } from './http/base-http';
import { Paginator } from './paginator';
import { SerializerNativeImpl } from './serializers';

const request = jest.fn();
const config = new MastoConfig(
  {
    url: 'https://mastodon.social',
    streamingApiUrl: 'wss://mastodon.social',
    version: new SemVer('1.0.0'),
    accessToken: 'token',
  },
  new SerializerNativeImpl(),
);
class Test extends BaseHttp {
  config = config;
  request = request;
  serializer = new SerializerNativeImpl();
}

describe('Paginator', () => {
  afterEach(() => {
    request.mockClear();
  });

  it('sends a request', async () => {
    const http = new Test();
    http.request.mockReturnValue({ headers: new Headers({}) });
    const paginator = new Paginator(http, '/v1/api/timelines', {
      foo: 'bar',
    });
    await paginator.next();
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'get' },
      path: '/v1/api/timelines',
      searchParams: { foo: 'bar' },
    });
  });

  it('sends a request with await', async () => {
    const http = new Test();
    http.request.mockReturnValue({ headers: new Headers({}) });
    const paginator = new Paginator(http, '/v1/api/timelines', {
      foo: 'bar',
    });
    await paginator;
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'get' },
      path: '/v1/api/timelines',
      searchParams: { foo: 'bar' },
    });
  });

  it('parses the next url', async () => {
    const http = new Test();
    http.request.mockReturnValue({
      headers: new Headers({
        link: '<https://mastodon.social/api/v1/timelines/home?max_id=109382006402042919>; rel="next", <https://mastodon.social/api/v1/timelines/home?min_id=109382039876197520>; rel="prev"',
      }),
    });
    const paginator = new Paginator(http, '/v1/api/timelines');
    await paginator.next();
    await paginator.next();
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'get' },
      searchParams: {},
      path: '/api/v1/timelines/home?max_id=109382006402042919',
    });
  });

  it('returns done when next link does not exist', async () => {
    const http = new Test();
    http.request.mockReturnValue({
      headers: new Headers({}),
    });
    const paginator = new Paginator(http, '/v1/api/timelines');
    await paginator.next();
    const result = await paginator.next();
    expect(result).toEqual({
      done: true,
    });
  });
});
