/**
 * Mastodon Timeout error
 * @param message Message for users
 */
export class MastoTimeoutError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoTimeoutError';
  }
}
