import { MastodonError } from './mastodon-error';

export class MastodonNotFoundError extends MastodonError {
  constructor(message: string) {
    super('MastodonNotFoundError', message);
  }
}
