import { createBuilder } from './builder';
import type {
  MastoHttpConfigProps,
  MastoLogConfigProps,
  MastoWebSocketConfigProps,
} from './config';
import {
  MastoHttpConfig,
  MastoLogConfig,
  MastoWebSocketConfig,
} from './config';
import { HttpNativeImpl } from './http';
import { LoggerConsoleImpl } from './logger';
import type { mastodon } from './mastodon';
import { SerializerNativeImpl } from './serializers';
import { WebSocketClientNativeImpl, WebSocketConnector } from './ws';

export const createRestClient = (
  props: MastoHttpConfigProps & MastoLogConfigProps,
): mastodon.RestClient => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoHttpConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const logger = new LoggerConsoleImpl(config.log.getLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['api']) as mastodon.RestClient;
  return builder;
};

export const createOAuthClient = (
  props: MastoHttpConfigProps & MastoLogConfigProps,
): mastodon.OAuthClient => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoHttpConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const logger = new LoggerConsoleImpl(config.log.getLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['oauth']) as mastodon.OAuthClient;
  return builder;
};

export function createWebSocketClient(
  props: MastoWebSocketConfigProps & MastoLogConfigProps,
): mastodon.WebSocketClient {
  const serializer = new SerializerNativeImpl();
  const config = new MastoWebSocketConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const connector = new WebSocketConnector(
    [config.resolvePath('/api/v1/streaming').toString(), config.getProtocols()],
    new LoggerConsoleImpl(config.log.getLevel()),
  );
  const connections = connector.getConnections();

  return new WebSocketClientNativeImpl(
    connections,
    serializer,
    connector.close.bind(connector),
  );
}
