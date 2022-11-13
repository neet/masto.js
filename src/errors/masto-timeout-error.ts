import type { MastoErrorDetails } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon Timeout error
 * @param message Message for users
 */
export class MastoTimeoutError extends MastoError {
  readonly name = 'MastoTimeoutError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, undefined, description, details);
  }
}
