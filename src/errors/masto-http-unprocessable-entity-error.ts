import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon unprocessable entity
 */
export class MastoHttpUnprocessableEntityError extends MastoHttpError {
  override name = 'MastoHttpUnprocessableEntityError';

  constructor(message: string, props: MastoErrorProps) {
    super(message, 422, props);
    Object.setPrototypeOf(this, MastoHttpUnprocessableEntityError.prototype);
  }
}
