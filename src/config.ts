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
  readonly url: string;
  readonly accessToken?: string;
  readonly timeout?: number;
  readonly headers?: { [key: string]: string };
  readonly proxy?: MastoProxyConfig;
}
