/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

import type { mastodon } from '../src';
import { createOAuthClient, createRestClient } from '../src';

const readOrCreateApp = async (
  baseCacheDir: string,
  masto: mastodon.RestClient,
): Promise<mastodon.v1.Client> => {
  const appFilePath = path.join(baseCacheDir, 'app.json');

  if (existsSync(appFilePath)) {
    const json = await fs.readFile(appFilePath, 'utf8');
    return JSON.parse(json);
  }

  const app = await masto.v1.apps.create({
    clientName: 'Masto.js',
    redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write follow push admin:read admin:write',
  });

  fs.writeFile(appFilePath, JSON.stringify(app, undefined, 2));
  return app;
};

const readOrCreateAdminToken = async (
  baseCacheDir: string,
  oauth: mastodon.OAuthClient,
  app: mastodon.v1.Client,
): Promise<mastodon.v1.Token> => {
  const tokenFilePath = path.join(baseCacheDir, 'admin_token.json');

  if (existsSync(tokenFilePath)) {
    const json = await fs.readFile(tokenFilePath, 'utf8');
    return JSON.parse(json);
  }

  const token = await oauth.token.create({
    grantType: 'password',
    clientId: app.clientId!,
    clientSecret: app.clientSecret!,
    username: 'admin@localhost:3000',
    password: 'mastodonadmin',
    scope: 'read write follow push admin:read admin:write',
  });

  fs.writeFile(tokenFilePath, JSON.stringify(token, undefined, 2));
  return token;
};

const initTokens = async (baseCacheDir: string) => {
  const tokensFilePath = path.join(baseCacheDir, 'tokens.json');

  if (existsSync(tokensFilePath)) {
    return;
  }

  await fs.writeFile(path.join(baseCacheDir, 'tokens.json'), '[]', 'utf8');
};

export default async function main(): Promise<void> {
  const baseCacheDir = path.join(__dirname, '../node_modules/.cache/masto');
  if (!existsSync(baseCacheDir)) {
    await fs.mkdir(baseCacheDir, { recursive: true });
  }

  const masto = createRestClient({ url: 'http://localhost:3000' });
  const oauth = createOAuthClient({ url: 'http://localhost:3000' });

  const app = await readOrCreateApp(baseCacheDir, masto);
  await readOrCreateAdminToken(baseCacheDir, oauth, app);
  await initTokens(baseCacheDir);
}
