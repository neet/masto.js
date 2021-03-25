import { MastoError } from './masto-error';

/**
 * Mastodon unauthorized error class
 * @param message Message for users
 */
export class MastoUnauthorizedError extends MastoError {
  readonly statusCode = 401;
  readonly name = 'MastoUnauthorizedError';

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
