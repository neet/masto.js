import { MastodonError } from './mastodon-error';

/**
 * Mastodon not found error class
 * @param message Message for users
 */
export class MastodonNotFoundError extends MastodonError {
  constructor(message: string) {
    super('MastodonNotFoundError', message);
  }
}
