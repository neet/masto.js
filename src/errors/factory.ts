import type { MastoError, MastoErrorDetails } from './masto-error';
import { MastoHttpConflictError } from './masto-http-conflict-error';
import { MastoHttpError } from './masto-http-error';
import { MastoHttpForbiddenError } from './masto-http-forbidden-error';
import { MastoHttpGoneError } from './masto-http-gone-error';
import { MastoHttpNotFoundError } from './masto-http-not-found-error';
import { MastoHttpRateLimitError } from './masto-http-rate-limit-error';
import { MastoHttpUnauthorizedError } from './masto-http-unauthorized-error';
import { MastoHttpUnprocessableEntityError } from './masto-http-unprocessable-entity-error';

export interface BaseCreateErrorParams {
  readonly cause?: unknown;
  readonly message: string;
  readonly description?: string;
  readonly details?: MastoErrorDetails;
}

export interface CreateDefaultErrorParams extends BaseCreateErrorParams {
  readonly statusCode: 401 | 403 | 404 | 404 | 409 | 410 | 422 | 500;
}

export interface CreateRateLimitErrorParams extends BaseCreateErrorParams {
  readonly statusCode: 429;
  readonly limit: number;
  readonly remaining: number;
  readonly reset: string;
}

export type CreateErrorParams =
  | CreateDefaultErrorParams
  | CreateRateLimitErrorParams;

export const createError = (params: CreateErrorParams): MastoError => {
  const message = params.message ?? 'Unexpected error occurred';
  const props = {
    cause: params.cause,
    description:
      params.description ?? 'No further description is provided for this error',
    details: params.details,
  };

  switch (params.statusCode) {
    case 401: {
      return new MastoHttpUnauthorizedError(message, props);
    }
    case 403: {
      return new MastoHttpForbiddenError(message, props);
    }
    case 404: {
      return new MastoHttpNotFoundError(message, props);
    }
    case 409: {
      return new MastoHttpConflictError(message, props);
    }
    case 410: {
      return new MastoHttpGoneError(message, props);
    }
    case 422: {
      return new MastoHttpUnprocessableEntityError(message, props);
    }
    case 429: {
      return new MastoHttpRateLimitError(message, {
        ...props,
        limit: params.limit,
        remaining: params.remaining,
        reset: params.reset,
      });
    }
    default: {
      return new MastoHttpError(message, params.statusCode, props);
    }
  }
};
