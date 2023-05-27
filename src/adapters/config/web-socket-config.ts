import { type Serializer, type WebSocketConfig } from '../../interfaces';

export type WebSocketConfigProps = {
  readonly url: string;
  readonly retry?: boolean | number;
  readonly accessToken?: string;
  readonly useInsecureAccessToken?: boolean;
};

export class WebSocketConfigImpl implements WebSocketConfig {
  constructor(
    private readonly props: WebSocketConfigProps,
    private readonly serializer: Serializer,
  ) {}

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
    const url = new URL(path, this.props.url);
    if (this.props.useInsecureAccessToken) {
      params.accessToken = this.props.accessToken;
    }

    url.search = this.serializer.serialize('querystring', params);
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
