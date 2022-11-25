import type { MastoConfig } from '../config';
import type { CreateErrorParams } from '../errors';
import { createError, MastoError } from '../errors';
import type { MimeType, Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import type { Http, Request } from './http';
import { Headers, Response } from './http';

export class HttpNativeImpl extends BaseHttp implements Http {
  constructor(readonly config: MastoConfig, readonly serializer: Serializer) {
    super();
  }

  async request<T>(request: Request): Promise<Response<T>> {
    const { timeout, proxy } = this.config;
    const { method, data, params } = request;

    if (proxy != undefined) {
      // eslint-disable-next-line no-console
      console.warn('Proxies are not supported on HttpNativeImpl');
    }

    if (timeout != undefined) {
      // eslint-disable-next-line no-console
      console.warn('Timeouts are not supported on HttpNativeImpl');
    }

    const url = this.resolveUrl(request.url, params);
    const headers = new Headers(
      this.createHeader(request.headers) as unknown as Record<string, string>,
    );
    const reqContentType = headers.get('Content-Type') ?? 'application/json';
    const body = this.serializer.serialize(reqContentType as MimeType, data);

    if (
      body instanceof FormData &&
      reqContentType === 'multipart/form-data' &&
      HttpNativeImpl.hasBlob(body)
    ) {
      // As multipart form data should contain an arbitrary boundary,
      // leave Content-Type header undefined, so that fetch() API
      // automatically configure Content-Type with an appropriate boundary.
      headers.delete('Content-Type');
    }

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body as string,
      });

      if (!response.ok) {
        throw response;
      }

      const text = await response.text();
      const resContentType = this.getContentType(
        HttpNativeImpl.toHeaders(response.headers),
      );

      if (resContentType == undefined) {
        throw new MastoError('Content-Type is not defined');
      }

      return {
        headers: HttpNativeImpl.toHeaders(response.headers),
        data: this.serializer.deserialize('application/json', text),
      };
    } catch (error) {
      if (!(error instanceof Response)) {
        throw error;
      }

      const data = await error.json();

      throw createError({
        statusCode: error.status,
        message: data?.error,
        details: data?.errorDescription,
        description: data?.details,
        limit: error.headers.get('X-RateLimit-Limit'),
        remaining: error.headers.get('X-RateLimit-Remaining'),
        reset: error.headers.get('X-RateLimit-Reset'),
      } as CreateErrorParams);
    }
  }

  private static toHeaders(headers: globalThis.Headers): Headers {
    const result: Record<string, unknown> = {};
    // eslint-disable-next-line unicorn/no-array-for-each
    headers.forEach((value, key) => {
      result[key.toLowerCase()] = value;
    });
    return result as Headers;
  }

  private static hasBlob(formData: FormData): boolean {
    let hasBlob = false;
    // eslint-disable-next-line unicorn/no-array-for-each
    formData.forEach((v: string | Blob) => (hasBlob ||= v instanceof Blob));
    return hasBlob;
  }
}
