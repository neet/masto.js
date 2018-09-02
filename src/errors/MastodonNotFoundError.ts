import { MastodonError } from '@/errors/MastodonError';

export class MastodonNotFoundError extends MastodonError {
  constructor (message: string) {
    super('MastodonNotFoundError', message);
  }
}
