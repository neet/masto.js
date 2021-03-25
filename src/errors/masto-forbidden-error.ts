import { MastoError } from './masto-error';

/**
 * Mastodon forbidden error
 */
export class MastoForbiddenError extends MastoError {
  readonly name = 'MastoForbiddenError';
  readonly statusCode = 403;

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
