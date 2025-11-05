import {
  type Encoding,
  type Http,
  type HttpMetaParams,
  type HttpRequestParams,
  type HttpResponse,
} from "../../interfaces/index.js";

export abstract class BaseHttp implements Http {
  abstract request<T>(params: HttpRequestParams): Promise<HttpResponse<T>>;

  get<T>(
    path: string,
    data?: unknown,
    meta: HttpMetaParams<Encoding> = {},
  ): Promise<HttpResponse<T>> {
    return this.request({
      method: "GET",
      path,
      search: data as Record<string, unknown>,
      ...meta,
    });
  }

  post<T>(
    path: string,
    data?: unknown,
    meta: HttpMetaParams<Encoding> = {},
  ): Promise<HttpResponse<T>> {
    return this.request({
      method: "POST",
      path,
      body: data as Record<string, unknown>,
      ...meta,
    });
  }

  delete<T>(
    path: string,
    data?: unknown,
    meta: HttpMetaParams<Encoding> = {},
  ): Promise<HttpResponse<T>> {
    return this.request({
      method: "DELETE",
      path,
      body: data as Record<string, unknown>,
      ...meta,
    });
  }

  put<T>(
    path: string,
    data?: unknown,
    meta: HttpMetaParams<Encoding> = {},
  ): Promise<HttpResponse<T>> {
    return this.request({
      method: "PUT",
      path,
      body: data as Record<string, unknown>,
      ...meta,
    });
  }

  patch<T>(
    path: string,
    data?: unknown,
    meta: HttpMetaParams<Encoding> = {},
  ): Promise<HttpResponse<T>> {
    return this.request({
      method: "PATCH",
      path,
      body: data as Record<string, unknown>,
      ...meta,
    });
  }
}
