import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon invalid argument error
 */
export class MastoInvalidArgumentError extends MastoError {
  override name = 'MastoInvalidArgumentError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, props);
    Object.setPrototypeOf(this, MastoInvalidArgumentError.prototype);
  }
}
