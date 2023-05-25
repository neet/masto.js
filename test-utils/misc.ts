/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './jest-polyfills';

import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

import type { mastodon } from '../src';
import { createRestClient } from '../src';
import { TokenPoolFsImpl } from './pools';
import { TokenRepositoryFs } from './pools/token-repository-fs';

const readAdminToken = async (
  baseCacheDir: string,
): Promise<mastodon.v1.Token> => {
  const tokenFilePath = path.join(baseCacheDir, 'admin_token.json');

  if (!existsSync(tokenFilePath)) {
    throw new Error('Admin token does not exist');
  }

  const json = await fs.readFile(tokenFilePath, 'utf8');
  return JSON.parse(json);
};

type Misc = {
  readonly url: string;
  readonly instance: mastodon.v1.Instance;
  readonly tokens: TokenPoolFsImpl;
  readonly adminToken: mastodon.v1.Token;
};

export const createMisc = async (): Promise<Misc> => {
  const url = 'http://localhost:3000';
  const instance = await createRestClient({ url }).v1.instance.fetch();

  const baseCacheDir = path.join(__dirname, '../node_modules/.cache/masto');
  if (!existsSync(baseCacheDir)) {
    throw new Error('Cache directory does not exist');
  }

  const adminToken = await readAdminToken(baseCacheDir);
  const repository = new TokenRepositoryFs(
    path.join(baseCacheDir, 'tokens.json'),
  );
  const tokenPool = new TokenPoolFsImpl(repository);

  return {
    url,
    instance,
    tokens: tokenPool,
    adminToken,
  };
};
