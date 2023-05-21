import type { Serializer } from '../serializers';
import type { MastoLogConfig } from './log-config';

export type MastoWebSocketConfigProps = {
  readonly url: string;
  readonly accessToken?: string;
  readonly useInsecureAccessToken?: boolean;
};

export class MastoWebSocketConfig {
  constructor(
    private readonly props: MastoWebSocketConfigProps,
    private readonly serializer: Serializer,
    readonly log: MastoLogConfig,
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

    url.search = this.serializer.serializeQueryString(params);
    return url;
  }
}
