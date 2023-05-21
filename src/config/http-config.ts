import type { AbortSignal, HeadersInit, RequestInit } from '@mastojs/ponyfills';
import { Headers } from '@mastojs/ponyfills';

import type { Serializer } from '../serializers';
import { mergeAbortSignals, mergeHeadersInit, Timeout } from '../utils';
import type { MastoLogConfig } from './log-config';

const DEFAULT_TIMEOUT_MS = 1000 * 300;

export interface MastoHttpConfigProps {
  readonly url: string;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly defaultRequestInit?: Omit<RequestInit, 'body' | 'method'>;
}

export class MastoHttpConfig {
  constructor(
    private readonly props: MastoHttpConfigProps,
    private readonly serializer: Serializer,
    readonly log: MastoLogConfig,
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

  resolvePath(path: string, params?: string | Record<string, unknown>): URL {
    const url = new URL(path, this.props.url);

    if (params != undefined) {
      url.search =
        typeof params === 'string'
          ? params
          : this.serializer.serializeQueryString(params);
    }

    return url;
  }

  private createTimeout(): Timeout {
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
}
