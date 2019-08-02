/**
 * Mastodon rate limit error class
 * @param message Message for users
 */
export class MastoRateLimitError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoRateLimitError';
  }
}
