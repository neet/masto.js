/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './jest-polyfills';

import { createOAuthClient, createRestClient } from '../src';
import { TokenPoolImpl } from './pools';

export default async (): Promise<void> => {
  const url = 'http://localhost:3000';
  const instance = await createRestClient({ url }).v1.instance.fetch();
  const masto = createRestClient({ url });
  const oauth = createOAuthClient({ url });

  const app = await masto.v1.apps.create({
    clientName: 'Masto.js',
    redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write follow push admin:read admin:write',
  });

  const container = process.env.MASTODON_CONTAINER ?? 'mastodon';
  const tokenPool = new TokenPoolImpl(container, oauth, app);

  const adminToken = await oauth.token.create({
    grantType: 'password',
    clientId: app.clientId!,
    clientSecret: app.clientSecret!,
    username: 'admin@localhost:3000',
    password: 'mastodonadmin',
    scope: 'read write follow push admin:read admin:write',
  });

  globalThis.__misc__ = {
    url,
    instance,
    tokens: tokenPool,
    adminToken,
  };
};
