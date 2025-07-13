import { type QuoteState } from "./quote.js";

/**
 * Represents a quote or a quote placeholder, with the current authorization status.
 * @see https://docs.joinmastodon.org/entities/ShallowQuote/
 */
export interface ShallowQuote {
  /* The state of the quote. */
  state: QuoteState;
  /* The identifier of the status being quoted, if the quote has been accepted. This will be null, unless the state attribute is accepted. */
  quotedStatusId?: string | null;
}
