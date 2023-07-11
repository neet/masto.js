/* eslint-disable unicorn/prefer-module */
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import NodeEnvironment from "jest-environment-node";

import { createOAuthClient, createRestClient, type mastodon } from "../src";
import { TokenPoolFsImpl } from "./pools";
import { TokenFactoryDocker } from "./pools/token-factory-docker";
import { TokenRepositoryFs } from "./pools/token-repository-fs";
import { createTootctl } from "./tootctl";

class CustomEnvironment extends NodeEnvironment {
  override async setup(): Promise<void> {
    await super.setup();
    const misc = await this.createGlobals();
    this.global.__misc__ = misc;
  }

  private async createGlobals(): Promise<typeof globalThis.__misc__> {
    const url = "http://localhost:3000";
    const instance = await createRestClient({ url }).v1.instance.fetch();

    const baseCacheDir = path.join(__dirname, "../node_modules/.cache/masto");
    if (!existsSync(baseCacheDir)) {
      throw new Error("Cache directory does not exist");
    }

    const adminToken = await this.readAdminToken(baseCacheDir);
    const repository = new TokenRepositoryFs(
      path.join(baseCacheDir, "tokens.json"),
    );
    const container = process.env.MASTODON_CONTAINER ?? "mastodon";
    const tootctl = createTootctl({ container });
    const oauth = createOAuthClient({ url });
    const app = await this.readApp(baseCacheDir);
    const factory = new TokenFactoryDocker(tootctl, oauth, app);
    const tokenPool = new TokenPoolFsImpl(repository, factory);

    return {
      url,
      app,
      instance,
      tokens: tokenPool,
      adminToken,
    };
  }

  private readApp = async (
    baseCacheDir: string,
  ): Promise<mastodon.v1.Client> => {
    const appFilePath = path.join(baseCacheDir, "app.json");

    if (!existsSync(appFilePath)) {
      throw new Error("App file does not exist");
    }

    const json = await fs.readFile(appFilePath, "utf8");
    return JSON.parse(json);
  };

  private readAdminToken = async (
    baseCacheDir: string,
  ): Promise<mastodon.v1.Token> => {
    const tokenFilePath = path.join(baseCacheDir, "admin_token.json");

    if (!existsSync(tokenFilePath)) {
      throw new Error("Admin token does not exist");
    }

    const json = await fs.readFile(tokenFilePath, "utf8");
    return JSON.parse(json);
  };
}

export default CustomEnvironment;
