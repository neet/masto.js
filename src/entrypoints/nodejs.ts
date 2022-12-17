import { SemVer } from 'semver';

import { MastoClient } from '../api';
import { InstanceRepository } from '../api/v1/repositories';
import type { MastoConfigProps } from '../config';
import { MastoConfig } from '../config';
import { HttpNativeImpl } from '../http';
import { SerializerNativeImpl } from '../serializers';
import { WsNativeImpl } from '../ws';

export type LoginParams = Omit<MastoConfigProps, 'streamingApiUrl' | 'version'>;

export const login = async (params: LoginParams): Promise<MastoClient> => {
  const configProps = {
    ...params,
    version: new SemVer('1.0.0'),
    streamingApiUrl: '',
  };
  const serializer = new SerializerNativeImpl();

  {
    const tempConfig = new MastoConfig(configProps, serializer);
    const http = new HttpNativeImpl(fetch, tempConfig, serializer);
    const instance = await new InstanceRepository(http, tempConfig).fetch();

    if (configProps.version == undefined) {
      configProps.version = new SemVer(instance.version);
    }
    if (configProps.streamingApiUrl == undefined) {
      configProps.streamingApiUrl = instance.urls.streamingApi;
    }
  }

  const config = new MastoConfig(configProps, serializer);
  const ws = new WsNativeImpl(config, serializer);
  const http = new HttpNativeImpl(fetch, config, serializer);

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
