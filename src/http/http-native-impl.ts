import type { RequestInit } from '@mastojs/ponyfills';
import { fetch, Request, Response } from '@mastojs/ponyfills';

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
import { getEncoding } from './get-encoding';
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
      if (!response.ok) {
        throw response;
      }

      const text = await response.text();
      const encoding = getEncoding(response.headers);
      if (encoding == undefined) {
        throw new MastoUnexpectedError(
          'Unknown encoding is returned from the server',
        );
      }

      const data = this.serializer.deserialize(encoding, text);
      this.logger?.info(`↓ ${request.method} ${request.url}`);
      this.logger?.debug('\tbody', text);

      return {
        headers: response.headers,
        data,
      };
    } catch (error) {
      this.logger?.debug(`HTTP failed`, error);
      throw await this.createError(error);
    } finally {
      timeout.clear();
    }
  }

  private createRequest(params: HttpRequestParams): [Request, Timeout] {
    const { method, path, searchParams, encoding = 'json' } = params;

    const url = this.config.resolveHttpPath(path, searchParams);
    const headers = this.config.createHeader(params.headers);
    const [signal, timeout] = this.config.createAbortSignal(params?.signal);
    const body = this.serializer.serialize(encoding, params.body);

    const requestInit: RequestInit = {
      method,
      headers,
      body,
      signal,
    };

    if (typeof body === 'string' && encoding === 'json') {
      headers.set('Content-Type', 'application/json');
    }

    if (typeof body === 'string' && encoding === 'form-url-encoded') {
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

    const request = new Request(url, requestInit);
    return [request, timeout];
  }

  private async createError(error: unknown): Promise<unknown> {
    if (error instanceof Response) {
      const data = this.serializer.deserialize(
        getEncoding(error.headers) ?? 'json',
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
