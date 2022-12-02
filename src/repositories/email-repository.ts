import type { MastoConfig } from '../config';
import type { Http } from '../http';

export interface CreateConfirmationParams {
  readonly email?: string;
}

export class EmailRepository {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  createConfirmation(params?: CreateConfirmationParams): Promise<void> {
    return this.http.post('/api/v1/email/confirmations', params);
  }
}
