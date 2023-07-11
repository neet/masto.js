import { type mastodon } from "../mastodon";
import {
  createActionProxy,
  HttpActionDispatcher,
  WebSocketActionDispatcher,
} from "./action";
import {
  HttpConfigImpl,
  type MastoHttpConfigProps,
  WebSocketConfigImpl,
  type WebSocketConfigProps,
} from "./config";
import { HttpNativeImpl } from "./http";
import { createLogger, type LogType } from "./logger";
import { SerializerNativeImpl } from "./serializers";
import { WebSocketConnectorImpl } from "./ws";

interface LogConfigProps {
  readonly logLevel?: LogType;
}

export const createRestClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.rest.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const http = new HttpNativeImpl(serializer, config, logger);
  const actionDispatcher = new HttpActionDispatcher(http);
  const actionProxy = createActionProxy(actionDispatcher, [
    "api",
  ]) as mastodon.rest.Client;
  return actionProxy;
};

export const createOAuthClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.oauth.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const http = new HttpNativeImpl(serializer, config, logger);
  const actionDispatcher = new HttpActionDispatcher(http);
  const actionProxy = createActionProxy(actionDispatcher, [
    "oauth",
  ]) as mastodon.oauth.Client;
  return actionProxy;
};

export function createStreamingClient(
  props: WebSocketConfigProps & LogConfigProps,
): mastodon.streaming.Client {
  const serializer = new SerializerNativeImpl();
  const config = new WebSocketConfigImpl(props, serializer);
  const logger = createLogger(props.logLevel);
  const connector = new WebSocketConnectorImpl(
    [config.resolvePath("/api/v1/streaming"), config.getProtocols()],
    logger,
    config.getMaxAttempts(),
  );
  const actionDispatcher = new WebSocketActionDispatcher(
    connector,
    serializer,
    logger,
  );

  const actionProxy = createActionProxy(actionDispatcher);
  return actionProxy as mastodon.streaming.Client;
}
