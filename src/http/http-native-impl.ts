import fetch from 'isomorphic-unfetch';

import { MastoConfig } from '../config';
import { createError, CreateErrorParams } from '../errors';
import { MimeType, Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import { Http, Request, Response } from './http';

export class HttpNativeImpl extends BaseHttp implements Http {
  constructor(readonly config: MastoConfig, readonly serializer: Serializer) {
    super();
  }

  async request<T>(request: Request): Promise<Response<T>> {
    const { timeout, proxy } = this.config;
    const { method, data } = request;

    if (proxy != null) {
      // eslint-disable-next-line no-console
      console.warn('Proxies are not supported on HttpNativeImpl');
    }

    if (timeout != null) {
      // eslint-disable-next-line no-console
      console.warn('Timeouts are not supported on HttpNativeImpl');
    }

    const url = this.resolveUrl(request.url, request.params);

    // unfetch does not support Header class
    const headers = this.createHeader(request.headers) as unknown as Record<
      string,
      string
    >;

    const contentType =
      headers['Content-Type'] ?? headers['content-type'] ?? 'application/json';
    const body = this.serializer.serialize(contentType as MimeType, data);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body as string,
      });
      const text = await response.text();

      const data = this.serializer.deserialize(
        response.headers.get('Content-Type')?.split('; ')?.[0] as MimeType,
        text,
      );

      return {
        data: data as T,
        headers: Object.fromEntries(response.headers.entries()),
      };
    } catch (e: any) {
      if (!('json' in e && typeof e.json === 'function')) {
        throw e;
      }

      const data = await e.json();

      throw createError({
        statusCode: e.status,
        message: data?.error,
        details: data?.errorDescription,
        description: data?.details,
        limit: e.headers.get('X-RateLimit-Limit'),
        remaining: e.headers.get('X-RateLimit-Remaining'),
        reset: e.headers.get('X-RateLimit-Reset'),
      } as CreateErrorParams);
    }
  }
}
