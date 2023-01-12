import { SemVer } from 'semver';

import type { MastoConfigProps } from './config';
import { MastoConfig } from './config';
import { HttpNativeImpl } from './http';
import type { Logger } from './logger';
import { LoggerConsoleImpl } from './logger';
import type { v1, v2 } from './mastodon';
import { Client } from './mastodon';
import { InstanceRepository as V1InstanceRepository } from './mastodon/v1/repositories';
import { InstanceRepository as V2InstanceRepository } from './mastodon/v2/repositories';
import { SerializerNativeImpl } from './serializers';
import { WsNativeImpl } from './ws';

export type RequestParams = Pick<
  MastoConfigProps,
  | 'url'
  | 'logLevel'
  | 'timeout'
  | 'defaultRequestInit'
  | 'disableDeprecatedWarning'
>;

type HttpContext = {
  serializer: SerializerNativeImpl;
  config: MastoConfig;
  logger: Logger;
  http: HttpNativeImpl;
};

const buildHttpContext = (params: CreateClientParams): HttpContext => {
  const props = {
    ...params,
    version:
      params.version == undefined
        ? undefined
        : new SemVer(params.version, true),
  };

  const serializer = new SerializerNativeImpl();
  const config = new MastoConfig(props, serializer);
  const logger = new LoggerConsoleImpl(config.getLogLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  return { serializer, config, logger, http };
};

export const fetchV1Instance = (
  params: RequestParams,
): Promise<v1.Instance> => {
  const { http, config } = buildHttpContext(params);
  return new V1InstanceRepository(http, config).fetch();
};

export const fetchV2Instance = (
  params: RequestParams,
): Promise<v2.Instance> => {
  const { http, config } = buildHttpContext(params);
  return new V2InstanceRepository(http, config).fetch();
};

export type CreateClientParams = Omit<MastoConfigProps, 'version'> & {
  readonly version?: string;
};

export const createClient = (params: CreateClientParams): Client => {
  const { serializer, config, logger, http } = buildHttpContext(params);
  const ws = new WsNativeImpl(config, serializer);

  logger.debug('Masto.js initialised', config);
  return new Client(http, ws, config);
};

export type LoginParams = Omit<
  CreateClientParams,
  'streamingApiUrl' | 'version'
>;

/**
 * Fetching instance information and create a client
 *
 * Shortcut of `fetchV1Instance` and `createClient`
 */
export const login = async (params: LoginParams): Promise<Client> => {
  const instance = await fetchV1Instance(params);
  return createClient({
    ...params,
    version: instance.version,
    streamingApiUrl: instance.urls.streamingApi,
  });
};
