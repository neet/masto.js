export type Method = <T>(
  path: string,
  data?: unknown,
  request?: Omit<RequestInit, 'body'>,
) => Promise<T>;

export interface Http {
  readonly request: (path: string, request: RequestInit) => Promise<Response>;
  readonly get: Method;
  readonly post: Method;
  readonly patch: Method;
  readonly put: Method;
  readonly delete: Method;
}
