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
    const headers = new Headers(
      this.createHeader(request.headers) as unknown as Record<string, string>,
    );
    const contentType = headers.get('Content-Type') ?? 'application/json';
    const body = this.serializer.serialize(contentType as MimeType, data);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body as string,
      });
      const text = await response.text();

      return this.serializer.deserialize(
        response.headers.get('Content-Type') as MimeType,
        text,
      );
    } catch (e) {
      if (!(e instanceof Response)) {
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
