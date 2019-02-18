import { MastodonError } from './MastodonError';

export class MastodonNotFoundError extends MastodonError {
  constructor(message: string) {
    super('MastodonNotFoundError', message);
  }
}
