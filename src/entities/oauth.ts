import { Application } from '../entities/application';

export interface OAuthClient extends Application {
  client_id: string;
  client_secret: string;
}

export interface OAuthToken {
  /** Access token of the account */
  access_token: string;
  /** Type of the token */
  token_type: string;
  /** Scope of the token */
  scope: string;
  /** Created date of the token */
  created_at: string;
}
