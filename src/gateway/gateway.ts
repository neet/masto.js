import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import normalizeUrl from 'normalize-url';
import querystring from 'querystring';
import semver from 'semver';
import { oc } from 'ts-optchain';
import { Instance } from '../entities/instance';
import { MastoNotFoundError } from '../errors/masto-not-found-error';
import { MastoRateLimitError } from '../errors/masto-rate-limit-error';
import { MastoUnauthorizedError } from '../errors/masto-unauthorized-error';
import { isAxiosError } from './utils';
import { WebSocketEvents } from './websocket';

// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';

export interface GatewayConstructorParams {
  /** URI of the instance */
  uri: string;
  /** Streaming API URL */
  streamingApiUrl?: string;
  /** Version of the instance */
  version?: string;
  /** Access token of the user */
  accessToken?: string;
}

export type LoginParams = Pick<GatewayConstructorParams, 'uri' | 'accessToken'>;

export type PaginateNextOptions<Params> = {
  /** Reset pagination */
  reset?: boolean;
  /** URL */
  url?: string;
  /** Query parameters */
  params?: Params;
};

/**
 * Mastodon network request wrapper
 * @param params Optional params
 */
export class Gateway {
  /** URI of the instance */
  private _uri = '';
  /** Streaming API URL of the instance */
  private _streamingApiUrl = '';
  /** Version of the current instance */
  public version = '';
  /** API token of the user */
  public accessToken?: string;

