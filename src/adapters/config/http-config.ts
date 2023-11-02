import { type HttpConfig, type Serializer } from "../../interfaces";
import { MastoInvalidArgumentError } from "../errors";
import { mergeAbortSignals } from "./merge-abort-signals";
import { mergeHeadersInit } from "./merge-headers-init";
import { isPositiveInteger, isURL } from "./validators";

export interface MastoHttpConfigProps {
  /**
   * REST API URL for your Mastodon instance.
   */
  readonly url: string;

  /**
   * Access token for the REST API.
   *
   * Please refer to the [quickstart](https://github.com/neet/masto.js?tab=readme-ov-file#quick-start) for how to get an access token.
   */
  readonly accessToken?: string;

  /**
   * Timeout milliseconds for the fetch request.
   *
   * Defaults to browser's default timeout.
   */
  readonly timeout?: number;

  /**
   * Additional options for the `fetch` function.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   */
  readonly requestInit?: Omit<RequestInit, "body" | "method">;
}

export class HttpConfigImpl implements HttpConfig {
  constructor(
    private readonly props: MastoHttpConfigProps,
    private readonly serializer: Serializer,
  ) {
    if (!isURL(this.props.url)) {
      throw new MastoInvalidArgumentError("url is required");
    }
    if (
      this.props.timeout != undefined &&
      !isPositiveInteger(this.props.timeout)
    ) {
      throw new MastoInvalidArgumentError(
        "timeout must be greater than or equal to zero",
      );
    }
  }

  mergeRequestInitWithDefaults(override: RequestInit = {}): RequestInit {
    const requestInit: RequestInit = { ...this.props.requestInit };

    // Merge
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

    if (typeof params === "string") {
      url.search = params;
    } else if (params != undefined) {
      url.search = this.serializer.serialize("querystring", params);
    }

    return url;
  }

  private mergeHeadersWithDefaults(override: HeadersInit = {}): Headers {
    const headersInit = mergeHeadersInit([
      this.props.requestInit?.headers ?? {},
      override,
    ]);
    const headers: HeadersInit = new Headers(headersInit);

    if (this.props.accessToken) {
      headers.set("Authorization", `Bearer ${this.props.accessToken}`);
    }

    return new Headers(headers);
  }

  private mergeAbortSignalWithDefaults(
    signal?: AbortSignal | null,
  ): AbortSignal {
    const signals: AbortSignal[] = [];

    if (this.props.timeout != undefined) {
      signals.push(AbortSignal.timeout(this.props.timeout));
    }

    if (this.props.requestInit?.signal) {
      signals.push(this.props.requestInit.signal);
    }

    if (signal != undefined) {
      signals.push(signal);
    }

    return signals.length === 1 ? signals[0] : mergeAbortSignals(signals);
  }
}
