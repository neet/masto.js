import { CustomError } from 'ts-custom-error';

// https://github.com/tootsuite/mastodon/pull/15803
export type MastoErrorType =
  | 'ERR_BLOCKED'
  | 'ERR_UNREACHABLE'
  | 'ERR_TAKEN'
  | 'ERR_RESERVED'
  | 'ERR_ACCEPTED'
  | 'ERR_BLANK'
  | 'ERR_INVALID'
  | 'ERR_TOO_LONG'
  | 'ERR_TOO_SHORT'
  | 'ERR_INCLUSION';

export type MastoHttpErrorDetail = {
  readonly error: MastoErrorType;
  readonly description: string;
};

export type MastoHttpErrorDetails = Record<
  string,
  readonly MastoHttpErrorDetail[]
>;

export class MastoHttpError extends CustomError {
  readonly statusCode: number;
  readonly description?: string;
  readonly details?: MastoHttpErrorDetails;

  constructor(
    statusCode: number,
    message: string,
    description?: string,
    details?: MastoHttpErrorDetails,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.statusCode = statusCode;
    this.message = message;
    this.description = description;
    this.details = details;
  }
}
