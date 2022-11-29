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

export interface MastoErrorDetail {
  readonly error: MastoErrorType;
  readonly description: string;
}

export type MastoErrorDetails = Record<string, readonly MastoErrorDetail[]>;

export type MastoErrorProps = {
  readonly cause?: unknown;
  readonly description?: string;
  readonly details?: MastoErrorDetails;
};

/**
 * Error object
 * @see https://docs.joinmastodon.org/entities/error/
 */
export class MastoError extends Error {
  name = 'MastoError';
  /** A longer description of the error, mainly provided with the OAuth API. */
  readonly description?: string;
  /** Used by /api/v1/accounts */
  readonly details?: MastoErrorDetails;
  /** Helper to check if the error has been thrown from Masto */
  readonly isMastoError = true;

  /**
   * @param message The error message. Equivalent for the `error` field from the Error entity
   * @param props Additional properties
   */
  constructor(message: string, props: MastoErrorProps = {}) {
    super(message, { cause: props.cause });
    this.description = props.description;
    this.details = props.details;
  }
}
