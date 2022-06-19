import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';

import { MastoConfig } from '../config';
import { createError, CreateErrorParams, MastoError } from '../errors';
import { MimeType, Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import { Http, Request, Response } from './http';

export class HttpAxiosImpl extends BaseHttp implements Http {
  private readonly axios: AxiosInstance;

  constructor(readonly config: MastoConfig, readonly serializer: Serializer) {
    super();

    this.axios = axios.create({
      baseURL: config.url,
      headers: this.createHeader() as AxiosRequestHeaders,
      proxy: config.proxy,
      timeout: config.timeout,
      transformRequest: (data, headers) => {
        if (headers == null) {
          throw new MastoError('headers is null');
        }

        const result = this.serializer.serialize(
          headers['Content-Type'] as MimeType,
          data,
        );

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
      transformResponse: (data, headers) => {
        if (headers == null) {
          throw new MastoError('headers is null');
        }

        const contentType = this.getContentType(headers);
        if (contentType == null) {
          throw new MastoError('Content-Type is not defined');
        }

        return this.serializer.deserialize(contentType, data);
      },
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = error.response?.data as any;

      throw createError({
        statusCode: error?.response?.status,
        message: data?.error,
        details: data?.errorDescription,
        description: data?.details,
        limit: error?.response?.headers?.['X-RateLimit-Limit'],
        remaining: error?.response?.headers?.['X-RateLimit-Remaining'],
        reset: error?.response?.headers?.['X-RateLimit-Reset'],
      } as CreateErrorParams);
    }
  }
}
