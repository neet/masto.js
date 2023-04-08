import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';

export interface CreateConfirmationParams {
  /** If provided, updates the unconfirmed user’s email before resending the confirmation email. */
  readonly email?: string;
}

export class EmailRepository {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Resend confirmation email
   * @param params Form data parameters
   * @returns Empty object
   * @see https://docs.joinmastodon.org/methods/emails/#confirmation
   */
  createConfirmation(params?: CreateConfirmationParams): Promise<void> {
    return this.http.post('/api/v1/emails/confirmations', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
