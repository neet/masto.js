/**
 * Mastodon unauthorized error class
 * @param message Message for users
 */
export class MastodonUnauthorizedError extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = 'MastodonUnauthorizedError';
  }
}
