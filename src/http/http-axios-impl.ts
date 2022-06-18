import axios, { AxiosInstance } from 'axios';

import { MastoConfig } from '../config';
import { createError, CreateErrorParams, MastoError } from '../errors';
import { Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import { Http, Request, Response } from './http';

export class HttpAxiosImpl extends BaseHttp implements Http {
  private readonly axios: AxiosInstance;

  constructor(readonly config: MastoConfig, readonly serializer: Serializer) {
    super();

    this.axios = axios.create({
      baseURL: config.url,
      headers: this.createHeader(),
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
      transformResponse: (data, headers) => {
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

      throw createError({
        statusCode: error?.response?.status,
        message: error?.response?.data?.error,
        details: error?.response?.data?.errorDescription,
        description: error?.response?.data?.details,
        limit: error?.response?.headers?.['X-RateLimit-Limit'],
        remaining: error?.response?.headers?.['X-RateLimit-Remaining'],
        reset: error?.response?.headers?.['X-RateLimit-Reset'],
      } as CreateErrorParams);
    }
  }
}
