import 'isomorphic-form-data';

import { MastoClient } from '../clients';
import { MastoConfig } from '../config';
import { HttpAxiosImpl } from '../http';
import { InstanceRepository } from '../repositories';
import { SerializerNodejsImpl } from '../serializers';
import { WsNodejsImpl } from '../ws';

export const login = async (config: MastoConfig): Promise<MastoClient> => {
  const version = 'yay yay';

  const serializer = new SerializerNodejsImpl();
  const http = new HttpAxiosImpl(config, serializer);
  const instance = await new InstanceRepository(http, '1.0.0', config).fetch();
  const ws = new WsNodejsImpl(
    instance.urls.streamingApi,
    version,
    config,
    serializer,
  );

  return new MastoClient(http, ws, version, config);
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
export * from '../repository';
