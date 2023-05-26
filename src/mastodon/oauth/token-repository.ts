import type { HttpMetaParams } from '../../http';
import type { Token } from '../entities/v1';

export interface CreateTokenParamsWithPassword {
  readonly grantType: 'password';
  readonly clientId: string;
  readonly clientSecret: string;
  readonly username: string;
  readonly password: string;
  readonly scope?: string;
}

export type CreateTokenParams = CreateTokenParamsWithPassword;

export interface TokenRepository {
  create(
    params: CreateTokenParams,
    meta?: HttpMetaParams<'multipart-form'>,
  ): Promise<Token>;
}
