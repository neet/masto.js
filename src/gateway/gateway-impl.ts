import querystring, { ParsedUrlQueryInput } from 'querystring';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import normalizeUrl from 'normalize-url'; // eslint-disable-line import/default
import semver from 'semver';
import { snakeCase } from 'change-case';
import { Instance } from '../entities';
import {
  MastoNotFoundError,
  MastoRateLimitError,
  MastoUnauthorizedError,
  MastoForbiddenError,
  MastoUnprocessableEntityError,
} from '../errors';
import { createFormData } from './create-form-data';
import { isAxiosError } from './is-axios-error';
import { EventHandlerImpl } from './event-handler-impl';
import {
  Gateway,
  GatewayConstructorParams,
  LoginParams,
  PaginateNext,
} from './gateway';
import { transformKeys } from './transform-keys';

/**
 * Mastodon network request wrapper
 * @param params Optional params
 */
export class GatewayImpl implements Gateway<AxiosRequestConfig> {
  /** Configured axios instance */
  private axios: AxiosInstance;
  /** URI of the instance */
  private _uri = '';
  /** Streaming API URL of the instance */
  private _streamingApiUrl = '';
  /** Version of the current instance */
  version = '';
  /** API token of the user */
  accessToken?: string;

  /**
   * @param params Parameters
   */
  constructor(params: GatewayConstructorParams<AxiosRequestConfig>) {
    this.uri = params.uri;

    if (params.accessToken) {
      this.accessToken = params.accessToken;
    }

    if (params.streamingApiUrl) {
      this.streamingApiUrl = params.streamingApiUrl;
    }

    if (params.version) {
      this.version = params.version;
    }

    this.axios = axios.create({
      baseURL: this.uri,
      transformResponse: this.transformResponse,
      ...(params.defaultOptions ?? {}),
    });

    this.axios.interceptors.request.use(this.transformConfig);
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    this.axios.defaults.headers.common.Authorization = `Bearer ${this.accessToken}`;
  }

  get uri() {
    return this._uri;
  }

  set uri(uri: string) {
    this._uri = normalizeUrl(uri);
  }

  get streamingApiUrl() {
    return this._streamingApiUrl;
  }

  set streamingApiUrl(streamingApiUrl: string) {
    this._streamingApiUrl = normalizeUrl(streamingApiUrl);
  }

  /**
   * Login to Mastodon
   * @param params Parameters
   * @return Instance of Mastodon class
   */
  static async login<T extends typeof GatewayImpl>(
    this: T,
    params: LoginParams,
  ) {
    const gateway = new this(params) as InstanceType<T>;
    const instance = await gateway.get<Instance>('/api/v1/instance');

    gateway.version = instance.version;
    gateway.streamingApiUrl = instance.urls.streamingApi;

    return gateway;
  }

  /**
   * Transform JSON to JS object
   * @param response Response object
   * @return Parsed entity
   */
  private transformResponse(data: string, _headers: unknown) {
    try {
      return transformKeys(JSON.parse(data));
    } catch {
      return data;
    }
  }

