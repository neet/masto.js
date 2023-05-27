import { type mastodon } from '../mastodon';
import {
  HttpConfigImpl,
  type MastoHttpConfigProps,
  WebSocketConfigImpl,
  type WebSocketConfigProps,
} from './config';
import { HttpNativeImpl } from './http';
import { createLogger, type LogType } from './logger';
import { createRequestBuilder } from './request-builder';
import { SerializerNativeImpl } from './serializers';
import { WebSocketClientNativeImpl, WebSocketConnector } from './ws';

type LogConfigProps = {
  readonly logLevel?: LogType;
};

export const createRestClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.rest.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createRequestBuilder(http, ['api']) as mastodon.rest.Client;
  return builder;
};

export const createOAuthClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.oauth.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const http = new HttpNativeImpl(serializer, config, logger);
  const builder = createRequestBuilder(http, [
    'oauth',
  ]) as mastodon.oauth.Client;
  return builder;
};

export function createStreamingClient(
  props: WebSocketConfigProps & LogConfigProps,
): mastodon.streaming.Client {
  const serializer = new SerializerNativeImpl();
  const config = new WebSocketConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const connector = new WebSocketConnector(
    [config.resolvePath('/api/v1/streaming').toString(), config.getProtocols()],
    logger,
    config,
  );
  const connections = connector.getConnections();

  return new WebSocketClientNativeImpl(
    connections,
    serializer,
    connector.close.bind(connector),
  );
}
