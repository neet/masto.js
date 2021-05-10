import axios, { AxiosInstance } from 'axios';

import { MastoConfig } from '../config';
import {
  MastoConflictError,
  MastoError,
  MastoForbiddenError,
  MastoGoneError,
  MastoNotFoundError,
  MastoRateLimitError,
  MastoUnauthorizedError,
  MastoUnprocessableEntityError,
} from '../errors';
import { Serializer } from '../serializers';
import { Data, Http, Request, Response } from './http';

export class HttpAxiosImpl implements Http {
  private readonly axios: AxiosInstance;

  constructor(readonly config: MastoConfig, readonly serializer: Serializer) {
    this.axios = axios.create({
      baseURL: config.url,
      headers: {
        Authorization:
          this.config.accessToken && `Bearer ${this.config.accessToken}`,
        'Content-Type': 'application/json',
        ...config.headers,
      },
      proxy: config.proxy,
      timeout: config.timeout,
      transformRequest: (data, headers) => {
        const result = this.serializer.serialize(headers['Content-Type'], data);

        // In Node.js, axios doesn't set boundary data to the header
        // so set it manually by using getHeaders of form-data node.js package
        // https://github.com/form-data/form-data#headers-getheaders-headers-userheaders-
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (result as any)?.getHeaders === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          headers['Content-Type'] = (result as any).getHeaders()[
            'content-type'
          ];
        }

        return result;
      },
      transformResponse: (data, headers) =>
        this.serializer.deserialize(
          headers['Content-Type'] ?? 'application/json',
          data,
        ),
      paramsSerializer: (params) =>
        this.serializer.serialize(
          'application/x-www-form-urlencoded',
          params,
        ) as string,
    });
  }

  async request<T>(params: Request): Promise<Response<T>> {
    try {
      const response = await this.axios.request<T>(params);

      return {
        headers: response.headers,
        data: response.data,
      };
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      const status = error?.response?.status;
      const message =
        error?.response?.data?.error ?? 'Unexpected error occurred';
      const description = error?.response?.data?.errorDescription;
      const details = error?.response?.data?.details;
      const args = [message, description, details] as const;

      switch (status) {
        case 401:
          throw new MastoUnauthorizedError(...args);
        case 403:
          throw new MastoForbiddenError(...args);
        case 404:
          throw new MastoNotFoundError(...args);
        case 409:
          throw new MastoConflictError(...args);
        case 410:
          throw new MastoGoneError(...args);
        case 422:
          throw new MastoUnprocessableEntityError(...args);
        case 429:
          throw new MastoRateLimitError(
            message,
            error?.response?.headers?.['X-RateLimit-Limit'],
            error?.response?.headers?.['X-RateLimit-Remaining'],
            error?.response?.headers?.['X-RateLimit-Reset'],
            description,
          );
        default:
          throw new MastoError(...args);
      }
    }
  }

  get<T>(url: string, data?: Data, init: Request = {}): Promise<T> {
    return this.request({
      method: 'get',
      url,
      params: data,
      ...init,
    }).then((response) => response.data as T);
  }

  post<T>(url: string, data?: Data, init: Request = {}): Promise<T> {
    return this.request({
      method: 'post',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  delete<T>(url: string, data?: Data, init: Request = {}): Promise<T> {
    return this.request({
      method: 'delete',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  put<T>(url: string, data?: Data, init: Request = {}): Promise<T> {
    return this.request({
      method: 'put',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }

  patch<T>(url: string, data?: Data, init: Request = {}): Promise<T> {
    return this.request({
      method: 'patch',
      url,
      data,
      ...init,
    }).then((response) => response.data as T);
  }
}
