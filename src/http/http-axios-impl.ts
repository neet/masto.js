import type {
  AxiosInstance,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import axios from 'axios';

import type { MastoConfig } from '../config';
import type { CreateErrorParams } from '../errors';
import { createError, MastoError } from '../errors';
import type { MimeType, Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import type { Http, Request, Response } from './http';

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
      paramsSerializer: {
        serialize: (params) => this.encodeParams(params),
      },
    });
  }

  async request<T>(params: Request): Promise<Response<T>> {
    try {
      const config: AxiosRequestConfig = {};
      config.url = params.url;
      config.method = params.method;
      if (params.headers) {
        config.headers = params.headers as RawAxiosRequestHeaders;
      }
      if (params.params) {
        config.params = params.params;
      }
      if (params.data) {
        config.data = params.data;
      }

      const response = await this.axios.request<T>(config);

      return {
        headers: response.headers,
        data: response.data,
      };
    } catch (error) {
      // eslint-disable-next-line import/no-named-as-default-member
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
