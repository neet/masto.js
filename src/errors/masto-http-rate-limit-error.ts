import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

export type MastoRateLimitErrorProps = MastoErrorProps & {
  readonly limit: number;
  readonly remaining: number;
  readonly reset: string;
};

/**
 * Mastodon rate limit error class
 */
export class MastoHttpRateLimitError extends MastoHttpError {
  override name = 'MastoHttpRateLimitError';

  /** Number of requests permitted per time period */
  readonly limit: number;
  /** Number of requests you can still make */
  readonly remaining: number;
  /** Timestamp when your rate limit will reset */
  readonly reset: string;

  constructor(message: string, props: MastoRateLimitErrorProps) {
    super(message, 429, props);
    Object.setPrototypeOf(this, MastoHttpRateLimitError.prototype);

    this.limit = props.limit;
    this.remaining = props.remaining;
    this.reset = props.reset;
  }
}
