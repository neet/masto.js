/**
 * Mastodon rate limit error class
 * @param message Message for users
 */
export class MastodonRateLimitError extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = 'MastodonRateLimitError';
  }
}
