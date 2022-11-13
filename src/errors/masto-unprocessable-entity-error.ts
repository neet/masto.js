import type { MastoErrorDetails } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon unprocessable entity
 * @param message Message for users
 */
export class MastoUnprocessableEntityError extends MastoError {
  readonly name = 'MastoUnprocessableEntityError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, 422, description, details);
  }
}
