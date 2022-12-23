import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon version error
 */
export class MastoVersionError extends MastoError {
  override name = 'MastoVersionError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, props);
    Object.setPrototypeOf(this, MastoVersionError.prototype);
  }
}
