import { type LogType } from "../interfaces/index.js";
import { type mastodon } from "../mastodon/index.js";
import { HttpActionDispatcherHookMastodon } from "./action/dispatcher-http-hook-mastodon.js";
import {
  createActionProxy,
  HttpActionDispatcher,
  WebSocketActionDispatcher,
} from "./action/index.js";
import {
  HttpConfigImpl,
  type MastoHttpConfigProps,
  WebSocketConfigImpl,
  type WebSocketConfigProps,
} from "./config/index.js";
import { HttpNativeImpl } from "./http/index.js";
import { createLogger } from "./logger/index.js";
import { SerializerNativeImpl } from "./serializers/index.js";
import {
  WebSocketConnectorImpl,
  WebSocketSubscriptionCounterImpl,
} from "./ws/index.js";

interface LogConfigProps {
  /**
   * Log level for the client.
   *
   * - `debug`: Log everything.
   * - `info`: Log important information.
   * - `warn`: Log warnings.
   * - `error`: Log errors.
   *
   * Defaults to `warn`.
   */
  readonly log?: LogType;
}

interface MediaConfigProps {
  /**
   * Timeout milliseconds for media upload processing.
   *
   * When uploading media via `/api/v2/media`, the library polls the server
   * to wait for media processing to complete before returning. This timeout
   * controls how long to wait before giving up.
   *
   * Defaults to 60000 (60 seconds).
   *
   * @experimental The behavior of this option may change without any announcement.
   */
  readonly mediaTimeout?: number;
}

export const createRestAPIClient = (
  props: MastoHttpConfigProps & LogConfigProps & MediaConfigProps,
): mastodon.rest.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.log);
  const http = new HttpNativeImpl(serializer, config, logger);
  const hook = new HttpActionDispatcherHookMastodon(http, props.mediaTimeout);
  const actionDispatcher = new HttpActionDispatcher(http, hook);
  const actionProxy = createActionProxy(actionDispatcher, {
    context: ["api"],
  }) as mastodon.rest.Client;
  return actionProxy;
};

export const createOAuthAPIClient = (
  props: MastoHttpConfigProps & LogConfigProps,
): mastodon.oauth.Client => {
  const serializer = new SerializerNativeImpl();
  const config = new HttpConfigImpl(props, serializer);
  const logger = createLogger(props.log);
  const http = new HttpNativeImpl(serializer, config, logger);
  const hook = new HttpActionDispatcherHookMastodon(http);
  const actionDispatcher = new HttpActionDispatcher(http, hook);
  const actionProxy = createActionProxy(actionDispatcher, {
    context: ["oauth"],
  }) as mastodon.oauth.Client;
  return actionProxy;
};

interface WebSocketCustomImplProps {
  /**
   * Custom WebSocket implementation. In Deno, you can use `WebSocket` to avoid potential errors.
   *
   * Defaults to `window.WebSocket`.
   */
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
  const counter = new WebSocketSubscriptionCounterImpl();
  const actionDispatcher = new WebSocketActionDispatcher(
    connector,
    counter,
    serializer,
    logger,
  );

  const actionProxy = createActionProxy(actionDispatcher);
  return actionProxy as mastodon.streaming.Client;
}
