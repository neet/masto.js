import type { OAuthRepository } from './oauth/oauth-repository';
import type { Repository as V1Repository } from './v1';
import type { Repository as V2Repository } from './v2';

export interface RestClient {
  readonly v1: V1Repository;
  readonly v2: V2Repository;
}

export interface OAuthClient {
  readonly token: OAuthRepository;
}
