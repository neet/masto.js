import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as LinkHeader from 'http-link-header';
import * as querystring from 'querystring';
import { MastodonNotFoundError } from '../errors/mastodon-not-found-error';
import { MastodonRateLimitError } from '../errors/mastodon-rate-limit-error';
import { MastodonUnauthorizedError } from '../errors/mastodon-unauthorized-error';
import { StreamingHandler } from './streaming-handler';

/** Type to determine whether paginate-able entity */
export type Paginatable = string[] | { id: string }[];

export type PaginateNextOptions<Params> = {
  /** Reset pagination */
  reset?: boolean;

  /** URL */
  url?: string;

  /** Query parameters */
  params?: Params;
};

export interface GatewayConstructor {
  uri: string;
  streamingApiUrl?: string;
  version?: string;
  accessToken?: string;
}

/**
 * Mastodon network request wrapper
 * @param options Optional params
 * @param options.url URL of the instance
 * @param options.streamingUrl Streaming API URL of the instance
 * @param options.token API token of the user
 */
export class Gateway {
  /** URI of the instance */
  private _uri = '';

  /** Version of the current instance */
  private _version = '';

  /** Streaming API URL of the instance */
  private _streamingApiUrl = '';

  /** API token of the user */
  private _accessToken = '';

  protected constructor(params: GatewayConstructor) {
    this._uri = params.uri;

    if (params.streamingApiUrl) {
      this._streamingApiUrl = params.streamingApiUrl;
    }

    if (params.version) {
      this._version = params.version;
    }

    if (params.accessToken) {
      this._accessToken = params.accessToken;
    }
  }

  /** Accessor for this._uri */
  public get uri() {
    return this._uri;
  }

  /** Accessor for this._version  */
  public get version() {
    return this._version;
  }

  /** Accessor for this._streamingApiUrl */
  public get streamingApiUrl() {
    return this._streamingApiUrl;
  }

  /** Accessor for this._accessToken */
  public get accessToken() {
    return this._accessToken;
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
    if (!options.headers) {
      options.headers = {};
    }

    if (!options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/json';
    }

    if (this.accessToken) {
      options.headers.Authorization = `Bearer ${this.accessToken}`;
    }

    options.transformResponse = [
      (data: any) => {
        try {
          return JSON.parse(data);
        } catch {
          return data;
        }
      },
    ];

    try {
      return await axios.request<T>(options);
    } catch (error) {
      const status =
        error && error.response ? error.response.status : undefined;

      // Error response from REST API might contain error key
      // https://docs.joinmastodon.org/api/entities/#error
      const errorMessage =
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error;

      switch (status) {
        case 401:
          throw new MastodonUnauthorizedError(errorMessage);
        case 404:
          throw new MastodonNotFoundError(errorMessage);
        case 429:
          throw new MastodonRateLimitError(errorMessage);
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
  protected get<T>(
    url: string,
    params: { [key: string]: any } = {},
    options?: AxiosRequestConfig,
  ) {
    return this.request<T>({
      method: 'GET',
      url:
        url +
        (Object.keys(params).length ? `?${querystring.stringify(params)}` : ''),
      ...options,
    });
  }

  /**
   * HTTP POST
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected post<T>(url: string, body: any = {}, options: AxiosRequestConfig) {
    return this.request<T>({
      method: 'POST',
      url,
      data: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * HTTP PUT
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected put<T>(url: string, body: any = {}, options: AxiosRequestConfig) {
    return this.request<T>({
      method: 'PUT',
      url,
      data: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * HTTP DELETE
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected delete<T>(
    url: string,
    body: any = {},
    options: AxiosRequestConfig,
  ) {
    return this.request<T>({
      method: 'DELETE',
      url,
      data: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * HTTP PATCH
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected patch<T>(url: string, body: any = {}, options: AxiosRequestConfig) {
    return this.request<T>({
      method: 'PATCH',
      url,
      data: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * Connect to a streaming
   * @param id ID of the channel, e.g. `public`, `user`, `public:local`
   * @return Instance of EventEmitter
   */
  protected stream(url: string, params: { [key: string]: any } = {}) {
    if (this.accessToken) {
      params.access_token = this.accessToken;
    }

    return new StreamingHandler().connect(
      url + Object.keys(params).length
        ? `${querystring.stringify(params)}`
        : '',
    );
  }

  /**
   * Generate an iterable of the pagination.
   * The default generator implementation of JS cannot change the value of `done` depend on the result of yield,
   * Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.
   * @param initialUrl URL for the endpoint
   * @param initialParams Query parameter
   * @return Async iterable iterator of the pages.
   * See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
   */
  protected paginate<Data extends Paginatable, Params = any>(
    initialUrl: string,
    initialParams?: Params,
  ): AsyncIterableIterator<AxiosResponse<Data> | undefined> {
    const get = this.get.bind(this);

    let url: string = initialUrl;
    let params: Params | undefined = initialParams;

    return {
      async next(value?: PaginateNextOptions<Params>) {
        if (value && value.reset) {
          url = initialUrl;
          params = initialParams;
        }

        if (!url) {
          return { done: true, value: undefined };
        }

        const response = await get<Data>(
          (value && value.url) || url,
          (value && value.params) || params,
        );

        // Set next url from the link header
        const link = (response.headers && response.headers.link) || '';
        const next = LinkHeader.parse(link).refs.find(
          ({ rel }) => rel === 'next',
        );

        url = (next && next.uri) || '';
        params = undefined;

        // Return `done: true` immediately if no next url returned
        return { done: !url, value: response };
      },

      async return(value: AxiosResponse<Data>) {
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
