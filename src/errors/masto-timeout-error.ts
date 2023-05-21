import { CustomError } from 'ts-custom-error';

export class MastoTimeoutError extends CustomError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
