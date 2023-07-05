import { type HttpConfig, type Serializer } from '../../interfaces';
import { mergeAbortSignals } from './merge-abort-signals';
import { mergeHeadersInit } from './merge-headers-init';

const DEFAULT_TIMEOUT_MS = 1000 * 300;

export interface MastoHttpConfigProps {
  readonly url: string;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly requestInit?: Omit<RequestInit, 'body' | 'method'>;
}

export class HttpConfigImpl implements HttpConfig {
  constructor(
    private readonly props: MastoHttpConfigProps,
    private readonly serializer: Serializer,
  ) {}

  mergeRequestInitWithDefaults(override: RequestInit = {}): RequestInit {
    const requestInit: RequestInit = { ...this.props.requestInit };

    // Copy
    {
      const { headers, signal, ...rest } = override;
      Object.assign(requestInit, rest);
      requestInit.headers = this.mergeHeadersWithDefaults(headers);
      requestInit.signal = this.mergeAbortSignalWithDefaults(signal);
    }

    return requestInit;
  }

  resolvePath(path: string, params?: string | Record<string, unknown>): URL {
    const url = new URL(path, this.props.url);

    if (typeof params === 'string') {
      url.search = params;
    } else if (params != undefined) {
      url.search = this.serializer.serialize('querystring', params);
    }

    return url;
  }

  private createTimeout(): AbortSignal {
    return AbortSignal.timeout(this.props.timeout ?? DEFAULT_TIMEOUT_MS);
  }

  private mergeHeadersWithDefaults(override: HeadersInit = {}): Headers {
    const headersInit = mergeHeadersInit([
      this.props.requestInit?.headers ?? {},
      override,
    ]);
    const headers: HeadersInit = new Headers(headersInit);

    if (this.props.accessToken) {
      headers.set('Authorization', `Bearer ${this.props.accessToken}`);
    }

    return new Headers(headers);
  }

  private mergeAbortSignalWithDefaults(
    signal?: AbortSignal | null,
  ): AbortSignal {
    const timeout = this.createTimeout();
    const signals: AbortSignal[] = [timeout];

    if (this.props.requestInit?.signal) {
      signals.push(this.props.requestInit.signal);
    }

    if (signal != undefined) {
      signals.push(signal);
    }

    return mergeAbortSignals(signals);
  }
}
