import { Headers } from '@mastojs/isomorphic-web';

import { HttpMockImpl } from './http/http-mock-impl';
import { Paginator } from './paginator';

describe('Paginator', () => {
  const http = new HttpMockImpl();

  afterEach(() => {
    http.clear();
  });

  it('sends a request', async () => {
    http.request.mockReturnValue({ headers: new Headers({}) });
    const paginator = new Paginator(http, '/v1/api/timelines', {
      foo: 'bar',
    });
    await paginator.next();
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'GET' },
      path: '/v1/api/timelines',
      searchParams: { foo: 'bar' },
    });
  });

  it('sends a request with await', async () => {
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
    http.request.mockReturnValue({
      headers: new Headers({
        link: '<https://mastodon.social/api/v1/timelines/home?max_id=109382006402042919>; rel="next", <https://mastodon.social/api/v1/timelines/home?min_id=109382039876197520>; rel="prev"',
      }),
    });
    const paginator = new Paginator(http, '/v1/api/timelines');
    await paginator.next();
    await paginator.next();
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'GET' },
      searchParams: {},
      path: '/api/v1/timelines/home?max_id=109382006402042919',
    });
  });

  it('returns done when next link does not exist', async () => {
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
