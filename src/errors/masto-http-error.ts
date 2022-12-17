import type { MastoErrorProps } from './masto-error';
import { MastoError } from './masto-error';

export abstract class MastoHttpError extends MastoError {
  override name = 'MastoHttpError';
  readonly statusCode: number;

  constructor(message: string, statusCode: number, props?: MastoErrorProps) {
    super(message, props);
    this.statusCode = statusCode;
  }
}
