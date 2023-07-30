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
import { EventStreamImpl } from "./event-stream";
import { HttpNativeImpl } from "./http";
import { createLogger, type LogType } from "./logger";
import { SerializerNativeImpl } from "./serializers";
import { WebSocketConnectorImpl } from "./ws";

interface LogConfigProps {
  readonly log?: LogType;
}

export const createRestAPIClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.rest.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.log);
  const http = new HttpNativeImpl(serializer, config, logger);
  const eventStream = new EventStreamImpl(config, serializer);
  const actionDispatcher = new HttpActionDispatcher(http, eventStream);
  const actionProxy = createActionProxy(actionDispatcher, [
    "api",
  ]) as mastodon.rest.Client;
  return actionProxy;
};

export const createOAuthAPIClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.oauth.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.log);
  const http = new HttpNativeImpl(serializer, config, logger);
  const actionDispatcher = new HttpActionDispatcher(http);
  const actionProxy = createActionProxy(actionDispatcher, [
    "oauth",
  ]) as mastodon.oauth.Client;
  return actionProxy;
};

interface WebSocketCustomImplProps {
  /** Custom WebSocket implementation. In Deno, you can use `WebSocket` to avoid potential errors. */
  readonly implementation?: unknown;
}

export function createStreamingAPIClient(
  props: WebSocketConfigProps & LogConfigProps & WebSocketCustomImplProps,
): mastodon.streaming.Client {
  const serializer = new SerializerNativeImpl();
  const config = new WebSocketConfigImpl(props, serializer);
  const logger = createLogger(props.log);
  const connector = new WebSocketConnectorImpl(
    {
      constructorParameters: [
        config.resolvePath("/api/v1/streaming"),
        config.getProtocols(),
      ],
      implementation: props.implementation,
      maxAttempts: config.getMaxAttempts(),
    },
    logger,
  );
  const actionDispatcher = new WebSocketActionDispatcher(
    connector,
    serializer,
    logger,
  );

  const actionProxy = createActionProxy(actionDispatcher);
  return actionProxy as mastodon.streaming.Client;
}
