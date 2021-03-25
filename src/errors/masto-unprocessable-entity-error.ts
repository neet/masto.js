import { MastoError } from './masto-error';

/**
 * Mastodon unprocessable entity
 * @param message Message for users
 */
export class MastoUnprocessableEntityError extends MastoError {
  readonly name = 'MastoUnprocessableEntityError';
  readonly statusCode = 422;

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
