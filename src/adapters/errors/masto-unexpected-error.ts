import { CustomError } from 'ts-custom-error';

export class MastoUnexpectedError extends CustomError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
