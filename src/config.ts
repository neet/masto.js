import type { URL } from 'node:url';

export interface MastoProxyConfig {
  readonly host: string;
  readonly port: number;
  readonly auth?: {
    readonly username: string;
    readonly password: string;
  };
  readonly protocol?: string;
}

/**
 * Abstraction of AxiosRequestConfig
 */
export interface MastoConfig {
  readonly url: URL;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly headers?: HeadersInit;
  readonly proxy?: MastoProxyConfig;
  readonly disableVersionCheck?: boolean;
  readonly disableDeprecatedWarning?: boolean;
  readonly disableExperimentalWarning?: boolean;
}
