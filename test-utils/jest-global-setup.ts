/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import crypto from 'node:crypto';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

import type { Config } from '@jest/types';

import type { mastodon } from '../src';
import { createOAuthClient, createRestClient } from '../src';
import type { TokenRepository } from './pools/token-repository';
import { TokenRepositoryFs } from './pools/token-repository-fs';
import type { Tootctl } from './tootctl';
import { createTootctl } from './tootctl';

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

const createToken = async (
  tootctl: Tootctl,
  app: mastodon.v1.Client,
  oauth: mastodon.OAuthClient,
) => {
  const username = crypto.randomBytes(8).toString('hex');
  const email = crypto.randomBytes(8).toString('hex') + '@example.com';

  const { password } = await tootctl.accounts.create(username, {
    email,
    confirmed: true,
  });

  if (app.clientId == undefined || app.clientSecret == undefined) {
    throw new Error('App not created');
  }

  const token = await oauth.token.create({
    grantType: 'password',
    clientId: app.clientId,
    clientSecret: app.clientSecret,
    username: email,
    password,
    scope: 'read write follow push admin:read admin:write',
  });

  return token;
};

const replenishTokens = async (
  maxTokens: number,
  tootctl: Tootctl,
  app: mastodon.v1.Client,
  oauth: mastodon.OAuthClient,
  repository: TokenRepository,
) => {
  const tokens = await repository.getAll();

  if (tokens.length >= maxTokens) {
    return;
  }

  const maxConcurrency = 5;

  const tasks = Array.from({ length: maxTokens - tokens.length }, (_, i) => {
    return async () => {
      console.log(`Replenishing tokens... ${i + 1}/${maxTokens}`);
      const token = await createToken(tootctl, app, oauth);
      await repository.add({ token, inUse: false });
    };
  });

  while (tasks.length > 0) {
    await Promise.all(tasks.splice(0, maxConcurrency).map((f) => f()));
  }
};

export default async function main(config: Config.GlobalConfig): Promise<void> {
  const baseCacheDir = path.join(__dirname, '../node_modules/.cache/masto');
  if (!existsSync(baseCacheDir)) {
    await fs.mkdir(baseCacheDir, { recursive: true });
  }

  const masto = createRestClient({ url: 'http://localhost:3000' });
  const oauth = createOAuthClient({ url: 'http://localhost:3000' });
  const container = process.env.MASTODON_CONTAINER ?? 'mastodon';
  const repository = new TokenRepositoryFs(
    path.join(baseCacheDir, 'tokens.json'),
  );
  const tootctl = createTootctl({ container });
  const app = await readOrCreateApp(baseCacheDir, masto);
  await replenishTokens(config.maxWorkers, tootctl, app, oauth, repository);
  await readOrCreateAdminToken(baseCacheDir, oauth, app);
}
