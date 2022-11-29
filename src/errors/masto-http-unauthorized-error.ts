import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon unauthorized error class
 */
export class MastoHttpUnauthorizedError extends MastoHttpError {
  override name = 'MastoUnauthorizedError';

  constructor(message: string, props: MastoErrorProps) {
    super(message, 401, props);
  }
}

/**
 * @deprecated Will be removed in v5
 */
export const MastoUnauthorizedError = MastoHttpUnauthorizedError;
