import { MastoError } from './masto-error';

/**
 * Mastodon forbidden error
 */
export class MastoConflictError extends MastoError {
  readonly name = 'MastoConflictError';
  readonly statusCode = 409;

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
