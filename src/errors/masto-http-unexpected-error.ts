import type { MastoErrorProps } from './masto-error';
import { MastoHttpError } from './masto-http-error';

export class MastoHttpUnexpectedError extends MastoHttpError {
  override name = 'MastoHttpUnexpectedError';

  constructor(message: string, statusCode: number, props?: MastoErrorProps) {
    super(message, statusCode, props);
    Object.setPrototypeOf(this, MastoHttpUnexpectedError.prototype);
  }
}
