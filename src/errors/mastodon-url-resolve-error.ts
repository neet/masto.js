import { MastodonError } from './mastodon-error';

export class MastodonURLResolveError extends MastodonError {
  constructor(message: string) {
    super('MastodonURLResolveError', message);
  }
}
