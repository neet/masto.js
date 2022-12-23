import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon Timeout error
 */
export class MastoTimeoutError extends MastoError {
  override name = 'MastoTimeoutError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, props);
    Object.setPrototypeOf(this, MastoTimeoutError.prototype);
  }
}
