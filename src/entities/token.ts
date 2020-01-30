import { Application } from './application';

export interface OAuthClient extends Application {
  client_id: string;
  client_secret: string;
}

export interface Token {
  /** Access token of the account */
  access_token: string;
  /** Type of the token */
  token_type: string;
  /** Scope of the token */
  scope: string;
  /** Created date of the token */
  created_at: string;
}

/**
 * @deprecated Use Token
 */
export type OAuthToken = Token;
