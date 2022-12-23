import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

/**
 * Mastodon Deserialize error
 */
export class MastoDeserializeError extends MastoError {
  override name = 'MastoDeserializeError';

  constructor(
    message: string,
    readonly contentType: string,
    readonly data: unknown,
    props?: MastoErrorProps,
  ) {
    super(message, props);
    Object.setPrototypeOf(this, MastoDeserializeError.prototype);
  }
}
