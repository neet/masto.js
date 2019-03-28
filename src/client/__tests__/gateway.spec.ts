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
    // @ts-ignore
    gateway = new Gateway({
      uri: 'https://example.com',
    });

    ((axios.request as any) as jest.Mock).mockReset();
  });

  test('uri accessor works correctly', () => {
    const uri = 'https://example.com';
    //@ts-ignore
    gateway.uri = uri;
    expect(gateway.uri).toEqual(uri);
  });

  test('version accessor works correctly', () => {
    const version = '0.0.0';
    //@ts-ignore
    gateway.version = version;
    expect(gateway.version).toEqual(version);
  });

  test('streamingApiUrl accessor works correctly', () => {
    const url = 'wss://example.com';
    //@ts-ignore
    gateway.streamingApiUrl = url;
    expect(gateway.streamingApiUrl).toEqual(url);
  });

  test('accessToken accessor works correctly', () => {
    const token = '123123123';
    //@ts-ignore
    gateway.accessToken = token;
    expect(gateway.accessToken).toEqual(token);
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

  test('has asnycIterator', async () => {
    // @ts-ignore
    const iterable = gateway.paginate();
    expect(iterable[Symbol.asyncIterator]).toBeDefined();
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
});
