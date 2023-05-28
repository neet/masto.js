import {
  type AbortSignal,
  Headers,
  type HeadersInit,
  type RequestInit,
} from '@mastojs/ponyfills';

import { type HttpConfig, type Serializer } from '../../interfaces';
import { createTimeoutSignal } from '../../utils';
import { mergeAbortSignals } from './merge-abort-signals';
import { mergeHeadersInit } from './merge-headers-init';

const DEFAULT_TIMEOUT_MS = 1000 * 300;

export interface MastoHttpConfigProps {
  readonly url: string;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly defaultRequestInit?: Omit<RequestInit, 'body' | 'method'>;
}

export class HttpConfigImpl implements HttpConfig {
  constructor(
    private readonly props: MastoHttpConfigProps,
    private readonly serializer: Serializer,
  ) {}

  mergeHeadersWithDefaults(override: HeadersInit = {}): Headers {
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
          : this.serializer.serialize('querystring', params);
    }

    return url;
  }

  mergeAbortSignalWithDefaults(signal?: AbortSignal | null): AbortSignal {
    const timeout = createTimeoutSignal(
      this.props.timeout ?? DEFAULT_TIMEOUT_MS,
    );
    const signals: AbortSignal[] = [timeout];

    if (this.props.defaultRequestInit?.signal) {
      // FIXME: `abort-controller` and `node-fetch` mismatches
      signals.push(this.props.defaultRequestInit.signal as AbortSignal);
    }

    if (signal != undefined) {
      signals.push(signal);
    }

    return mergeAbortSignals(signals);
  }
}
