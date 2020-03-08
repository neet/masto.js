/**
 * Mastodon forbidden error
 * @param message Message for users
 */
export class MastoConflictError extends Error {
  constructor(...args: string[]) {
    super(...args);
    this.name = 'MastoConflictError';
  }
}
