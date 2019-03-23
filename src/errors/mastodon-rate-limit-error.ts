import { MastodonError } from './mastodon-error';

export class MastodonRateLimitError extends MastodonError {
  constructor(message: string) {
    super('MastodonRateLimitError', message);
  }
}
