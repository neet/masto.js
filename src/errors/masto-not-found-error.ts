import { MastoError, MastoErrorDetails } from './masto-error';

/**
 * Mastodon not found error class
 */
export class MastoNotFoundError extends MastoError {
  readonly name = 'MastoNotFoundError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, 404, description, details);
  }
}
