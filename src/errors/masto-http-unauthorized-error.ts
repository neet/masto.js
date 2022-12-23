import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon unauthorized error class
 */
export class MastoHttpUnauthorizedError extends MastoHttpError {
  override name = 'MastoHttpUnauthorizedError';

  constructor(message: string, props: MastoErrorProps) {
    super(message, 401, props);
    Object.setPrototypeOf(this, MastoHttpUnauthorizedError.prototype);
  }
}
