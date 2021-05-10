import { Http } from '../http';

export interface CreateConfirmationParams {
  readonly email?: string;
}

export class EmailRepository {
  constructor(private readonly http: Http, readonly version: string) {}

  createConfirmation(params?: CreateConfirmationParams): Promise<void> {
    return this.http.post('/api/v1/email/confirmations', params);
  }
}
