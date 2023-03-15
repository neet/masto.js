import type { Headers, RequestInit } from '@mastojs/ponyfills';

export type HttpMethod = <T>(
  path: string,
  data?: unknown,
  request?: RequestInit,
) => Promise<T>;

export type HttpRequestParams = {
  readonly path: string;
  readonly searchParams?: Record<string, unknown>;
  readonly body?: Record<string, unknown>;
  readonly requestInit?: Omit<RequestInit, 'body'>;
  readonly useCustomBackend?: boolean;
};

export type HttpRequestResult = {
  headers: Headers;
  data: unknown;
};

export interface Http {
  readonly request: (params: HttpRequestParams) => Promise<HttpRequestResult>;
  readonly get: HttpMethod;
  readonly post: HttpMethod;
  readonly patch: HttpMethod;
  readonly put: HttpMethod;
  readonly delete: HttpMethod;
}
