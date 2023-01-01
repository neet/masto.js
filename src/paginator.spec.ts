import { Headers } from '@mastojs/ponyfills';

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
      searchParams: new URLSearchParams({ foo: 'bar' }),
    });
  });

  it('sends a request with await', async () => {
    http.request.mockReturnValue({ headers: new Headers({}) });
    const paginator = new Paginator(http, '/v1/api/timelines', {
      foo: 'bar',
    });
    await paginator;
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'GET' },
      path: '/v1/api/timelines',
      searchParams: new URLSearchParams({ foo: 'bar' }),
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
      searchParams: new URLSearchParams({ max_id: '109382006402042919' }),
      path: '/api/v1/timelines/home',
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

  it('parses the next url and reverse the iterator', async () => {
    http.request.mockReturnValue({
      headers: new Headers({
        link: '<https://mastodon.social/api/v1/timelines/home?max_id=109382006402042919>; rel="next", <https://mastodon.social/api/v1/timelines/home?min_id=109382039876197520>; rel="prev"',
      }),
      data: [],
    });
    const p1 = new Paginator(http, '/v1/api/timelines');
    const paginator = p1.reverse();
    await paginator.next();
    await paginator.next();
    expect(http.request).toBeCalledWith({
      requestInit: { method: 'GET' },
      searchParams: new URLSearchParams({ min_id: '109382039876197520' }),
      path: '/api/v1/timelines/home',
    });
  });
});
