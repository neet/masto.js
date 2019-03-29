// tslint:disable
import axios from 'axios';
import * as FormData from 'form-data';
import { Gateway } from '../gateway';
// @ts-ignore
import { MastoEvents, connectMock } from '../masto-events';
import { MastoUnauthorizedError } from '../../errors/masto-unauthorized-error';
import { MastoNotFoundError } from '../../errors/masto-not-found-error';
import { MastoRateLimitError } from '../../errors/masto-rate-limit-error';

jest.mock('axios');
jest.mock('../masto-events');

describe('Gateway', () => {
  let gateway!: Gateway;

  beforeEach(() => {
    gateway = new Gateway({
      uri: 'https://example.com',
    });

    ((axios.request as any) as jest.Mock).mockReset();
  });

  test('streamingApiUrl has been set if construct with streamingApiUrl', () => {
    gateway = new Gateway({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
    });
    expect(gateway.streamingApiUrl).toBe('wss://example.com');
  });

  test('streamingApiUrl has been set if construct with streamingApiUrl', () => {
    gateway = new Gateway({
      uri: 'https://example.com',
      version: '99.9.9',
    });
    expect(gateway.version).toBe('99.9.9');
  });

  test('uri accessor works correctly', () => {
    const uri = 'https://example.com';
    gateway.uri = uri;
    expect(gateway.uri).toEqual(uri);
  });

  test('version accessor works correctly', () => {
    const version = '0.0.0';
    gateway.version = version;
    expect(gateway.version).toEqual(version);
  });

  test('streamingApiUrl accessor works correctly', () => {
    const url = 'wss://example.com';
    gateway.streamingApiUrl = url;
    expect(gateway.streamingApiUrl).toEqual(url);
  });

  test('accessToken accessor works correctly', () => {
    const token = '123123123';
    gateway.accessToken = token;
    expect(gateway.accessToken).toEqual(token);
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
    const obj = { a: { b: { c: 'd' } } };

    // @ts-ignore
    const result = gateway.decorateRequestConfig(obj);

    expect(result).toEqual(
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(obj),
      }),
    );
  });

  test('transform JS object to FormData when multipart/form-data speicifed', () => {
    const obj = { a: 'a', b: 'b' };

    // @ts-ignore
    const result = gateway.decorateRequestConfig(obj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    expect(result.data).toBeInstanceOf(FormData);
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
    await gateway.get('https://exmaple.com', params);

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://exmaple.com',
        params,
      }),
    );
  });

  test('call axiso.request with POST param', async () => {
    await gateway.post('https://exmaple.com');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'POST',
        url: 'https://exmaple.com',
      }),
    );
  });

  test('call axiso.request with PUT param', async () => {
    await gateway.put('https://exmaple.com');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PUT',
        url: 'https://exmaple.com',
      }),
    );
  });

  test('call axiso.request with DELETE param', async () => {
    await gateway.delete('https://exmaple.com');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'DELETE',
        url: 'https://exmaple.com',
      }),
    );
  });

  test('call axiso.request with PATCH param', async () => {
    await gateway.patch('https://exmaple.com');

    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'PATCH',
        url: 'https://exmaple.com',
      }),
    );
  });

  test('initialize MastoEvents and call connect with given params', async () => {
    const params = { a: 'a', b: 'b' };
    await gateway.stream('wss://example.com', params);
    expect(connectMock).toBeCalledWith('wss://example.com?a=a&b=b');
  });

  test('call next to paginate, finish if nothing in link header', async () => {
    const iterable = gateway.paginate('https://example.com', {
      since_id: '123',
    });

    const firstResponse = {
      headers: {
        // Pretend `/next` the next url
        link: '<https://example.com/next>; rel="next"',
      },
      response: {
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
    expect(firstResult.value).toBe(firstResponse);

    const secondResponse = {
      headers: {
        // Next url is null so `done` should be true
        link: '',
      },
      response: {
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
    expect(result.value).toBe(secondResponse);
  });

  test('reset iterable when option.reset passed', async () => {
    const initialUrl = 'https://example.com';
    const initialParmas = { a: { b: 'c' } };

    // @ts-ignore
    const iterable = gateway.paginate(initialUrl, initialParmas);
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
        url: initialUrl,
        params: initialParmas,
      }),
    );
  });

  test('finish pagination when url is not defined', async () => {
    // @ts-ignore
    const iterable = gateway.paginate();
    const result = await iterable.next();

    expect(result.done).toBe(true);
    expect(result.value).toBeUndefined();
  });

  test('finish pagination with given value', async () => {
    const iterable = gateway.paginate('https://example.com');
    const value = Symbol('hehehe');
    const result = await iterable.return!(value);

    expect(result.done).toBe(true);
    expect(result.value).toBe(value);
  });

  test('throw given error in the pagination', () => {
    const iterable = gateway.paginate('https://example.com');
    const error = new Error('hehehe');
    expect(iterable.throw!(error)).rejects.toThrow(error);
  });

  test('Symbol.asyncIterator is defined correctly', () => {
    const iterable = gateway.paginate('https://example.com');
    expect(iterable[Symbol.asyncIterator]()).toEqual(
      expect.objectContaining({
        next: expect.any(Function),
        return: expect.any(Function),
        throw: expect.any(Function),
      }),
    );
  });
});
