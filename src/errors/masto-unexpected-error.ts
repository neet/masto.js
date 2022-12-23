import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

export class MastoUnexpectedError extends MastoError {
  override name = 'MastoUnexpectedError';

  constructor(message: string, props: MastoErrorProps = {}) {
    super(message, { cause: props.cause });
    Object.setPrototypeOf(this, MastoUnexpectedError.prototype);
  }
}
