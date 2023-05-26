import { HttpNativeImpl } from './adapters/http';
import { LoggerConsoleImpl } from './adapters/logger';
import { SerializerNativeImpl } from './adapters/serializers';
import { WebSocketClientNativeImpl, WebSocketConnector } from './adapters/ws';
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
import type { mastodon } from './mastodon';

export const createRestClient = (
  props: MastoHttpConfigProps & MastoLogConfigProps,
): mastodon.rest.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoHttpConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const logger = new LoggerConsoleImpl(config.log.getLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['api']) as mastodon.rest.Client;
  return builder;
};

export const createOAuthClient = (
  props: MastoHttpConfigProps & MastoLogConfigProps,
): mastodon.oauth.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new MastoHttpConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const logger = new LoggerConsoleImpl(config.log.getLevel());
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createBuilder(http, ['oauth']) as mastodon.oauth.Client;
  return builder;
};

export function createStreamingClient(
  props: MastoWebSocketConfigProps & MastoLogConfigProps,
): mastodon.streaming.Client {
  const serializer = new SerializerNativeImpl();
  const config = new MastoWebSocketConfig(
    props,
    serializer,
    new MastoLogConfig(props),
  );
  const connector = new WebSocketConnector(
    [config.resolvePath('/api/v1/streaming').toString(), config.getProtocols()],
    new LoggerConsoleImpl(config.log.getLevel()),
    config,
  );
  const connections = connector.getConnections();

  return new WebSocketClientNativeImpl(
    connections,
    serializer,
    connector.close.bind(connector),
  );
}
