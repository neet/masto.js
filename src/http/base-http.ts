import type { Http, HttpRequestParams, HttpRequestResult } from './http';

export abstract class BaseHttp implements Http {
  abstract request(params: HttpRequestParams): Promise<HttpRequestResult>;

  get<T>(path: string, data?: unknown, init: RequestInit = {}): Promise<T> {
    return this.request({
      path,
      searchParams: data as Record<string, unknown>,
      requestInit: {
        method: 'get',
        ...init,
      },
    }).then((response) => response.data as T);
  }

  post<T>(path: string, data?: unknown, init: RequestInit = {}): Promise<T> {
    return this.request({
      path,
      body: data as Record<string, unknown>,
      requestInit: {
        method: 'post',
        ...init,
      },
    }).then((response) => response.data as T);
  }

  delete<T>(path: string, data?: unknown, init: RequestInit = {}): Promise<T> {
    return this.request({
      path,
      body: data as Record<string, unknown>,
      requestInit: {
        method: 'delete',
        ...init,
      },
    }).then((response) => response.data as T);
  }

  put<T>(path: string, data?: unknown, init: RequestInit = {}): Promise<T> {
    return this.request({
      path,
      body: data as Record<string, unknown>,
      requestInit: {
        method: 'put',
        ...init,
      },
    }).then((response) => response.data as T);
  }

  patch<T>(path: string, data?: unknown, init: RequestInit = {}): Promise<T> {
    return this.request({
      path,
      body: data as Record<string, unknown>,
      requestInit: {
        method: 'patch',
        ...init,
      },
    }).then((response) => response.data as T);
  }
}
