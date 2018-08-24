import nodeFetch from 'node-fetch';
import * as querystring from 'querystring';
import { EventHandler } from './EventHandler';
import {
  MastodonUnauthorizedError,
  MastodonNotFoundError,
  MastodonRatelimitError,
  MastodonError,
} from './Errors';

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
  constructor (options: { url: string, streamingUrl: string, token?: string }) {
    if (options) {
      this.url = options.url;
      this.streamingUrl = options.streamingUrl;

      if (options.token) {
        this.token = options.token;
      }
    }
  }

  /** Getting rest API URL of the instance*/
  public getUrl = () => this.url;

  /** Getting streaming API URL of the instance*/
  public getStreamingUrl = () => this.streamingUrl;

  /** Getting token of authenticated user */
  public getToken = () => this.token;

  /** Setting rest API URL of the instance */
  public setUrl (url: string) { this.url = url.replace(/\/$/, ''); }

  /** Setting streaming API URL of the instance */
  public setStreamingUrl (url: string) { this.streamingUrl = url.replace(/\/$/, ''); }

  /** Setting token of authenticated user */
  public setToken (token: string) { this.token = token; }

  /**
   * Fetch API wrapper function
   * @param url URL to request
   * @param options Fetch API options
   * @param parse Whether parse response before return
   * @return Parsed response object
   */
  protected async request (url: string, options: { [key: string]: any } = {}, parse = true): Promise<any> {
    if ( !options.headers ) {
      options.headers = {};
    }

    options.headers['Content-Type']  = 'application/json';

    if ( this.token ) {
      options.headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = typeof window === 'undefined'
      ? await nodeFetch(url, options)
      : await fetch(url, options);

    if ( !parse ) {
      return response;
    }

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      switch (response.status) {
        case 401:
          throw new MastodonUnauthorizedError(data.error);
        case 404:
          throw new MastodonNotFoundError(data.error);
        case 429:
          throw new MastodonRatelimitError(data.error);
        default:
          throw new MastodonError('MastodonError', data.error || 'Unexpected error occurred');
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
  protected get <T>(url: string, params = {}, options = {}, parse = true): Promise<T> {
    return this.request(url + (Object.keys(params).length ? '?' + querystring.stringify(params) : ''), { method: 'GET', ...options }, parse);
  }

  /**
   * HTTP POST
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected post <T>(url: string, body = {}, options = {}, parse = true): Promise<T> {
    return this.request(url, { method: 'POST', body: JSON.stringify(body), ...options }, parse);
  }

  /**
   * HTTP PUT
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected put <T>(url: string, body = {}, options = {}, parse = true): Promise<T> {
    return this.request(url, { method: 'PUT', body: JSON.stringify(body), ...options }, parse);
  }

  /**
   * HTTP DELETE
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected delete <T>(url: string, body = {}, options = {}, parse = true): Promise<T> {
    return this.request(url, { method: 'DELETE', body: JSON.stringify(body), ...options }, parse);
  }

  /**
   * HTTP PATCH
   * @param url URL to request
   * @param body Payload
   * @param options Fetch API options
   * @param parse Whether parse response before return
   */
  protected patch <T>(url: string, body = {}, options = {}, parse = true): Promise<T> {
    return this.request(url, { method: 'PATCH', body: JSON.stringify(body), ...options }, parse);
  }

  /**
   * Start streaming
   * @param id ID of the channel, e.g. `public`, `user`, `public/local` etc
   * @return Instance of EventEmitter
   */
  protected stream (url: string, params: { [key: string]: string }): EventHandler {
    if ( this.token ) {
      params.access_token = this.token;
    }

    return new EventHandler(url, params);
  }
}
