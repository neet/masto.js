import { MastodonError } from './MastodonError';

export class MastodonUnauthorizedError extends MastodonError {
  constructor(message: string) {
    super('MastodonUnauthorizedError', message);
  }
}
