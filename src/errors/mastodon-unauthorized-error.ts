import { MastodonError } from './mastodon-error';

/**
 * Mastodon unauthorized error class
 * @param message Message for users
 */
export class MastodonUnauthorizedError extends MastodonError {
  constructor(message: string) {
    super('MastodonUnauthorizedError', message);
  }
}
