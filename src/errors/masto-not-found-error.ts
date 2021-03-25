import { MastoError } from './masto-error';

/**
 * Mastodon not found error class
 */
export class MastoNotFoundError extends MastoError {
  readonly statusCode = 404;
  readonly name = 'MastoNotFoundError';

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
