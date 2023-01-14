/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { mastodon } from '../src';
import { login } from '../src';

const BASE_URL = 'http://127.0.0.1:3000';

const createApp = async (): Promise<mastodon.v1.Application> => {
  const masto = await login({ url: BASE_URL });
  const app = await masto.v1.apps.create({
    clientName: 'Masto.js',
    redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: `read write follow push`,
  });
  return app;
};

const createToken = async (
  app: mastodon.v1.Client,
): Promise<mastodon.v1.Token> => {
  const masto = await login({ url: BASE_URL });
  const token = await masto.oauth.createToken({
    grantType: 'password',
    clientId: app.clientId!,
    clientSecret: app.clientSecret!,
    username: 'admin@localhost:3000',
    password: 'mastodonadmin',
    scope: 'read write follow push',
  });
  return token;
};

export default async (): Promise<void> => {
  const app = await createApp();
  const token = await createToken(app);

  globalThis.admin = await login({
    url: BASE_URL,
    accessToken: token.accessToken,
    logLevel: 'info',
  });
};
