import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as querystring from 'querystring';
import { MastodonError } from '../errors/mastodon-error';
import { MastodonNotFoundError } from '../errors/mastodon-not-found-error';
import { MastodonRateLimitError } from '../errors/mastodon-rate-limit-error';
import { MastodonUnauthorizedError } from '../errors/mastodon-unauthorized-error';
import { MastodonURLResolveError } from '../errors/mastodon-url-resolve-error';
import { EventHandler } from './event-handler';
import { getNextUrl } from './link-header';

export class Gateway {
  /** URI of the instance */
  public uri = '';

  /** Version of the current instance */
  public version = '';

  /** Streaming API URL of the instance */
  public streamingUrl = '';

  /** API token of the user */
  public token = '';

  /**
   * @param options Optional params
   * @param options.url URL of the instance
   * @param options.streamingUrl Streaming API URL of the instance
   * @param options.token API token of the user
   */
  protected constructor(options: {
    uri: string;
    streamingUrl?: string;
    version?: string;
    token?: string;
  }) {
    this.uri = options.uri;

    if (options.streamingUrl) {
      this.streamingUrl = options.streamingUrl;
    }

    if (options.version) {
      this.version = options.version;
    }

    if (options.token) {
      this.token = options.token;
    }
  }

  /**
   * Setting token of authenticated user
   * @param token Token of the user
   */
  public setToken(token: string) {
    this.token = token;

    return this;
  }

  /**
   * Fetch API wrapper function
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

    if (!this.uri) {
      throw new MastodonURLResolveError(
        "REST API URL has not been specified, Use Mastodon.setUrl to set your instance's URL",
      );
    }

    if (this.token) {
      options.headers.Authorization = `Bearer ${this.token}`;
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
      const { status } = error && error.response;

      // Error response from REST API might contain error key
      // https://docs.joinmastodon.org/api/entities/#error
      const { error: errorMessage } =
        error && error.response && error.response.data;

      switch (status) {
        case 401:
          throw new MastodonUnauthorizedError(errorMessage);
        case 404:
          throw new MastodonNotFoundError(errorMessage);
        case 429:
          throw new MastodonRateLimitError(errorMessage);
        default:
          throw new MastodonError(
            'MastodonError',
            errorMessage || 'Unexpected error occurred',
          );
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
  protected get<T>(url: string, params = {}, options = {}) {
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
  protected post<T>(url: string, body = {}, options = {}) {
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
  protected put<T>(url: string, body = {}, options = {}) {
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
  protected delete<T>(url: string, body = {}, options = {}) {
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
  protected patch<T>(url: string, body = {}, options = {}) {
    return this.request<T>({
      method: 'PATCH',
      url,
      data: JSON.stringify(body),
      ...options,
    });
  }

  /**
   * Start streaming
   * @param id ID of the channel, e.g. `public`, `user`, `public/local` etc
   * @return Instance of EventEmitter
   */
  protected stream(
    url: string,
    params: { [key: string]: string },
  ): EventHandler {
    if (!this.streamingUrl) {
      throw new MastodonURLResolveError(
        "Streaming API URL has not been specified, Use Mastodon.setStreamingUrl to set your instance's URL",
      );
    }

    if (this.token) {
      params.access_token = this.token;
    }

    return new EventHandler(url, params);
  }

  /**
   * Generate an iterable of the pagination
   * @param id Path to the API, e.g. `timelines/pulbic`, `accounts/1/statuses` e.g.
   * @param params Query parameter
   * @return An async iterable of statuses, most recent ones first.
   */
  protected async *paginationGenerator<T extends string[] | { id: string }[]>(
    path: string,
    params?: any,
  ) {
    let next: string | null = path;

    while (true) {
      const response = await this.get<T>(next, params);
      const result: T | 'reset' = yield response;

      if (result === 'reset') {
        next = path;
      } else {
        next = getNextUrl(response.headers);

        if (!next) {
          break;
        }
      }
    }
  }
}
