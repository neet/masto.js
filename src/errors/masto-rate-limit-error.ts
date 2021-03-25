import { MastoError } from './masto-error';

/**
 * Mastodon rate limit error class
 * @param message Message for users
 */
export class MastoRateLimitError extends MastoError {
  readonly name = 'MastoRateLimitError';
  readonly statusCode = 429;

  constructor(
    readonly message: string,
    /** Number of requests permitted per time period */
    readonly limit: number,
    /** Number of requests you can still make */
    readonly remaining: number,
    /** Timestamp when your rate limit will reset */
    readonly reset: string,
    readonly description?: string,
  ) {
    super();
  }
}
