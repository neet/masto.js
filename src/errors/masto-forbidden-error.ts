/**
 * Mastodon forbidden error
 * @param message Message for users
 */
export class MastoForbiddenError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoForbiddenError';
  }
}
