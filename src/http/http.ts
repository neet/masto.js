import type { AbortSignal, Headers } from '@mastojs/ponyfills';

import type { Encoding } from '../serializers';

// prettier-ignore
type HttpEncodingParam<T extends Encoding>
  = T extends 'none' ? { readonly encoding: never }
  : T extends 'json' ? { readonly encoding?: 'json' }
  : { readonly encoding: T };

export type HttpMetaParams<T extends Encoding = 'none'> =
  HttpEncodingParam<T> & {
    readonly headers?: Headers;
    readonly signal?: AbortSignal;
    readonly timeout?: number;
  };

export type HttpMethod = <T>(
  path: string,
  data?: unknown,
  meta?: HttpMetaParams<Encoding>,
) => Promise<T>;

export type HttpRequestParams = HttpMetaParams<Encoding> & {
  readonly method: string;
  readonly path: string;
  readonly searchParams?: Record<string, unknown>;
  readonly body?: Record<string, unknown>;
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
