import type { MastoErrorDetails } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon forbidden error
 */
export class MastoForbiddenError extends MastoError {
  readonly name = 'MastoForbiddenError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, 403, description, details);
  }
}
