import { V1, V2 } from '../api';
import type { MastoConfig } from '../config';
import type { Http } from '../http';
import type { Ws } from '../ws';

export class MastoClient {
  readonly v1: V1.Repository;
  readonly v2: V2.Repository;

  constructor(
    readonly http: Http,
    readonly ws: Ws,
    readonly config: MastoConfig,
  ) {
    this.v1 = new V1.Repository(http, ws, config);
    this.v2 = new V2.Repository(http, config);
  }
}
