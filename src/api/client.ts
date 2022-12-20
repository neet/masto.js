import type { MastoConfig } from '../config';
import type { Http } from '../http';
import type { Ws } from '../ws';
import { AggregateRepository as V1AggregateRepository } from './v1';
import { AggregateRepository as V2AggregateRepository } from './v2';

export class MastoClient {
  readonly v1: V1AggregateRepository;
  readonly v2: V2AggregateRepository;

  constructor(
    readonly http: Http,
    readonly ws: Ws,
    readonly config: MastoConfig,
  ) {
    this.v1 = new V1AggregateRepository(http, ws, config);
    this.v2 = new V2AggregateRepository(http, config);
  }
}
