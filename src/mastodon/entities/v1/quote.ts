import { type Status } from "./status.js";

export interface QuoteStateRegistry {
  pending: never;
  accepted: never;
  rejected: never;
  revoked: never;
  deleted: never;
  unauthorized: never;
  blocked_account: never;
  blocked_domain: never;
  muted_account: never;
}

export type QuoteState = keyof QuoteStateRegistry;

/**
 * Represents a quote or a quote placeholder, with the current authorization status.
 * @see https://docs.joinmastodon.org/entities/Quote
 */
export interface Quote {
  /* The state of the quote */
  state: QuoteState;
  /* The status being quoted, if the quote has been accepted. This will be null, unless the state attribute is accepted. */
  quotedStatus?: Status | null;
}
