export type Headers = Record<string, unknown>;
export type Data = unknown;

export type Request = {
  readonly url: string;
  readonly method: 'get' | 'post' | 'patch' | 'delete' | 'put' | 'options';
  readonly headers?: Headers;
  readonly params?: Data;
  readonly data?: Data;
};

export type Response<T> = {
  readonly headers: Headers;
  readonly data: T;
};

export type Method = <T>(
  path: string,
  data?: Data,
  request?: Partial<Request>,
) => Promise<T>;

export interface Http {
  readonly request: <T>(request: Request) => Promise<Response<T>>;
  readonly get: Method;
  readonly post: Method;
  readonly patch: Method;
  readonly put: Method;
  readonly delete: Method;
}
