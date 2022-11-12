import { MastoClient } from '../clients';
import { MastoConfig } from '../config';
import { HttpNativeImpl } from '../http';
import { InstanceRepository } from '../repositories';
import { SerializerNativeImpl } from '../serializers';
import { WsNodejsImpl } from '../ws';

export const login = async (config: MastoConfig): Promise<MastoClient> => {
  if (!config.disableExperimentalWarning) {
    // eslint-disable-next-line no-console
    console.warn(
      'You are using experimental Fetch API. Please consider using Axios instead until it is fully supported.',
    );
  }

  const serializer = new SerializerNativeImpl();
  const http = new HttpNativeImpl(config, serializer);
  const instance = await new InstanceRepository(http, '1.0.0', config).fetch();
  const ws = new WsNodejsImpl(
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
