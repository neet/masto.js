export type Headers = { readonly [key: string]: unknown };
export type Body = unknown;

export type Request = {
  readonly path?: string;
  readonly method?: 'get' | 'post' | 'patch' | 'delete' | 'put' | 'options';
  readonly headers?: Headers;
  readonly body?: Body;
};

export type Response<T> = {
  readonly headers: Headers;
  readonly data: T;
};

export type Method = <T>(
  path: string,
  body?: Body,
  request?: Request,
) => Promise<T>;

export interface Http {
  readonly baseURL: string;
  readonly request: <T>(request: Request) => Promise<Response<T>>;
  readonly get: Method;
  readonly post: Method;
  readonly patch: Method;
  readonly put: Method;
  readonly delete: Method;
}
