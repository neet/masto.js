import crypto from 'node:crypto';

import type { mastodon } from '../../src';
import type { Tootctl } from '../tootctl';
import type { TokenFactory } from './token-factory';

export class TokenFactoryDocker implements TokenFactory {
  constructor(
    private readonly tootctl: Tootctl,
    private readonly oauth: mastodon.oauth.Client,
    private readonly app: mastodon.v1.Client,
  ) {}

  async obtain(): Promise<mastodon.v1.Token> {
    const username = crypto.randomBytes(8).toString('hex');
    const email = crypto.randomBytes(8).toString('hex') + '@example.com';

    // eslint-disable-next-line no-console
    console.log(`Creating user ${username} (${email})`);

    const { password } = await this.tootctl.accounts.create(username, {
      email,
      confirmed: true,
    });

    if (this.app.clientId == undefined || this.app.clientSecret == undefined) {
      throw new Error('App not created');
    }

    const token = await this.oauth.token.create({
      grantType: 'password',
      clientId: this.app.clientId,
      clientSecret: this.app.clientSecret,
      username: email,
      password,
      scope: 'read write follow push admin:read admin:write',
    });

    return token;
  }
}
