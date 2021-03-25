import { MastoError } from './masto-error';

/**
 * Mastodon Timeout error
 * @param message Message for users
 */
export class MastoTimeoutError extends MastoError {
  readonly name = 'MastoTimeoutError';

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
