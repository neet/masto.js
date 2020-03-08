import { ParsedUrlQueryInput } from 'querystring';

import { EventHandler } from './event-handler';

/**
 * Argument of `Gateway.paginate().next()`.
 * When reset = true specified, other params won't be accepted
 */
export type PaginateNext<Params> =
  | {
      reset: boolean;
      url?: undefined;
      params?: undefined;
    }
  | {
      reset?: undefined;
      url?: string;
      params?: Params;
    };

export interface Gateway<Options = undefined> {
  uri: string;
  streamingApiUrl: string;
  version: string;
  accessToken?: string;
  get<T>(path: string, params: unknown, options?: Options): Promise<T>;
  post<T>(path: string, data: unknown, options?: Options): Promise<T>;
  put<T>(path: string, data: unknown, options?: Options): Promise<T>;
  patch<T>(path: string, data: unknown, options?: Options): Promise<T>;
  delete<T>(path: string, data: unknown, options?: Options): Promise<T>;
  stream(path: string, params: ParsedUrlQueryInput): Promise<EventHandler>;
  paginate<T, U>(
    url: string,
    params?: U,
  ): AsyncGenerator<T, void, PaginateNext<U>>;
}

export interface GatewayConstructorParams<T = undefined> {
  /** URI of the instance */
  uri: string;
  /** Streaming API URL */
  streamingApiUrl?: string;
  /** Version of the instance */
  version?: string;
  /** Access token of the user */
  accessToken?: string;
  /** Axios configurations. See [Axios'](https://github.com/axios/axios#request-config) docs */
  defaultOptions?: T;
}

export type LoginParams = Omit<
  GatewayConstructorParams,
  'version' | 'streamingApiUrl'
>;

export interface GatewayConstructor<Options = undefined> {
  new (params: GatewayConstructorParams<Options>): Gateway;
  login(params: LoginParams): Promise<Gateway>;
}
