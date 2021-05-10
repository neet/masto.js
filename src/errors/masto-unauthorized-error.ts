import { MastoError, MastoErrorDetails } from './masto-error';

/**
 * Mastodon unauthorized error class
 * @param message Message for users
 */
export class MastoUnauthorizedError extends MastoError {
  readonly name = 'MastoUnauthorizedError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, 401, description, details);
  }
}
