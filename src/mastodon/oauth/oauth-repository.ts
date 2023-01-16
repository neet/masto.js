import type { Http } from '../../http';
import type { Token } from '../v1';

export interface CreateTokenParamsWithPassword {
  readonly grantType: 'password';
  readonly clientId: string;
  readonly clientSecret: string;
  readonly username: string;
  readonly password: string;
  readonly scope?: string;
}

export type CreateTokenParams = CreateTokenParamsWithPassword;

/**
 * @experimental
 */
export class OAuthRepository {
  constructor(private readonly http: Http) {}

  createToken(params: CreateTokenParams): Promise<Token> {
    return this.http.post('/oauth/token', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
