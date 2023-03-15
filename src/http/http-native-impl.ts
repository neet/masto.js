import type { AbortSignal } from '@mastojs/ponyfills';
import { fetch, FormData, Request, Response } from '@mastojs/ponyfills';

import type { MastoConfig } from '../config';
import type { CreateErrorParams } from '../errors';
import {
  createHttpError,
  MastoTimeoutError,
  MastoUnexpectedError,
} from '../errors';
import type { Logger } from '../logger';
import type { Serializer } from '../serializers';
import type { Timeout } from '../utils';
import { BaseHttp } from './base-http';
import { getContentType } from './get-content-type';
import type { Http, HttpRequestParams, HttpRequestResult } from './http';

export class HttpNativeImpl extends BaseHttp implements Http {
  constructor(
    private readonly serializer: Serializer,
    private readonly config: MastoConfig,
    private readonly logger?: Logger,
  ) {
    super();
  }

  async request(params: HttpRequestParams): Promise<HttpRequestResult> {
    const [request, timeout] = this.createRequest(params);

    try {
      this.logger?.info(`↑ ${request.method} ${request.url}`);
      this.logger?.debug('\tbody', request.body);
      const response = await fetch(request);
      timeout.clear();

      if (!response.ok) {
        throw response;
      }

      const text = await response.text();
      const contentType = getContentType(response.headers);
      if (contentType == undefined) {
        throw new MastoUnexpectedError('Content-Type is not defined');
      }

      const data = this.serializer.deserialize(contentType, text);
      this.logger?.info(`↓ ${request.method} ${request.url}`);
      this.logger?.debug('\tbody', text);

      return {
        headers: response.headers,
        data,
      };
    } catch (error) {
      this.logger?.debug(`HTTP failed`, error);
      throw await this.createError(error);
    }
  }

  private createRequest(params: HttpRequestParams): [Request, Timeout] {
    const { path, searchParams, requestInit, useCustomBackend } = params;

    const url = this.config.resolveHttpPath(
      path,
      searchParams,
      useCustomBackend,
    );
    const headers = this.config.createHeader(
      requestInit?.headers,
      useCustomBackend,
    );
    const [abortSignal, timeout] = this.config.createAbortSignal(
      requestInit?.signal as AbortSignal,
    );
    const body = this.serializer.serialize(
      getContentType(headers) ?? 'application/json',
      params.body,
    );

    if (body instanceof FormData) {
      // As multipart form data should contain an arbitrary boundary,
      // leave Content-Type header undefined, so that fetch() API
      // automatically configure Content-Type with an appropriate boundary.
      headers.delete('Content-Type');
    }

    if (body == undefined && getContentType(headers) == 'application/json') {
      // Since an empty string is not a valid JSON,
      // if the body is empty and the content type is set to JSON,
      // remove 'content-type:application/json' from headers
      headers.delete('Content-Type');
    }

    const request = new Request(url, {
      ...requestInit,
      headers,
      body,
      signal: abortSignal,
    });

    return [request, timeout];
  }

  private async createError(error: unknown): Promise<unknown> {
    if (error instanceof Response) {
      const data = this.serializer.deserialize(
        getContentType(error.headers) ?? 'application/json',
        await error.text(),
      );

      return createHttpError({
        cause: error,
        statusCode: error.status,
        message: data?.error,
        details: data?.errorDescription,
        description: data?.details,
        limit: error.headers.get('X-RateLimit-Limit'),
        remaining: error.headers.get('X-RateLimit-Remaining'),
        reset: error.headers.get('X-RateLimit-Reset'),
      } as CreateErrorParams);
    }

    // TODO: Use abort reason
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error != undefined && (error as any).name === 'AbortError') {
      return new MastoTimeoutError(`Request timed out`, { cause: error });
    }

    return error;
  }
}
