import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon not found error class
 */
export class MastoHttpNotFoundError extends MastoHttpError {
  override name = 'MastoHttpNotFoundError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, 404, props);
    Object.setPrototypeOf(this, MastoHttpNotFoundError.prototype);
  }
}
