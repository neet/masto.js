import type { MastoConfig } from '../config';
import type { MimeType, Serializer } from '../serializers';
import type { Data, Headers, Http, Request, Response } from './http';

export abstract class BaseHttp implements Http {
  abstract readonly config: MastoConfig;
  abstract readonly serializer: Serializer;

  abstract request<T>(request: Request): Promise<Response<T>>;

  createHeader(header: Partial<Headers> = {}): Headers {
    const headers: Headers = {
      'Content-Type': 'application/json',
      ...header,
    };
    if (this.config.accessToken) {
      headers['Authorization'] = `Bearer ${this.config.accessToken}`;
    }
    return headers;
  }

  resolveUrl(path: string, params: Data = {}): string {
    const searchParams = this.serializer.serializeQueryString(params);

    return `${this.config.url}${path}${
      searchParams !== '' ? `?${searchParams}` : ''
    }`;
  }

  getContentType(headers: Headers): MimeType | undefined {
    const contentType = headers['Content-Type'] ?? headers['content-type'];
    if (typeof contentType !== 'string') {
      return;
    }

    return contentType.replace(/\s*;.*$/, '') as MimeType;
  }

  get<T>(url: string, data?: Data, init: Partial<Request> = {}): Promise<T> {
    return this.request({
      method: 'get',
      url,
      params: data,
      ...init,
    }).then((response) => response.data as T);
  }

  post<T>(url: string, data?: Data, init: Partial<Request> = {}): Promise<T> {
    return this.request({
      method: 'post',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  delete<T>(url: string, data?: Data, init: Partial<Request> = {}): Promise<T> {
    return this.request({
      method: 'delete',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  put<T>(url: string, data?: Data, init: Partial<Request> = {}): Promise<T> {
    return this.request({
      method: 'put',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  patch<T>(url: string, data?: Data, init: Partial<Request> = {}): Promise<T> {
    return this.request({
      method: 'patch',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }
}
