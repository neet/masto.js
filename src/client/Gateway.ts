import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as querystring from 'querystring';
import { MastodonError } from '../errors/MastodonError';
import { MastodonNotFoundError } from '../errors/MastodonNotFoundError';
import { MastodonRatelimitError } from '../errors/MastodonRatelimitError';
import { MastodonUnauthorizedError } from '../errors/MastodonUnauthorizedError';
import { MastodonURLResolveError } from '../errors/MastodonURLResolveError';
import { EventHandler } from './EventHandler';

export class Gateway {
  /** Rest API URL of the instance */
  protected url: string = '';

  /** Streaming API URL of the instance */
  protected streamingUrl: string = '';

  /** API token of the user */
  protected token?: string;

  /**
   * @param options Optional params
   * @param options.url Rest API URL of the instance
   * @param options.streamingUrl Streaming API URL of the instance
   * @param options.token API token of the user
   */
  constructor(options: {
    url?: string;
    streamingUrl?: string;
    token?: string;
  }) {
    if (options) {
      this.url = options.url || '';
      this.streamingUrl = options.streamingUrl || '';

      if (options.token) {
        this.token = options.token;
      }
    }
  }

  /**
   * Getting rest API URL of the instance
   * @return Rest API URL
   */
  public getUrl = () => this.url;

  /**
   * Getting streaming API URL of the instance
   * @return Streaming API URL
   */
  public getStreamingUrl = () => this.streamingUrl;

  /**
   * Getting token of authenticated user
   * @return The token
   */
  public getToken = () => this.token;

  /**
   * Setting rest API URL of the instance
   * @param url URL of the instance
   */
  public setUrl(url: string) {
    this.url = url.replace(/\/$/, '');
  }

  /**
   * Setting streaming API URL of the instance
   * @param url URL of the instance
   */
  public setStreamingUrl(url: string) {
    this.streamingUrl = url.replace(/\/$/, '');
  }

  /**
   * Setting token of authenticated user
   * @param token Token of the user
   */
  public setToken(token: string) {
    this.token = token;
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

    if (!this.url) {
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
          throw new MastodonRatelimitError(errorMessage);
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
}
