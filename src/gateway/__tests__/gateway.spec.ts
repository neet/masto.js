// tslint:disable
import axios from 'axios';
import { Gateway } from '../gateway';
// @ts-ignore
import { WebSocketEvents, mockConnect } from '../websocket';
import { MastoUnauthorizedError } from '../../errors/masto-unauthorized-error';
import { MastoNotFoundError } from '../../errors/masto-not-found-error';
import { MastoRateLimitError } from '../../errors/masto-rate-limit-error';
import 'isomorphic-form-data';

jest.mock('../websocket');

// Mock `axios.create`. We don't use any functions from axios
// but from `axios.create`
jest.mock('axios');
const mockAxios = jest.genMockFromModule<typeof axios>('axios');
(axios.create as jest.Mock).mockImplementation(() => mockAxios);

describe('Gateway', () => {
  class InheritedGateway extends Gateway {}

  const gateway = new InheritedGateway({
    uri: 'https://example.com',
    version: '99.9.9',
    streamingApiUrl: 'wss://example.com',
  });

  beforeEach(() => {
    ((axios as any) as jest.Mock).mockClear();
    ((mockAxios.request as any) as jest.Mock).mockResolvedValue({
      data: undefined,
    });
  });

  test('login', async () => {
    ((mockAxios.request as any) as jest.Mock).mockResolvedValueOnce({
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
    const gateway = await InheritedGateway.login(params);

    expect(gateway.version).toBe('2.8.0');
    expect(gateway.streamingApiUrl).toBe('wss://example.com/stream');
  });

  test('streamingApiUrl has been set if construct with streamingApiUrl', () => {
    const customGateway = new InheritedGateway({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
    });
    expect(customGateway.streamingApiUrl).toBe('wss://example.com');
  });

  test('version has been set if construct with version ', () => {
    const customGateway = new InheritedGateway({
      uri: 'https://example.com',
      version: '1.2.3',
    });
    expect(customGateway.version).toBe('1.2.3');
  });

  test('accessToken has been set if construct with accessToken', () => {
    const customGateway = new InheritedGateway({
      uri: 'https://example.com',
      accessToken: 'token token',
    });
    expect(customGateway.accessToken).toBe('token token');
  });

  test('this._uri accessor works', () => {
    const customGateway = new InheritedGateway({
      uri: 'https://example.com/aaa',
    });
    customGateway.uri = 'https://example.com/bbb';
    expect(customGateway.uri).toEqual('https://example.com/bbb');
  });

  test('this._streamingApiUrl accessor works', () => {
    const customGateway = new InheritedGateway({
      uri: 'wss://example.com/aaa',
    });
    customGateway.uri = 'wss://example.com/bbb';
    expect(customGateway.uri).toEqual('wss://example.com/bbb');
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
    const data = { a: 'foo' };
    // @ts-ignore
    const result = gateway.transformRequest(data, {
      'Content-Type': 'application/json',
    });
    expect(result).toEqual(JSON.stringify(data));
  });

  test('transform Object to FormData when `multipart/form-data`', () => {
    const data = { a: 'foo' };
    // @ts-ignore
    const result = gateway.transformRequest(data, {
      'Content-Type': 'multipart/form-data',
    });
    expect(result).toBeInstanceOf(FormData);
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
    gateway.accessToken = 'tokentoken';
    await gateway.stream('/');
    expect(mockConnect).toBeCalledWith('wss://example.com/', ['tokentoken']);
  });

  test('initialize WebSocketEvents and call connect with access token as a param for Mastodon < v2.8.4', async () => {
    gateway.version = '2.8.3';
    gateway.accessToken = 'tokentoken';
    await gateway.stream('/');

    expect(mockConnect).toBeCalledWith(
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

    ((mockAxios.request as any) as jest.Mock).mockResolvedValue(firstResponse);

    const firstResult = await iterable.next();

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        method: 'GET',
        url: 'https://example.com/',
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

    ((mockAxios.request as any) as jest.Mock).mockResolvedValue(secondResponse);

    const result = await iterable.next();

    expect((mockAxios.request as any) as jest.Mock).toBeCalledWith(
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

    ((mockAxios.request as any) as jest.Mock).mockResolvedValue(response);
    iterable.next();
    iterable.next({ reset: true });

    expect(mockAxios.request).toHaveBeenLastCalledWith(
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
