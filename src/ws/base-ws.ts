import semver from 'semver';

import { MastoConfig } from '../config';
import { Serializer } from '../serializers';
import { railsQueryString } from '../serializers/rails-querystring';
import { Ws, WsEvents } from './ws';

export abstract class BaseWs implements Ws {
  protected abstract readonly baseUrl: string;
  protected abstract readonly config: MastoConfig;
  protected abstract readonly version: string;
  protected abstract readonly serializer: Serializer;

  abstract stream(path: string, params: unknown): Promise<WsEvents>;

  private supportsSecureToken() {
    if (this.config.disableVersionCheck) {
      return false;
    }

    // Since v2.8.4, it is supported to pass access token with`Sec-Websocket-Protocol`
    // https://github.com/tootsuite/mastodon/pull/10818
    return (
      this.version &&
      this.baseUrl.startsWith('wss:') &&
      semver.gte(this.version, '2.8.4', { loose: true })
    );
  }

  resolveUrl(path: string, params: Record<string, unknown> = {}) {
    if (!this.supportsSecureToken()) {
      params.accessToken = this.config.accessToken;
    }
    const query = railsQueryString.stringify(params);

    return this.baseUrl + path + (query !== '' ? `?${query}` : '');
  }

  createProtocols(protocols = []) {
    return this.supportsSecureToken() && this.config.accessToken != null
      ? [this.config.accessToken, ...protocols]
      : [];
  }
}
