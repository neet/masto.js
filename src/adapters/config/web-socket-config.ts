import { type Serializer, type WebSocketConfig } from "../../interfaces";
import { MastoInvalidArgumentError } from "../errors";
import { isPositiveInteger, isURL } from "./validators";

export interface WebSocketConfigProps {
  readonly streamingApiUrl: string;
  readonly retry?: boolean | number;
  readonly accessToken?: string;
  readonly useInsecureAccessToken?: boolean;
}

export class WebSocketConfigImpl implements WebSocketConfig {
  constructor(
    private readonly props: WebSocketConfigProps,
    private readonly serializer: Serializer,
  ) {
    if (!isURL(this.props.streamingApiUrl)) {
      throw new MastoInvalidArgumentError(`streamingApiUrl is required`);
    }
    if (
      typeof this.props.retry === "number" &&
      !isPositiveInteger(this.props.retry)
    ) {
      throw new MastoInvalidArgumentError("retry must be a positive integer");
    }
  }

  getProtocols(protocols: readonly string[] = []): string[] {
    if (
      this.props.useInsecureAccessToken ||
      this.props.accessToken == undefined
    ) {
      return [...protocols];
    }

    return [this.props.accessToken, ...protocols];
  }

  resolvePath(path: string, params: Record<string, unknown> = {}): URL {
    const url = new URL(path, this.props.streamingApiUrl);
    if (this.props.useInsecureAccessToken) {
      params.accessToken = this.props.accessToken;
    }

    url.search = this.serializer.serialize("querystring", params);
    return url;
  }

  getMaxAttempts(): number {
    if (this.props.retry === true || this.props.retry == undefined) {
      return Number.POSITIVE_INFINITY;
    }

    if (this.props.retry === false) {
      return 1;
    }

    return this.props.retry;
  }
}
