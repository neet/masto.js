/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import crypto from 'node:crypto';

import type { Pool } from 'generic-pool';
import { createPool } from 'generic-pool';

import type { mastodon } from '../../src';
import { CacheFs } from '../cache';
import type { Tootctl } from '../tootctl';
import { createTootctl } from '../tootctl';

export interface TokenPool {
  acquire(): Promise<mastodon.v1.Token>;
  release(token: mastodon.v1.Token): Promise<void>;
}

export class TokenPoolImpl implements TokenPool {
  private readonly tootctl: Tootctl;
  private readonly pool: Pool<mastodon.v1.Token>;
  private readonly cache = new CacheFs<mastodon.v1.Token>();
  private readonly tokens = this.cache.getAll();

  constructor(
    container: string,
    private readonly oauth: mastodon.OAuthClient,
    private readonly app: mastodon.v1.Client,
  ) {
    this.tootctl = createTootctl({ container });
    this.pool = createPool(
      {
        create: async () => {
          const token = this.tokens.shift();
          if (token != undefined) {
            return token;
          }
          return this.create();
        },
        destroy: async (token) => {
          this.tokens.push(token);
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

    const { password } = await this.tootctl.accounts.create(username, {
      email,
      confirmed: true,
    });

    const token = await this.oauth.token.create({
      grantType: 'password',
      clientId: this.app.clientId!,
      clientSecret: this.app.clientSecret!,
      username: email,
      password,
      scope: 'read write follow push admin:read admin:write',
    });

    this.cache.set(token);

    return token;
  };
}
