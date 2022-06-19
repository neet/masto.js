import { headerCase } from 'change-case';

import { MastoConfig } from '../config';
import { createError, CreateErrorParams, MastoError } from '../errors';
import { MimeType, Serializer } from '../serializers';
import { BaseHttp } from './base-http';
import { Headers, Http, Request, Response } from './http';

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
      const text = await response.text();
      const resContentType = this.getContentType(
        HttpNativeImpl.toHeaders(response.headers),
      );

      if (resContentType == null) {
        throw new MastoError('Content-Type is not defined');
      }

      return {
        headers: HttpNativeImpl.toHeaders(response.headers),
        data: this.serializer.deserialize('application/json', text),
      };
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

  private static toHeaders(headers: globalThis.Headers): Headers {
    const result: Record<string, unknown> = {};
    headers.forEach((value, key) => {
      result[headerCase(key)] = value;
    });
    return result as Headers;
  }

  private static hasBlob(formData: FormData): boolean {
    let hasBlob = false;
    formData.forEach((v: string | Blob) => (hasBlob ||= v instanceof Blob));
    return hasBlob;
  }
}
