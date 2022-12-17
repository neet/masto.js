import type { MastoConfig } from '../config';
import type { CreateErrorParams } from '../errors';
import { createError, MastoUnexpectedError } from '../errors';
import type { Serializer } from '../serializers';
import { mergeAbortSignals } from '../utils';
import { BaseHttp } from './base-http';
import { getContentType } from './get-content-type';
import type { Http, HttpRequestParams, HttpRequestResult } from './http';

export class HttpNativeImpl extends BaseHttp implements Http {
  constructor(
    private readonly fetchImpl: typeof fetch,
    private readonly config: MastoConfig,
    private readonly serializer: Serializer,
  ) {
    super();
  }

  async request(params: HttpRequestParams): Promise<HttpRequestResult> {
    const { path, searchParams, requestInit } = params;

    const url = this.config.resolveHttpPath(path, searchParams);
    const headers = this.config.createHeader(requestInit?.headers);
    const reqType = headers.get('Content-Type') ?? 'application/json';
    const body = this.serializer.serialize(reqType, params.body);

    if (body instanceof FormData) {
      // As multipart form data should contain an arbitrary boundary,
      // leave Content-Type header undefined, so that fetch() API
      // automatically configure Content-Type with an appropriate boundary.
      headers.delete('Content-Type');
    }

    const signals: AbortSignal[] = [];
    const timeoutController = this.config.createTimeoutController();
    if (timeoutController) {
      signals.push(timeoutController.signal);
    }
    if (requestInit?.signal != undefined) {
      signals.push(requestInit.signal);
    }

    try {
      const response = await this.fetchImpl(url, {
        ...requestInit,
        headers,
        body: body as string,
        signal: mergeAbortSignals(signals),
      });

      if (!response.ok) {
        throw response;
      }

      const text = await response.text();
      const resType = getContentType(response.headers);

      if (resType == undefined) {
        throw new MastoUnexpectedError('Content-Type is not defined');
      }

      return {
        headers: response.headers,
        data: this.serializer.deserialize(
          response.headers.get('Content-Type') ?? 'application/json',
          text,
        ),
      };
    } catch (error) {
      if (!(error instanceof Response)) {
        throw error;
      }

      const data = this.serializer.deserialize(
        error.headers.get('Content-Type') ?? 'application/json',
        await error.text(),
      );

      throw createError({
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
  }
}
