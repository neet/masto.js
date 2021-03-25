import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  MastoConflictError,
  MastoForbiddenError,
  MastoGoneError,
  MastoNotFoundError,
  MastoRateLimitError,
  MastoUnauthorizedError,
  MastoUnprocessableEntityError,
} from '../errors';
import { Serializer } from '../serializers';
import { Body, Http, Request, Response } from './http';

export class HttpAxiosImpl implements Http {
  private readonly axios: AxiosInstance;

  constructor(
    readonly baseURL: string,
    readonly serializer: Serializer,
    readonly config: AxiosRequestConfig = {},
    readonly accessToken?: string,
  ) {
    this.axios = axios.create({
      baseURL,
      headers: this.accessToken
        ? {
            Authorization: `Bearer ${this.accessToken}`,
          }
        : {},
      transformRequest: (data, headers) =>
        this.serializer.serialize(headers['Content-Type'], data),
      transformResponse: (data, headers) =>
        this.serializer.deserialize(
          headers['Content-Type'] ?? 'application/json',
          data,
        ),
      paramsSerializer: (params) =>
        this.serializer.serialize('application/json', params) as string,
      ...config,
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

      switch (status) {
        case 401:
          throw new MastoUnauthorizedError(message, description);
        case 403:
          throw new MastoForbiddenError(message, description);
        case 404:
          throw new MastoNotFoundError(message, description);
        case 409:
          throw new MastoConflictError(message, description);
        case 410:
          throw new MastoGoneError(message, description);
        case 422:
          throw new MastoUnprocessableEntityError(message, description);
        case 429:
          throw new MastoRateLimitError(
            message,
            error?.response?.headers?.['X-RateLimit-Limit'],
            error?.response?.headers?.['X-RateLimit-Remaining'],
            error?.response?.headers?.['X-RateLimit-Reset'],
            description,
          );
        default:
          throw error;
      }
    }
  }

  get<T>(url: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'get',
      url,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  post<T>(url: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'post',
      url,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  delete<T>(url: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'delete',
      url,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  put<T>(url: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'put',
      url,
      body,
      ...init,
    }).then((response) => response.data as T);
  }

  patch<T>(url: string, body?: Body, init: Request = {}): Promise<T> {
    return this.request({
      method: 'patch',
      url,
      body,
      ...init,
    }).then((response) => response.data as T);
  }
}