  /**
   * @param params Parameters
   */
  constructor(params: GatewayConstructorParams) {
    this.uri = params.uri;

    if (params.streamingApiUrl) {
      this.streamingApiUrl = params.streamingApiUrl;
    }

    if (params.version) {
      this.version = params.version;
    }

    if (params.accessToken) {
      this.accessToken = params.accessToken;
    }
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
   * @param params Paramters
   * @return Instance of Mastodon class
   */
  public static async login<T extends typeof Gateway>(
    this: T,
    params: LoginParams,
  ) {
    const gateway = new this(params) as InstanceType<T>;
    const instance = await gateway.get<Instance>('/api/v1/instance');
    gateway.version = instance.version;
    gateway.streamingApiUrl = instance.urls.streaming_api;

    return gateway;
  }

  /**
   * Transform JSON to JS object
   * @param response Response object
   * @return Parsed entitiy
   */
  private transformResponse(response: any) {
    try {
      return JSON.parse(response);
    } catch {
      return response;
    }
  }

  /**
   * Encode data in request options and add authorization / content-type header
   * @param data Any data
   * @param options Axios options
   */
  private decorateRequestConfig(
    options: AxiosRequestConfig = {},
  ): AxiosRequestConfig {
    options.url = options.url && normalizeUrl(options.url);
    options.transformResponse = [this.transformResponse];

    if (!options.headers) {
      options.headers = {};
    }

    // Set `application/json` as the default
    if (!options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/json';
    }

    // Add oauth header
    if (this.accessToken) {
      options.headers.Authorization = `Bearer ${this.accessToken}`;
    }

    switch (options.headers['Content-Type']) {
      case 'application/json':
        options.data = JSON.stringify(options.data);

        return options;

      case 'multipart/form-data':
        const formData = new FormData();

        for (const [key, value] of Object.entries<string | Blob>(
          options.data,
        )) {
          formData.append(key, value);
        }

        options.data = formData;

        // In Node.js, axios doesn't set boundary data in the content-type header
        // so set it manually by using getHeaders of `form-data` node.js package
        if (typeof (formData as any).getHeaders === 'function') {
          options.headers = {
            ...options.headers,
            ...(formData as any).getHeaders(),
          };
        }

        return options;

      default:
        return options;
    }
  }

  /**
   * Wrapper function for Axios
   * @param options Axios options
   * @param parse Whether parse response before return
   * @return Parsed response object
   */
  protected async request<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      return await axios.request<T>(options);
    } catch (error) {
      if (isAxiosError(error)) {
        const status = oc(error).response.status();

        // Error response from REST API might contain error key
        // https://docs.joinmastodon.org/api/entities/#error
        const { error: errorMessage } = oc(error).response.data({
          error: 'Unexpected error',
        });

        switch (status) {
          case 401:
            throw new MastoUnauthorizedError(errorMessage);
          case 404:
            throw new MastoNotFoundError(errorMessage);
          case 429:
            throw new MastoRateLimitError(errorMessage);
          default:
            throw error;
        }
      }

      throw error;
    }
  }

  /**
   * HTTP GET
   * @param url URL to request
   * @param params Query strings
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public async get<T>(
    path: string,
    params: any = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>(
      this.decorateRequestConfig({
        method: 'GET',
        url: this.uri + path,
        params,
        ...options,
      }),
    );

    return response.data;
  }

  /**
   * HTTP POST
   * @param url URL to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public async post<T>(
    path: string,
    data: any = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>(
      this.decorateRequestConfig({
        method: 'POST',
        url: this.uri + path,
        data,
        ...options,
      }),
    );

    return response.data;
  }

  /**
   * HTTP PUT
   * @param path Path to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public async put<T>(
    path: string,
    data: any = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>(
      this.decorateRequestConfig({
        method: 'PUT',
        url: this.uri + path,
        data,
        ...options,
      }),
    );

    return response.data;
  }

  /**
   * HTTP DELETE
   * @param path Path to request
   * @param data jPayload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public async delete<T>(
    path: string,
    data: any = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>(
      this.decorateRequestConfig({
        method: 'DELETE',
        url: this.uri + path,
        data,
        ...options,
      }),
    );

    return response.data;
  }

  /**
   * HTTP PATCH
   * @param path Path to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public async patch<T>(
    path: string,
    data: any = {},
    options?: AxiosRequestConfig,
  ) {
    const response = await this.request<T>(
      this.decorateRequestConfig({
        method: 'PATCH',
        url: this.uri + path,
        data,
        ...options,
      }),
    );

    return response.data;
  }

  /**
   * Connect to a streaming
   * @param path Path to stream
   * @param params Query parameters
   * @return Instance of EventEmitter
   */
  public stream(path: string, params: { [key: string]: any } = {}) {
    const version = semver.coerce(this.version);
    const protocols = [];

    // Since v2.8.4, Using `Sec-Websocket-Protocl` to
    // Pass token string is supported
    // https://github.com/tootsuite/mastodon/pull/10818
    if (this.accessToken && version && semver.gte(version, '2.8.4')) {
      protocols.push(this.accessToken);
    } else if (this.accessToken) {
      params.access_token = this.accessToken;
    }

    const url =
      this.streamingApiUrl +
      path +
      (Object.keys(params).length ? `?${querystring.stringify(params)}` : '');

    return new WebSocketEvents().connect(url, protocols);
  }

  /**
   * Generate an iterable of the pagination.
   * The default generator implementation of JS cannot change the value of `done` depend on the result of yield,
   * Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.
   * @param path Path for the endpoint
   * @param initialParams Query parameter
   * @return Async iterable iterator of the pages.
   * See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
   */
  public paginate<Data, Params = any>(
    path: string,
    initialParams?: Params,
  ): AsyncIterableIterator<Data | undefined> {
    // tslint:disable-next-line no-this-assignment
    const gateway = this;
    const initialUrl = this.uri + path;

    let currentUrl: string = initialUrl;
    let currentParams: Params | undefined = initialParams;

    return {
      async next(options: PaginateNextOptions<Params> = {}) {
        if (options.reset) {
          currentUrl = initialUrl;
          currentParams = initialParams;
        }

        const response = await gateway.request<Data>(
          gateway.decorateRequestConfig({
            method: 'GET',
            url: options.url || currentUrl,
            params: options.params || currentParams,
          }),
        );

        // Set next url from the link header
        const link = oc(response.headers).link('');
        const match = link.match(/<(.+?)>; rel="next"/) as string[];

        currentUrl = (match && match.length && match[1]) || '';
        currentParams = undefined;

        // Return `done: true` immediately if no next url returned
        return { done: !currentUrl, value: response.data };
      },

      async return(value: Data) {
        return { value, done: true };
      },

      async throw(error?: Error) {
        throw error;
      },

      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }
}
