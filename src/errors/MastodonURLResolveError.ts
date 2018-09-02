import { MastodonError } from '@/errors/MastodonError';

export class MastodonURLResolveError extends MastodonError {
  constructor (message: string) {
    super('MastodonURLResolveError', message);
  }
}
