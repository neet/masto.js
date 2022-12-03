import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

/**
 * Mastodon gone error
 */
export class MastoHttpGoneError extends MastoHttpError {
  override name = 'MastoHttpGoneError';

  constructor(message: string, props?: MastoErrorProps) {
    super(message, 410, props);
  }
}
