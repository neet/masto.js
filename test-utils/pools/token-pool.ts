/* eslint-disable @typescript-eslint/no-non-null-assertion */
import crypto from 'node:crypto';

import type { Pool } from 'generic-pool';
import { createPool } from 'generic-pool';

import type { mastodon } from '../../src';
import type { Tootcli } from '../tootcli';
import { createTootcli } from '../tootcli';

export interface TokenPool {
  acquire(): Promise<mastodon.v1.Token>;
  release(token: mastodon.v1.Token): Promise<void>;
}

export class TokenPoolImpl implements TokenPool {
  private readonly tootcli: Tootcli;
  private readonly pool: Pool<mastodon.v1.Token>;

  constructor(
    container: string,
    private readonly client: mastodon.Client,
    private readonly app: mastodon.v1.Client,
  ) {
    this.tootcli = createTootcli({ container });
    this.pool = createPool(
      {
        create: async () => {
          return this.create();
        },
        destroy: async () => {
          return;
        },
      },
      { max: 10 },
    );
  }

  acquire = (): Promise<mastodon.v1.Token> => {
    return this.pool.acquire();
  };

  release = (token: mastodon.v1.Token): Promise<void> => {
    return this.pool.release(token);
  };

  private readonly create = async (): Promise<mastodon.v1.Token> => {
    const username = crypto.randomBytes(8).toString('hex');
    const email = crypto.randomBytes(8).toString('hex') + '@example.com';

    const { password } = await this.tootcli.accounts.create(username, {
      email,
      confirmed: true,
    });

    const token = await this.client.oauth.createToken({
      grantType: 'password',
      clientId: this.app.clientId!,
      clientSecret: this.app.clientSecret!,
      username: email,
      password,
      scope: 'read write follow push admin:read admin:write',
    });

    return token;
  };
}
