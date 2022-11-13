import { MastoConflictError } from './masto-conflict-error';
import type { MastoErrorDetails } from './masto-error';
import { MastoError } from './masto-error';
import { MastoForbiddenError } from './masto-forbidden-error';
import { MastoGoneError } from './masto-gone-error';
import { MastoNotFoundError } from './masto-not-found-error';
import { MastoRateLimitError } from './masto-rate-limit-error';
import { MastoUnauthorizedError } from './masto-unauthorized-error';
import { MastoUnprocessableEntityError } from './masto-unprocessable-entity-error';

export interface BaseCreateErrorParams {
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
  const description =
    params.description ?? 'No description provided for this error';
  const args = [message, description, params.details] as const;

  switch (params.statusCode) {
    case 401:
      return new MastoUnauthorizedError(...args);
    case 403:
      return new MastoForbiddenError(...args);
    case 404:
      return new MastoNotFoundError(...args);
    case 409:
      return new MastoConflictError(...args);
    case 410:
      return new MastoGoneError(...args);
    case 422:
      return new MastoUnprocessableEntityError(...args);
    case 429:
      return new MastoRateLimitError(
        message,
        params.limit,
        params.remaining,
        params.reset,
        description,
      );
    default:
      return new MastoError(
        message,
        params.statusCode,
        description,
        params.details,
      );
  }
};
