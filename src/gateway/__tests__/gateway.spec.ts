/* eslint-disable */
import axios from 'axios';
import { Gateway } from '../gateway';
// @ts-ignore
import { WebSocketEvents, mockConnect } from '../websocket';
import { MastoUnauthorizedError } from '../../errors/masto-unauthorized-error';
import { MastoNotFoundError } from '../../errors/masto-not-found-error';
import { MastoRateLimitError } from '../../errors/masto-rate-limit-error';
import 'isomorphic-form-data';

jest.mock('../websocket');
jest.mock('axios');

// Spy axios.create to return mock
const mockAxios = jest.genMockFromModule<typeof axios>('axios');
(axios.create as jest.Mock).mockImplementation(() => mockAxios);

describe('Gateway', () => {
  const gateway = new Gateway({
    uri: 'https://example.com',
    version: '99.9.9',
    streamingApiUrl: 'wss://example.com',
  });

  beforeEach(() => {
    ((axios as any) as jest.Mock).mockClear();
    ((mockAxios as any) as jest.Mock).mockClear();
    ((mockAxios.request as any) as jest.Mock).mockClear();
    ((mockAxios.request as any) as jest.Mock).mockResolvedValue({
      data: undefined,
    });
  });

  test('login', async () => {
    ((axios.get as any) as jest.Mock).mockResolvedValueOnce({
      data: {
        version: '2.8.0',
        urls: {
          streaming_api: 'wss://example.com/stream',
        },
      },
    });

    const params = {
      uri: 'https://example.com',
      accessToken: 'tokentoken',
    };
    const gateway = await Gateway.login(params);

    expect(gateway.version).toBe('2.8.0');
    expect(gateway.streamingApiUrl.href).toBe('wss://example.com/stream');
  });

  test('transform JSON to JS object', () => {
    const obj = { a: { b: { c: 'd' } } };
    const json = JSON.stringify(obj);
    // @ts-ignore
    const result = gateway.transformResponse(json);
    expect(result).toEqual(obj);
  });

  test('return raw data when response cannot parse as a JSON', () => {
    // @ts-ignore
    const result = gateway.transformResponse('aaa');
    expect(result).toEqual('aaa');
  });

  test('transform Object to JSON when `application/json`', () => {
    const config = {
      data: { a: 'foo' },
      headers: { 'Content-Type': 'application/json' },
    };
    // @ts-ignore
    const result = gateway.transformConfig(config);
    expect(result.data).toEqual(JSON.stringify(config.data));
  });

  test('transform Object to FormData when `multipart/form-data`', () => {
    const config = {
      data: { a: 'foo' },
      headers: { 'Content-Type': 'multipart/form-data' },
    };
    // @ts-ignore
    const result = gateway.transformConfig(config);
    expect(result.data).toBeInstanceOf(FormData);
  });

  test('not transform data when unknown MIME given', () => {
    const config = {
      data: { a: 'foo' },
      headers: { 'Content-Type': 'image/png' },
    };
    // @ts-ignore
    const result = gateway.transformConfig(config);
    expect(result.data).toEqual({ a: 'foo' });
  });

  test('call mockAxios.request with given options', async () => {
    const options = {
      method: 'POST',
      url: '/',
    };
    // @ts-ignore
    await gateway.request(options);
    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(options);
  });

  test('throw MastodonUnauthorizedError when 401 responsed', async () => {
    const options = {
      method: 'POST',
      url: '/',
    };

    ((mockAxios.request as any) as jest.Mock).mockRejectedValue({
      response: {
        status: 401,
        data: {
          error: 'Unauthorized',
        },
      },
    });

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(
      new MastoUnauthorizedError('Unauthorized'),
    );
  });

  test('throw MastodonNotFoundError when 404 responsed', async () => {
    const options = {
      method: 'POST',
      url: '/',
    };

    ((mockAxios.request as any) as jest.Mock).mockRejectedValue({
      response: {
        status: 404,
        data: {
          error: 'NotFound',
        },
      },
    });

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(
      new MastoNotFoundError('NotFound'),
    );
  });

  test('throw MastodonRateLimitError when 429 responsed', async () => {
    const options = {
      method: 'POST',
      url: '/',
    };

    ((mockAxios.request as any) as jest.Mock).mockRejectedValue({
      response: {
        status: 429,
        data: {
          error: 'RateLimit',
        },
      },
    });

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(
      new MastoRateLimitError('RateLimit'),
    );
  });

  test('AxiosError: throw given error directly if non of prepared statuses matched', () => {
    const options = {
      method: 'POST',
      url: '/',
    };

    class MyAxiosError extends Error {
      constructor() {
        super();
        // @ts-ignore
        this.response = {
          status: 418,
        };
      }
    }

    const error = new MyAxiosError();
    ((mockAxios.request as any) as jest.Mock).mockRejectedValue(error);

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(error);
  });

  test('Error: throw given error directly if non of prepared statuses matched', () => {
    const options = {
      method: 'POST',
      url: '/',
    };

    const rejectedValue = new Error('qwerty');
    ((mockAxios.request as any) as jest.Mock).mockRejectedValue(rejectedValue);

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(rejectedValue);
  });

  test('call axios.request with GET param', async () => {
    const params = { a: 'a', b: 'b' };
    await gateway.get('/', params);

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: '/',
        params,
      }),
    );
  });

  test('call axios.request with POST param', async () => {
    await gateway.post('/');

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'POST',
        url: '/',
      }),
    );
  });

  test('call axios.request with PUT param', async () => {
    await gateway.put('/');

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PUT',
        url: '/',
      }),
    );
  });

  test('call axios.request with DELETE param', async () => {
    await gateway.delete('/');

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'DELETE',
        url: '/',
      }),
    );
  });

  test('call axios.request with PATCH param', async () => {
    await gateway.patch('/');

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PATCH',
        url: '/',
      }),
    );
  });

  test('initialize WebSocketEvents and call connect with given params', async () => {
    const params = { a: 'a', b: 'b' };
    await gateway.stream('/', params);
    expect(mockConnect).toBeCalledWith('wss://example.com/?a=a&b=b', []);
  });

  test('initialize WebSocketEvents and call connect with access token', async () => {
    const customGateway = new Gateway({
      uri: 'https://example.com',
      version: '99.99.9',
      streamingApiUrl: 'wss://example.com',
      accessToken: 'token',
    });

    await customGateway.stream('/');
    expect(mockConnect).toBeCalledWith('wss://example.com/', ['token']);
  });

  test('initialize WebSocketEvents and call connect with access token as a param for Mastodon < v2.8.4', async () => {
    const customGateway = new Gateway({
      uri: 'https://example.com',
      version: '2.8.3',
      streamingApiUrl: 'wss://example.com',
      accessToken: 'token',
    });

    await customGateway.stream('/');
    expect(mockConnect).toBeCalledWith(
      'wss://example.com/?access_token=token',
      [],
    );
  });

  test('call next to paginate, finish if nothing in link header', async () => {
    const iterable = gateway.paginate('/', {
      since_id: '123',
    });

    const firstResponse = {
      headers: {
        // Pretend `/page1` the next url
        link: '<https://example.com/page1>; rel="next"',
      },
      data: {
        a: 'a',
      },
    };

    ((mockAxios.request as any) as jest.Mock).mockResolvedValueOnce(
      firstResponse,
    );

    const firstResult = await iterable.next();

    expect(mockAxios.request).toBeCalledTimes(1);
    expect((mockAxios.request as any) as jest.Mock).toHaveBeenLastCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: '/',
        params: {
          since_id: '123',
        },
      }),
    );
    expect(firstResult.done).toBe(false);
    expect(firstResult.value).toBe(firstResponse.data);

    const secondResponse = {
      headers: {
        // Next url is null
        link: '',
      },
      data: {
        b: 'b',
      },
    };

    ((mockAxios.request as any) as jest.Mock).mockResolvedValueOnce(
      secondResponse,
    );

    const secondResult = await iterable.next();

    expect(mockAxios.request).toBeCalledTimes(2);
    expect((mockAxios.request as any) as jest.Mock).toHaveBeenLastCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://example.com/page1',
      }),
    );
    expect(secondResult.done).toBe(false);
    expect(secondResult.value).toBe(secondResponse.data);

    ((mockAxios.request as any) as jest.Mock).mockResolvedValueOnce({
      data: undefined,
    });
    const thirdReuslt = await iterable.next();

    expect(mockAxios.request).toBeCalledTimes(2);
    expect(thirdReuslt.done).toBe(true);
    expect(thirdReuslt.value).toBe(undefined);
  });

  test('reset iterable when option.reset passed', async () => {
    const initialPath = '/foo';
    const initialParmas = { a: { b: 'c' } };

    const iterable = gateway.paginate(initialPath, initialParmas);
    const response = {
      headers: {
        link: '<https://example.com/next>; rel="next"',
      },
      response: {},
    };

    ((mockAxios.request as any) as jest.Mock).mockResolvedValue(response);
    await iterable.next();
    await iterable.next({ reset: true });

    expect(mockAxios.request).toBeCalledTimes(2);
    expect(mockAxios.request).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: initialPath,
        params: initialParmas,
      }),
    );
  });

  test('set next url and next params by calling next with params', async () => {
    const initialPath = '/foo';
    const initialParmas = { page: '1' };

    const iterable = gateway.paginate(initialPath, initialParmas);
    const response = {
      headers: {
        link: '<https://example.com/foo2>; rel="next"',
      },
      data: {},
    };
    ((mockAxios.request as any) as jest.Mock).mockResolvedValue(response);

    await iterable.next();
    expect(mockAxios.request).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: initialPath,
        params: initialParmas,
      }),
    );

    const customNextUrl = '/bar';
    const customNextParmas = { page: '777' };

    await iterable.next({ url: customNextUrl, params: customNextParmas });
    expect(mockAxios.request).toBeCalledTimes(2);
    expect(mockAxios.request).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: customNextUrl,
        params: customNextParmas,
      }),
    );
  });
});
