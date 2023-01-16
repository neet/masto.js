import type { MastoConfig } from '../config';
import type { Http } from '../http';
import type { Logger } from '../logger';
import type { Ws } from '../ws';
import { OAuthRepository } from './oauth/oauth-repository';
import { AggregateRepository as V1AggregateRepository } from './v1';
import { AggregateRepository as V2AggregateRepository } from './v2';

export class Client {
  readonly v1: V1AggregateRepository;
  readonly v2: V2AggregateRepository;
  readonly oauth: OAuthRepository;

  constructor(
    readonly http: Http,
    readonly ws: Ws,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {
    this.v1 = new V1AggregateRepository(http, ws, config, logger);
    this.v2 = new V2AggregateRepository(http, config, logger);
    this.oauth = new OAuthRepository(http);
  }
}
