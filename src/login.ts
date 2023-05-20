import { createBuilder } from './builder/builder';
import type { MastoConfigProps } from './config';
import { MastoConfig } from './config';
import { HttpNativeImpl } from './http';
import { LoggerConsoleImpl } from './logger';
import type { OAuthAPIClient, RestAPIClient } from './mastodon';
import { SerializerNativeImpl } from './serializers';
import { WebSocketClient } from './ws';
import { WebSocketConnector } from './ws/web-socket-connector';

export const createClient = (props: MastoConfigProps): RestAPIClient => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoConfig(props, serializer);
  const logger = new LoggerConsoleImpl(config.getLogLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['api']) as RestAPIClient;
  return builder;
};

export const createOAuthClient = (props: MastoConfigProps): OAuthAPIClient => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoConfig(props, serializer);
  const logger = new LoggerConsoleImpl(config.getLogLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['oauth']) as OAuthAPIClient;
  return builder;
};

export function createWebSocketClient(
  props: MastoConfigProps,
): WebSocketClient {
  const serializer = new SerializerNativeImpl();
  const config = new MastoConfig(props, serializer);
  const connector = new WebSocketConnector(
    [
      config.resolveWebsocketPath('/api/v1/streaming').toString(),
      config.createWebsocketProtocols(),
    ],
    new LoggerConsoleImpl(config.getLogLevel()),
  );
  const connections = connector.getConnections();

  return new WebSocketClient(
    connections,
    serializer,
    connector.close.bind(connector),
  );
}
