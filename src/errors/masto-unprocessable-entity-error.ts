/**
 * Mastodon unprocessable entity
 * @param message Message for users
 */
export class MastoUnprocessableEntityError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoUnprocessableEntityError';
  }
}
