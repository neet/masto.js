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

/**
 * Error object
 * @see https://docs.joinmastodon.org/entities/error/
 */
export class MastoError extends Error {
  /** Helper to check if the error has been thrown from Masto */
  readonly isMastoError = true;

  constructor(
    /** The error message. Equivalent for the `error` field from the Error entity */
    readonly message: string,
    /** HTTP status code */
    readonly statusCode?: number,
    /** A longer description of the error, mainly provided with the OAuth API. */
    readonly description?: string | null,
    /** Used by /api/v1/accounts */
    readonly details?: MastoErrorDetails | null,
  ) {
    super();
  }
}
