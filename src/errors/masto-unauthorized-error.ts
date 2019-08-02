/**
 * Mastodon unauthorized error class
 * @param message Message for users
 */
export class MastoUnauthorizedError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoUnauthorizedError';
  }
}
