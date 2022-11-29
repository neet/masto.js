import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon not found error class
 */
export class MastoHttpNotFoundError extends MastoHttpError {
  override name = 'MastoNotFoundError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, 404, props);
  }
}

/**
 * @deprecated Will be removed in v5
 */
export const MastoNotFoundError = MastoHttpNotFoundError;
