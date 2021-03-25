/**
 * Error object
 * @see https://docs.joinmastodon.org/entities/error/
 */
export abstract class MastoError extends Error {
  /** Helper to check if the error has been thrown from Masto */
  readonly isMastoError = true;
  /** HTTP status code */
  readonly statusCode?: number;
  /** The error message. Equivalent for the `error` field from the Error entity */
  abstract readonly message: string;
  /** A longer description of the error, mainly provided with the OAuth API. */
  abstract readonly description?: string | null;
}
