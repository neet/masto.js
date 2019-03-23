import { MastodonError } from './mastodon-error';

/**
 * Mastodon rate limit error class
 * @param message Message for users
 */
export class MastodonRateLimitError extends MastodonError {
  constructor(message: string) {
    super('MastodonRateLimitError', message);
  }
}
