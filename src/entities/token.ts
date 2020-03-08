import { Application } from './application';

export interface OAuthClient extends Application {
  clientId: string;
  clientSecret: string;
}

export interface Token {
  /** Access token of the account */
  accessToken: string;
  /** Type of the token */
  tokenType: string;
  /** Scope of the token */
  scope: string;
  /** Created date of the token */
  createdAt: string;
}

/**
 * @deprecated Use Token
 */
export type OAuthToken = Token;
