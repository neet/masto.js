import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import type { Repository } from '../../repository';
import type { Client } from '../entities';

export interface CreateAppParams {
  /** A name of your application */
  readonly clientName: string;
  /**
   * Where the user should be redirected after authorization.
   * To display the authorization code to the user instead of redirecting to a web page,
   * use `urn:ietf:wg:oauth:2.0:oob` in this parameter.
   */
  readonly redirectUris: string;
  /** Space separated list of scopes. If none is provided, defaults to `read`. */
  readonly scopes: string;
  /** URL to the homepage of your app */
  readonly website?: string | null;
}

export class AppRepository implements Repository<Client, CreateAppParams> {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param params Parameters
   * @return Returns App with `client_id` and `client_secret`
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  create(params: CreateAppParams): Promise<Client> {
    return this.http.post<Client>(`/api/v1/apps`, params);
  }

  /**
   * Confirm that the app's OAuth2 credentials work.
   * @return Application
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  verifyCredentials(): Promise<Client> {
    return this.http.get<Client>(`/api/v1/apps/verify_credentials`);
  }
}
