/**
 * Mastodon gone error
 * @param message Message for users
 */
export class MastoGoneError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoGoneError';
  }
}
