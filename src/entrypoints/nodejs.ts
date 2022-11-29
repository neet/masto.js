import 'isomorphic-form-data';

import { MastoClient } from '../clients';
import type { MastoConfig } from '../config';
import { HttpAxiosImpl } from '../http';
import { InstanceRepository } from '../repositories';
import { SerializerNativeImpl } from '../serializers';
import { WsNativeImpl } from '../ws';

export const login = async (config: MastoConfig): Promise<MastoClient> => {
  const serializer = new SerializerNativeImpl();
  const http = new HttpAxiosImpl(config, serializer);
  const instance = await new InstanceRepository(http, '1.0.0', config).fetch();
  const ws = new WsNativeImpl(
    instance.urls.streamingApi,
    instance.version,
    config,
    serializer,
  );

  return new MastoClient(http, ws, instance.version, config);
};

export * from '../decorators';
export * from '../entities';
export * from '../errors';
export * from '../http';
export * from '../repositories';
export * from '../serializers';
export * from '../ws';
export * from '../clients';
export * from '../config';
export * from '../paginator';
