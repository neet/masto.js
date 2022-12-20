import { Headers } from '@mastojs/isomorphic-web';
import type { SemVer } from 'semver';
import semver from 'semver';

import type { Serializer } from './serializers';
import { mergeHeadersInit } from './utils';

export type MastoConfigProps = {
  readonly url: string;
  readonly streamingApiUrl: string;
  readonly version: SemVer;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly requestInit?: Omit<RequestInit, 'body' | 'method'>;
  readonly disableVersionCheck?: boolean;
  readonly disableDeprecatedWarning?: boolean;
  readonly disableExperimentalWarning?: boolean;
};

export class MastoConfig {
  constructor(
    private readonly props: MastoConfigProps,
    private readonly serializer: Serializer,
  ) {}

  get timeout(): number {
    return this.props.timeout ?? 3000;
  }

  get version(): SemVer {
    return this.props.version;
  }

  createHeader(override: HeadersInit = {}): Headers {
    const headersInit = mergeHeadersInit([
      this.props.requestInit?.headers ?? {},
      { 'Content-Type': 'application/json' },
      override,
    ]);
    const headers: HeadersInit = new Headers(headersInit);

    if (this.props.accessToken) {
      headers.set('Authorization', `Bearer ${this.props.accessToken}`);
    }

    return new Headers(headers);
  }

  createWebsocketProtocols(protocols = []): string[] {
    return this.supportsSecureToken() && this.props.accessToken != undefined
      ? [this.props.accessToken, ...protocols]
      : protocols;
  }

  resolveHttpPath(path: string, params: unknown = {}): URL {
    const url = new URL(this.props.url.replace(/\/$/, '') + path);
    url.search = this.serializer.serializeQueryString(params);
    return url;
  }

  resolveWebsocketPath(
    path: string,
    params: Record<string, unknown> = {},
  ): string {
    const url = new URL(this.props.streamingApiUrl.replace(/\/$/, '') + path);
    if (!this.supportsSecureToken()) {
      params.accessToken = this.props.accessToken;
    }

    url.search = this.serializer.serializeQueryString(params);
    return url.toString();
  }

  createTimeoutController(): AbortController | void {
    if (this.props.timeout == undefined) {
      return;
    }
    // FIXME
    if (globalThis.AbortController === undefined) {
      return;
    }

    const abortController = new AbortController();
    setTimeout(() => {
      abortController.abort();
    }, this.props.timeout);
    return abortController;
  }

  warn(message: string): void {
    if (
      process.env.NODE_ENV !== 'production' ||
      !this.props?.disableDeprecatedWarning
    ) {
      // eslint-disable-next-line no-console
      console.warn(message);
    }
  }

  shouldCheckVersion(): boolean {
    if (this.props.disableVersionCheck) {
      return false;
    }
    return true;
  }

  private supportsSecureToken() {
    if (!this.shouldCheckVersion()) {
      return true;
    }

    // Since v2.8.4, it is supported to pass access token with`Sec-Websocket-Protocol`
    // https://github.com/tootsuite/mastodon/pull/10818
    return (
      this.props.version &&
      this.props.streamingApiUrl.startsWith('wss:') &&
      semver.gte(this.props.version, '2.8.4', { loose: true })
    );
  }
}
