import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import { Redis } from "ioredis";
import type { Environment } from "vitest/environments";

import {
  createOAuthAPIClient,
  createRestAPIClient,
  type mastodon,
} from "../src/index.js";
import {
  createTootctl,
  TokenFactoryDocker,
  TokenPoolRedis,
} from "./services/index.js";

let redis!: Redis;

export default <Environment>{
  name: "mastodon",
  transformMode: "web",
  async setup() {
    redis = new Redis();
    globalThis.__misc__ = await createGlobals();

    return {
      teardown() {
        redis.disconnect();
      },
    };
  },
};

async function createGlobals(): Promise<typeof globalThis.__misc__> {
  const url = "http://localhost:3000";
  const instance = await createRestAPIClient({ url }).v1.instance.fetch();

  const baseCacheDir = path.join(
    import.meta.dirname,
    "../node_modules/.cache/masto",
  );
  if (!existsSync(baseCacheDir)) {
    throw new Error("Cache directory does not exist");
  }

  const adminToken = await readAdminToken(baseCacheDir);
  const container = process.env.MASTODON_CONTAINER ?? "mastodon";
  const tootctl = createTootctl({ container, compose: true });
  const oauth = createOAuthAPIClient({ url });
  const app = await readApp(baseCacheDir);
  const factory = new TokenFactoryDocker(tootctl, oauth, app);
  const tokenPool = new TokenPoolRedis(redis, factory);

  return {
    url,
    app,
    instance,
    tokens: tokenPool,
    adminToken,
  };
}

async function readApp(baseCacheDir: string): Promise<mastodon.v1.Client> {
  const appFilePath = path.join(baseCacheDir, "app.json");

  if (!existsSync(appFilePath)) {
    throw new Error("App file does not exist");
  }

  const json = await fs.readFile(appFilePath, "utf8");
  return JSON.parse(json);
}

async function readAdminToken(
  baseCacheDir: string,
): Promise<mastodon.v1.Token> {
  const tokenFilePath = path.join(baseCacheDir, "admin_token.json");

  if (!existsSync(tokenFilePath)) {
    throw new Error("Admin token does not exist");
  }

  const json = await fs.readFile(tokenFilePath, "utf8");
  return JSON.parse(json);
}
