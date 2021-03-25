import { MastoError } from './masto-error';

/**
 * Mastodon gone error
 */
export class MastoGoneError extends MastoError {
  readonly name = 'MastoGoneError';
  readonly statusCode = 410;

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
