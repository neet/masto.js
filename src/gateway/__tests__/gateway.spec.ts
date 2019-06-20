// tslint:disable
import axios from 'axios';
import FormData from 'form-data';
import { Gateway } from '../gateway';
// @ts-ignore
import { WebSocketEvents, connectMock } from '../ws-events';
import { MastoUnauthorizedError } from '../../errors/masto-unauthorized-error';
import { MastoNotFoundError } from '../../errors/masto-not-found-error';
import { MastoRateLimitError } from '../../errors/masto-rate-limit-error';

jest.mock('axios');
jest.mock('../ws-events');

describe('Gateway', () => {
  let gateway!: Gateway;

  beforeEach(() => {
    gateway = new Gateway({
      uri: 'https://example.com',
      version: '99.9.9',
      streamingApiUrl: 'wss://example.com',
    });

    ((axios.request as any) as jest.Mock).mockReset();
    ((axios.request as any) as jest.Mock).mockResolvedValue({
      data: undefined,
    });
  });

  test('streamingApiUrl has been set if construct with streamingApiUrl', () => {
    gateway = new Gateway({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
    });
    expect(gateway.streamingApiUrl).toBe('wss://example.com');
  });

  test('version has been set if construct with version ', () => {
    gateway = new Gateway({
      uri: 'https://example.com',
      version: '1.2.3',
    });
    expect(gateway.version).toBe('1.2.3');
  });

  test('accessToken has been set if construct with accessToken', () => {
    gateway = new Gateway({
      uri: 'https://example.com',
      accessToken: 'token token',
    });
    expect(gateway.accessToken).toBe('token token');
  });

  test('this._uri accessor works', () => {
    gateway = new Gateway({
      uri: 'https://example.com/aaa',
    });
    gateway.uri = 'https://example.com/bbb';
    expect(gateway.uri).toEqual('https://example.com/bbb');
  });

  test('this._streamingApiUrl accessor works', () => {
    gateway = new Gateway({
      uri: 'wss://example.com/aaa',
    });
    gateway.uri = 'wss://example.com/bbb';
    expect(gateway.uri).toEqual('wss://example.com/bbb');
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

  test('transform JS object to JSON string when application/json or nothing specified', () => {
    const data = { a: { b: { c: 'd' } } };

    // @ts-ignore
    const result = gateway.decorateRequestConfig({ data });

    expect(result).toEqual(
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      }),
    );
  });

  test('transform JS object to FormData when multipart/form-data speicifed', () => {
    const data = { a: 'a', b: 'b' };

    // @ts-ignore
    const result = gateway.decorateRequestConfig({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    });

    expect(result.data).toBeInstanceOf(FormData);
  });

  test('will not transform JS object when unknown MIME speicifed', () => {
    const data = { a: 'a', b: 'b' };

    // @ts-ignore
    const result = gateway.decorateRequestConfig({
      headers: {
        'Content-Type': 'image/png',
      },
      data,
    });

    expect(result.data).toEqual(data);
  });

  test('add Authorization header if gateway has accessToken', () => {
    gateway.accessToken = 'tokentoken';
    // @ts-ignore
    const result = gateway.decorateRequestConfig();
    expect(result.headers.Authorization).toBeDefined();
  });

  test('call axios.request with given options', async () => {
    const options = {
      method: 'POST',
      url: 'https://example.com',
    };
    // @ts-ignore
    await gateway.request(options);
    expect(axios.request as jest.Mock).toBeCalledWith(options);
  });

  test('throw MastodonUnauthorizedError when 401 responsed', async () => {
    const options = {
      method: 'POST',
      url: 'https://example.com',
    };

    (axios.request as jest.Mock).mockRejectedValue({
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
      url: 'https://example.com',
    };

    (axios.request as jest.Mock).mockRejectedValue({
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
      url: 'https://example.com',
    };

    (axios.request as jest.Mock).mockRejectedValue({
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
      url: 'https://example.com',
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
    (axios.request as jest.Mock).mockRejectedValue(error);

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(error);
  });

  test('Error: throw given error directly if non of prepared statuses matched', () => {
    const options = {
      method: 'POST',
      url: 'https://example.com',
    };

    const rejectedValue = new Error('qwerty');
    (axios.request as jest.Mock).mockRejectedValue(rejectedValue);

    // @ts-ignore
    expect(gateway.request(options)).rejects.toThrow(rejectedValue);
  });

  test('call axiso.request with GET param', async () => {
    const params = { a: 'a', b: 'b' };
    await gateway.get('/', params);

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://example.com',
        params,
      }),
    );
  });

  test('call axiso.request with POST param', async () => {
    await gateway.post('/');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'POST',
        url: 'https://example.com',
      }),
    );
  });

  test('call axiso.request with PUT param', async () => {
    await gateway.put('/');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PUT',
        url: 'https://example.com',
      }),
    );
  });

  test('call axiso.request with DELETE param', async () => {
    await gateway.delete('/');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'DELETE',
        url: 'https://example.com',
      }),
    );
  });

  test('call axiso.request with PATCH param', async () => {
    await gateway.patch('/');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PATCH',
        url: 'https://example.com',
      }),
    );
  });

  test('initialize WebSocketEvents and call connect with given params', async () => {
    const params = { a: 'a', b: 'b' };
    await gateway.stream('/', params);
    expect(connectMock).toBeCalledWith('wss://example.com/?a=a&b=b', []);
  });

  test('initialize WebSocketEvents and call connect with access token', async () => {
    gateway.accessToken = 'tokentoken';
    await gateway.stream('/');
    expect(connectMock).toBeCalledWith('wss://example.com/', ['tokentoken']);
  });

  test('initialize WebSocketEvents and call connect with access token as a param for Mastodon < v2.8.4', async () => {
    gateway.version = '2.8.3';
    gateway.accessToken = 'tokentoken';
    await gateway.stream('/');

    expect(connectMock).toBeCalledWith(
      'wss://example.com/?access_token=tokentoken',
      [],
    );
  });

  test('call next to paginate, finish if nothing in link header', async () => {
    const iterable = gateway.paginate('/', {
      since_id: '123',
    });

    const firstResponse = {
      headers: {
        // Pretend `/next` the next url
        link: '<https://example.com/next>; rel="next"',
      },
      data: {
        a: 'a',
      },
    };

    (axios.request as jest.Mock).mockResolvedValue(firstResponse);

    const firstResult = await iterable.next();

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://example.com',
        params: {
          since_id: '123',
        },
      }),
    );
    expect(firstResult.done).toBe(false);
    expect(firstResult.value).toBe(firstResponse.data);

    const secondResponse = {
      headers: {
        // Next url is null so `done` should be true
        link: '',
      },
      data: {
        b: 'b',
      },
    };

    (axios.request as jest.Mock).mockResolvedValue(secondResponse);

    const result = await iterable.next();

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://example.com/next',
      }),
    );
    expect(result.done).toBe(true);
    expect(result.value).toBe(secondResponse.data);
  });

  test('reset iterable when option.reset passed', async () => {
    const initialPath = '/foo';
    const initialParmas = { a: { b: 'c' } };

    // @ts-ignore
    const iterable = gateway.paginate(initialPath, initialParmas);
    const response = {
      headers: {
        link: '<https://example.com/next>; rel="next"',
      },
      response: {},
    };

    (axios.request as jest.Mock).mockResolvedValue(response);
    iterable.next();
    iterable.next({ reset: true });

    expect(axios.request).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: gateway.uri + initialPath,
        params: initialParmas,
      }),
    );
  });

  test('finish pagination with given value', async () => {
    const iterable = gateway.paginate('/');
    const value = Symbol('hehehe');
    const result = await iterable.return!(value);

    expect(result.done).toBe(true);
    expect(result.value).toBe(value);
  });

  test('throw given error in the pagination', () => {
    const iterable = gateway.paginate('/');
    const error = new Error('hehehe');
    expect(iterable.throw!(error)).rejects.toThrow(error);
  });

  test('Symbol.asyncIterator is defined correctly', () => {
    const iterable = gateway.paginate('/');
    expect(iterable[Symbol.asyncIterator]()).toEqual(
      expect.objectContaining({
        next: expect.any(Function),
        return: expect.any(Function),
        throw: expect.any(Function),
      }),
    );
  });
});
