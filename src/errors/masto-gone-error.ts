import { MastoError, MastoErrorDetails } from './masto-error';

/**
 * Mastodon gone error
 */
export class MastoGoneError extends MastoError {
  readonly name = 'MastoGoneError';

  constructor(
    message: string,
    description?: string,
    details?: MastoErrorDetails,
  ) {
    super(message, 410, description, details);
  }
}
