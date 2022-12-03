import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon forbidden error
 */
export class MastoHttpConflictError extends MastoHttpError {
  override name = 'MastoHttpConflictError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, 409, props);
  }
}
