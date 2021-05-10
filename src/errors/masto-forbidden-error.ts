import { MastoError, MastoErrorDetails } from './masto-error';

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
