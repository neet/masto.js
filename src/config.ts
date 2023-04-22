import type { AbortSignal, HeadersInit, RequestInit } from '@mastojs/ponyfills';
import { Headers } from '@mastojs/ponyfills';

import { MastoInvalidArgumentError } from './errors';
import type { LogType } from './logger';
import { LogLevel } from './logger';
import type { Serializer } from './serializers';
import { mergeAbortSignals, mergeHeadersInit, Timeout } from './utils';

const DEFAULT_TIMEOUT_MS = 1000 * 300;

export type MastoConfigProps = {
  readonly url: string;
  readonly streamingApiUrl?: string;
  readonly logLevel?: LogType;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly defaultRequestInit?: Omit<RequestInit, 'body' | 'method'>;
  readonly useInsecureWebSocketToken?: boolean;
};

export class MastoConfig {
  constructor(
    private readonly props: MastoConfigProps,
    private readonly serializer: Serializer,
  ) {}

  createHeader(override: HeadersInit = {}): Headers {
    const headersInit = mergeHeadersInit([
      this.props.defaultRequestInit?.headers ?? {},
      override,
    ]);
    const headers: HeadersInit = new Headers(headersInit);

    if (this.props.accessToken) {
      headers.set('Authorization', `Bearer ${this.props.accessToken}`);
    }

    return new Headers(headers);
  }

  createWebsocketProtocols(protocols = []): string[] {
    if (
      this.props.useInsecureWebSocketToken ||
      this.props.accessToken == undefined
    ) {
      return protocols;
    }

    return [this.props.accessToken, ...protocols];
  }

  resolveHttpPath(
    path: string,
    params?: string | Record<string, unknown>,
  ): URL {
    const url = new URL(path, this.props.url);

    url.search =
      typeof params === 'string'
        ? params
        : this.serializer.serializeQueryString(params);

    return url;
  }

  resolveWebsocketPath(
    path: string,
    params: Record<string, unknown> = {},
  ): string {
    if (this.props.streamingApiUrl == undefined) {
      throw new MastoInvalidArgumentError(
        'You need to specify `streamingApiUrl` to use this feature',
      );
    }

    const url = new URL(this.props.streamingApiUrl.replace(/\/$/, '') + path);
    if (this.props.useInsecureWebSocketToken) {
      params.accessToken = this.props.accessToken;
    }

    url.search = this.serializer.serializeQueryString(params);
    return url.toString();
  }

  createTimeout(): Timeout {
    return new Timeout(this.props.timeout ?? DEFAULT_TIMEOUT_MS);
  }

  createAbortSignal(signal?: AbortSignal | null): [AbortSignal, Timeout] {
    const timeout = this.createTimeout();
    const signals: AbortSignal[] = [timeout.signal];

    if (this.props.defaultRequestInit?.signal) {
      // FIXME: `abort-controller` and `node-fetch` mismatches
      signals.push(this.props.defaultRequestInit.signal as AbortSignal);
    }

    if (signal != undefined) {
      signals.push(signal);
    }

    return [mergeAbortSignals(signals), timeout];
  }

  getLogLevel(): LogLevel {
    return LogLevel.from(this.props.logLevel ?? 'warn');
  }

  shouldWarnDeprecated(): boolean {
    return this.getLogLevel().satisfies('warn');
  }
}
