import type { TokenRepository } from './token-repository';

export interface Client {
  readonly token: TokenRepository;
}
