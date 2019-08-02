/**
 * Mastodon not found error class
 * @param message Message for users
 */
export class MastoNotFoundError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoNotFoundError';
  }
}