  /**
   * Encode data in request options and add authorization / content-type header
   * @param config Axios config
   * @return New config
   */
  private transformConfig({
    params,
    data,
    ...originalConfig
  }: AxiosRequestConfig) {
    const config: AxiosRequestConfig = { ...originalConfig };

    if (params) {
      config.params = transformKeys(params, snakeCase);
    }

    if (data) {
      config.data = transformKeys(data, snakeCase);
    }

    switch (config.headers['Content-Type']) {
      case 'application/json':
        config.data = JSON.stringify(config.data);

        return config;

      case 'multipart/form-data':
        config.data = createFormData(config.data);

        // In Node.js, axios doesn't set boundary data to the header
        // so set it manually by using getHeaders of form-data node.js package
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (config.data as any).getHeaders === 'function') {
          config.headers = {
            ...config.headers,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(config.data as any).getHeaders(),
          };
        }

        return config;

      default:
        return config;
    }
  }

  /**
   * Wrapper function for Axios
   * @param options Axios options
   * @param parse Whether parse response before return
   * @return Parsed response object
   */
  protected async request<T>(options: AxiosRequestConfig) {
    try {
      return await this.axios.request<T>(options);
    } catch (error) {
      if (!isAxiosError(error)) {
        throw error;
      }

      const status = error?.response?.status;
      const message =
        error?.response?.data?.error ?? 'Unexpected error occurred';

      switch (status) {
        case 401:
          throw new MastoUnauthorizedError(message);
        case 403:
          throw new MastoForbiddenError(message);
        case 404:
          throw new MastoNotFoundError(message);
        case 422:
          throw new MastoUnprocessableEntityError(message);
        case 429:
          throw new MastoRateLimitError(message);
        default:
          throw error;
      }
    }
  }

  /**
   * HTTP GET
   * @param url URL to request
   * @param params Query strings
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  async get<T>(
    path: string,
    params: unknown = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>({
      method: 'GET',
      url: path,
      params,
      ...options,
    });

    return response.data;
  }

  /**
   * HTTP POST
   * @param url URL to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  async post<T>(
    path: string,
    data: unknown = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>({
      method: 'POST',
      url: path,
      data,
      ...options,
    });

    return response.data;
  }

  /**
   * HTTP PUT
   * @param path Path to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  async put<T>(path: string, data: unknown = {}, options?: AxiosRequestConfig) {
    const response = await this.request<T>({
      method: 'PUT',
      url: path,
      data,
      ...options,
    });

    return response.data;
  }

  /**
   * HTTP DELETE
   * @param path Path to request
   * @param data jPayload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  async delete<T>(
    path: string,
    data: unknown = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>({
      method: 'DELETE',
      url: path,
      data,
      ...options,
    });

    return response.data;
  }

  /**
   * HTTP PATCH
   * @param path Path to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  async patch<T>(
    path: string,
    data: unknown = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>({
      method: 'PATCH',
      url: path,
      data,
      ...options,
    });

    return response.data;
  }

  /**
   * Connect to a streaming
   * @param path Path to stream
   * @param params Query parameters
   * @return Instance of EventEmitter
   */
  stream(path: string, params: ParsedUrlQueryInput = {}) {
    const version = semver.coerce(this.version);
    const protocols = [];

    // Since v2.8.4, it is supported to pass access token with`Sec-Websocket-Protocol`
    // https://github.com/tootsuite/mastodon/pull/10818
    if (this.accessToken && version && semver.gte(version, '2.8.4')) {
      protocols.push(this.accessToken);
    } else if (this.accessToken) {
      params.accessToken = this.accessToken;
    }

    const url =
      this.streamingApiUrl +
      path +
      (Object.keys(params).length ? `?${querystring.stringify(params)}` : '');

    return new EventHandlerImpl().connect(url, protocols);
  }

  /**
   * Generate an iterable of the pagination.
   * @param initialURL Path for the endpoint
   * @param initialParams Query parameter
   * @return Async iterable iterator of the pages.
   * See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
   */
  async *paginate<T, U>(
    initialUrl: string,
    initialParams?: U,
  ): AsyncGenerator<T, void, PaginateNext<U>> {
    let nextUrl: string | undefined = initialUrl;
    let nextParams = initialParams;

    while (nextUrl) {
      const response: AxiosResponse<T> = await this.request<T>({
        method: 'GET',
        url: nextUrl,
        params: nextParams,
      });

      // Yield will be argument of next()
      const options = yield response.data;
      // Get next URL from "next" in the link header
      const linkHeaderNext = response.headers?.link?.match(
        /<(.+?)>; rel="next"/,
      )?.[1];

      if (options?.reset) {
        nextUrl = initialUrl;
        nextParams = initialParams;
      } else {
        nextUrl = options?.url ?? linkHeaderNext;
        nextParams = options?.params;
      }
    }
  }
}
