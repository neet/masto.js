import { MastodonError } from './mastodon-error';

export class MastodonUnauthorizedError extends MastodonError {
  constructor(message: string) {
    super('MastodonUnauthorizedError', message);
  }
}
