import { MastoClient } from '../clients';
import { MastoConfig } from '../config';
import { HttpNativeImpl } from '../http/http-native-impl';
import { InstanceRepository } from '../repositories';
import { SerializerNativeImpl } from '../serializers/serializer-native-impl';
import { WsNativeImpl } from '../ws/ws-native-impl';

export const login = async (config: MastoConfig): Promise<MastoClient> => {
  const serializer = new SerializerNativeImpl();
  const http = new HttpNativeImpl(config, serializer);
  const instance = await new InstanceRepository(http, '1.0.0').fetch();
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
// export * from '../http';
export * from '../repositories';
// export * from '../serializers';
// export * from '../ws';
export * from '../clients';
export * from '../config';
export * from '../paginator';
export * from '../repository';
