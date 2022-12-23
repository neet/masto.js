import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon forbidden error
 */
export class MastoHttpForbiddenError extends MastoHttpError {
  override name = 'MastoHttpForbiddenError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, 403, props);
    Object.setPrototypeOf(this, MastoHttpForbiddenError.prototype);
  }
}
