import { MastodonError } from './MastodonError';

export class MastodonURLResolveError extends MastodonError {
  constructor (message: string) {
    super('MastodonURLResolveError', message);
  }
}
