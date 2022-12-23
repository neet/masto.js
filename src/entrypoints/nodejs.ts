import { SemVer } from 'semver';

import { MastoClient } from '../api';
import { InstanceRepository } from '../api/v1/repositories';
import type { MastoConfigProps } from '../config';
import { MastoConfig } from '../config';
import { HttpNativeImpl } from '../http';
import type { LogType } from '../logger';
import { LoggerConsoleImpl } from '../logger';
import { SerializerNativeImpl } from '../serializers';
import type { Writable } from '../utils/writable';
import { WsNativeImpl } from '../ws';

export type LoginParams = Omit<
  MastoConfigProps,
  'streamingApiUrl' | 'version' | 'logLevel'
> & { logLevel?: LogType };

export const login = async (params: LoginParams): Promise<MastoClient> => {
  const draft: Writable<MastoConfigProps> = {
    streamingApiUrl: '',
    ...params,
  };
  const serializer = new SerializerNativeImpl();

  {
    const config = new MastoConfig(draft, serializer);
    const http = new HttpNativeImpl(serializer, config);
    const instance = await new InstanceRepository(http, config).fetch();
    draft.version = new SemVer(instance.version);
    draft.streamingApiUrl = instance.urls.streamingApi;
  }

  const config = new MastoConfig(draft, serializer);
  const logger = new LoggerConsoleImpl(config.getLogLevel());
  const ws = new WsNativeImpl(config, serializer);
  const http = new HttpNativeImpl(serializer, config, logger);

  logger.debug('Masto.js initialised', config);

  return new MastoClient(http, ws, config);
};

export * from '../decorators';
export * from '../api';
export * from '../errors';
export * from '../http';
export * from '../serializers';
export * from '../ws';
export * from '../config';
export * from '../paginator';
