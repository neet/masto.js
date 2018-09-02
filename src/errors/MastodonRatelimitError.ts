import { MastodonError } from '@/errors/MastodonError';

export class MastodonRatelimitError extends MastodonError {
  constructor (message: string) {
    super('MastodonRatelimitError', message);
  }
}
