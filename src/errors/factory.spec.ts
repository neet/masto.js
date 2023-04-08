import { createHttpError } from './factory';
import { MastoHttpConflictError } from './masto-http-conflict-error';
import { MastoHttpForbiddenError } from './masto-http-forbidden-error';
import { MastoHttpGoneError } from './masto-http-gone-error';
import { MastoHttpNotFoundError } from './masto-http-not-found-error';
import { MastoHttpRateLimitError } from './masto-http-rate-limit-error';
import { MastoHttpUnauthorizedError } from './masto-http-unauthorized-error';
import { MastoHttpUnexpectedError } from './masto-http-unexpected-error';
import { MastoHttpUnprocessableEntityError } from './masto-http-unprocessable-entity-error';

describe('HTTP error factory', () => {
  it('creates unauthorized error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 401,
      message: 'Unauthorized',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpUnauthorizedError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Unauthorized');
  });

  it('creates forbidden error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 403,
      message: 'Forbidden',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpForbiddenError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Forbidden');
  });

  it('creates not found error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 404,
      message: 'Not Found',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpNotFoundError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Not Found');
  });

  it('creates conflict error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 409,
      message: 'Conflict',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpConflictError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Conflict');
  });

  it('creates gone error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 410,
      message: 'Gone',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpGoneError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Gone');
  });

  it('creates unprocessable entity error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 422,
      message: 'Unprocessable Entity',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpUnprocessableEntityError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Unprocessable Entity');
  });

  it('creates rate limit error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 429,
      message: 'Rate Limit Exceeded',
      cause,
      limit: 100,
      remaining: 0,
      reset: '2021-01-01T00:00:00.000Z',
    });

    expect(error).toBeInstanceOf(MastoHttpRateLimitError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Rate Limit Exceeded');
  });

  it('creates unexpected error', () => {
    const cause = {};
    const error = createHttpError({
      statusCode: 500,
      message: 'Internal Server Error',
      cause,
    });

    expect(error).toBeInstanceOf(MastoHttpUnexpectedError);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('Internal Server Error');
  });
});
