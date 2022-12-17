import type { MastoConfig } from '../config';
import type { Http } from '../http';
import type { Ws } from '../ws';
import { V1, V2 } from '.';

export class MastoClient {
  readonly v1: V1.AggregateRepository;
  readonly v2: V2.AggregateRepository;

  constructor(
    readonly http: Http,
    readonly ws: Ws,
    readonly config: MastoConfig,
  ) {
    this.v1 = new V1.AggregateRepository(http, ws, config);
    this.v2 = new V2.AggregateRepository(http, config);
  }
}
