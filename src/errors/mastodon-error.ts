/**
 * Mastodon generic error
 * @param name Name of error
 * @param message Message for users
 */
export class MastodonError extends Error {
  constructor(public name: string, public message: string) {
    super();
  }
}
