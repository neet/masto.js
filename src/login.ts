import type { RequestInit } from '@mastojs/ponyfills';
import { SemVer } from 'semver';

import type { MastoConfigProps } from './config';
import { MastoConfig } from './config';
import { HttpNativeImpl } from './http';
import type { LogType } from './logger';
import { LoggerConsoleImpl } from './logger';
import { Client } from './mastodon';
import { InstanceRepository } from './mastodon/v2/repositories';
import { SerializerNativeImpl } from './serializers';
import type { Writable } from './utils';
import { WsNativeImpl } from './ws';

export type LoginParams = {
  /** URL of your instance */
  readonly url: string;
  /** Log level to print to your console */
  readonly logLevel?: LogType;
  /** Access token of your account */
  readonly accessToken?: string;
  /** Timeout in milliseconds */
  readonly timeout?: number;
  readonly defaultRequestInit?: Omit<RequestInit, 'body' | 'method'>;
  readonly disableVersionCheck?: boolean;
  readonly disableDeprecatedWarning?: boolean;
};

export const login = async (params: LoginParams): Promise<Client> => {
  const draft: Writable<MastoConfigProps> = {
    url: params.url,
    streamingApiUrl: '',
    logLevel: params.logLevel,
    accessToken: params.accessToken,
    timeout: params.timeout,
    defaultRequestInit: params.defaultRequestInit,
    disableVersionCheck: params.disableVersionCheck,
    disableDeprecatedWarning: params.disableDeprecatedWarning,
  };
  const serializer = new SerializerNativeImpl();

  {
    const config = new MastoConfig(draft, serializer);
    const http = new HttpNativeImpl(serializer, config);
    const instance = await new InstanceRepository(http, config).fetch();
    draft.version = new SemVer(instance.version);
    draft.streamingApiUrl = instance.configuration.urls.streamingApi;
  }

  const config = new MastoConfig(draft, serializer);
  const logger = new LoggerConsoleImpl(config.getLogLevel());
  const ws = new WsNativeImpl(config, serializer);
  const http = new HttpNativeImpl(serializer, config, logger);

  logger.debug('Masto.js initialised', config);
  return new Client(http, ws, config);
};
