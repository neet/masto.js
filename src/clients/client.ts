import { GatewayConstructor } from '../gateway/gateway';

export type LoginParams = Pick<GatewayConstructor, 'uri' | 'accessToken'>;
