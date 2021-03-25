import { MastoError } from './masto-error';

/**
 * Mastodon gone error
 */
export class MastoGoneError extends MastoError {
  readonly name = 'MastoGoneError';

  constructor(readonly message: string, readonly description?: string) {
    super();
  }
}
