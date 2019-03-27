import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as LinkHeader from 'http-link-header';
// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';
import * as querystring from 'querystring';
import { oc } from 'ts-optchain';
import { MastodonNotFoundError } from '../errors/mastodon-not-found-error';
import { MastodonRateLimitError } from '../errors/mastodon-rate-limit-error';
import { MastodonUnauthorizedError } from '../errors/mastodon-unauthorized-error';
import { StreamingHandler } from './streaming-handler';
import { isAxiosError, normalizeUrl } from './utils';

export type PaginateNextOptions<Params> = {
  /** Reset pagination */
  reset?: boolean;
  /** URL */
  url?: string;
  /** Query parameters */
  params?: Params;
};

export interface GatewayConstructor {
  /** URI of the instance */
  uri: string;
  /** Streaming API URL */
  streamingApiUrl?: string;
  /** Version of the instance */
  version?: string;
  /** Access token of the user */
  accessToken?: string;
}

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
  private _version = '';
  /** API token of the user */
  private _accessToken = '';

  public constructor(params: GatewayConstructor) {
    this.uri = normalizeUrl(params.uri);

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

  /** Getter for this._uri */
  public get uri() {
    return this._uri;
  }

  /** Setter for this._uri */
  public set uri(newUri: string) {
    this._uri = normalizeUrl(newUri);
  }

  /** Getter for this._version  */
  public get version() {
    return this._version;
  }

  /** Setter for this._version */
  public set version(newVersion: string) {
    this._version = newVersion;
  }

  /** Getter for this._streamingApiUrl */
  public get streamingApiUrl() {
    return this._streamingApiUrl;
  }

  /** Setter for this._streamingApiUrl */
  public set streamingApiUrl(newStreamingApiUrl: string) {
    this._streamingApiUrl = normalizeUrl(newStreamingApiUrl);
  }

  /** Getter for this._accessToken */
  public get accessToken() {
    return this._accessToken;
  }

  /** Setter for this._accessToken */
  public set accessToken(newAccessToken: string) {
    this._accessToken = newAccessToken;
  }

  /**
   * Encode data in request options and add authorization / content-type header
   * @param data Any data
   * @param options Axios options
   */
  private decorateRequestConfig(
    data: any,
    options: AxiosRequestConfig = {},
  ): AxiosRequestConfig {
    options.transformResponse = [
      (res: any) => {
        try {
          return JSON.parse(res);
        } catch {
          return res;
        }
      },
    ];

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
        options.data = JSON.stringify(data);

        return options;

      case 'multipart/form-data':
        const formData = new FormData();

        for (const [key, value] of Object.entries<string | Blob>(data)) {
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
            throw new MastodonUnauthorizedError(errorMessage);
          case 404:
            throw new MastodonNotFoundError(errorMessage);
          case 429:
            throw new MastodonRateLimitError(errorMessage);
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
  public get<T>(
    url: string,
    params: { [key: string]: any } = {},
    options?: AxiosRequestConfig,
  ) {
    return this.request<T>({
      method: 'GET',
      url,
      params,
      ...options,
      ...this.decorateRequestConfig({}, options),
    });
  }

  /**
   * HTTP POST
   * @param url URL to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public post<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'POST',
      url,
      ...options,
      ...this.decorateRequestConfig(data, options),
    });
  }

  /**
   * HTTP PUT
   * @param url URL to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public put<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'PUT',
      url,
      ...options,
      ...this.decorateRequestConfig(data, options),
    });
  }

  /**
   * HTTP DELETE
   * @param url URL to request
   * @param data jPayload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public delete<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...options,
      ...this.decorateRequestConfig(data, options),
    });
  }

  /**
   * HTTP PATCH
   * @param url URL to request
   * @param data Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  public patch<T>(url: string, data: any = {}, options?: AxiosRequestConfig) {
    return this.request<T>({
      method: 'PATCH',
      url,
      ...options,
      ...this.decorateRequestConfig(data, options),
    });
  }

  /**
   * Connect to a streaming
   * @param id ID of the channel, e.g. `public`, `user`, `public:local`
   * @return Instance of EventEmitter
   */
  public stream(url: string, params: { [key: string]: any } = {}) {
    if (this.accessToken) {
      params.access_token = this.accessToken;
    }

    return new StreamingHandler().connect(
      url +
        (Object.keys(params).length ? `?${querystring.stringify(params)}` : ''),
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
  public paginate<Data, Params = any>(
    initialUrl: string,
    initialParams?: Params,
  ): AsyncIterableIterator<AxiosResponse<Data> | undefined> {
    // tslint:disable-next-line no-this-assignment
    const _this = this;

    let url: string = initialUrl;
    let params: Params | undefined = initialParams;

    return {
      async next(options: PaginateNextOptions<Params> = {}) {
        if (options.reset) {
          url = initialUrl;
          params = initialParams;
        }

        if (!url) {
          return { done: true, value: undefined };
        }

        const response = await _this.get<Data>(
          options.url || url,
          options.params || params,
        );

        // Set next url from the link header
        const link = oc(response.headers.link)('');
        const next = LinkHeader.parse(link).refs.find(
          ({ rel }) => rel === 'next',
        );

        url = oc(next).uri('');
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
