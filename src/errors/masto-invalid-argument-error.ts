import { CustomError } from 'ts-custom-error';

export class MastoInvalidArgumentError extends CustomError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
