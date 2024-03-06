import { WebSocket } from "unws";

import { type Logger, type WebSocketConnector } from "../../interfaces";
import {
  createPromiseWithResolvers,
  ExponentialBackoff,
  type PromiseWithResolvers,
} from "../../utils";
import { MastoWebSocketError } from "../errors";
import { waitForClose, waitForOpen } from "./wait-for-events";

interface WebSocketConnectorImplProps {
  readonly constructorParameters: ConstructorParameters<typeof WebSocket>;
  readonly implementation?: unknown;
  readonly maxAttempts?: number;
}

export class WebSocketConnectorImpl implements WebSocketConnector {
  private ws?: WebSocket;

  private queue: PromiseWithResolvers<WebSocket>[] = [];
  private backoff: ExponentialBackoff;

  private disableRetry = false;
  private initialized = false;

  constructor(
    private readonly props: WebSocketConnectorImplProps,
    private readonly logger?: Logger,
  ) {
    this.backoff = new ExponentialBackoff({
      maxAttempts: this.props.maxAttempts,
    });
  }

  canAcquire(): boolean {
    return !this.disableRetry;
  }

  async acquire(): Promise<WebSocket> {
    this.init();

    if (this.ws != undefined) {
      return this.ws;
    }

    const promiseWithResolvers = createPromiseWithResolvers<WebSocket>();
    this.queue.push(promiseWithResolvers);
    return await promiseWithResolvers.promise;
  }

  close(): void {
    this.disableRetry = true;
    this.ws?.close();
    this.backoff.clear();

    for (const { reject } of this.queue) {
      reject(new MastoWebSocketError("WebSocket closed"));
    }

    this.queue = [];
  }

  private init = async () => {
    if (this.initialized) {
      return;
    }

    this.initialized = true;

    for await (const _ of this.backoff) {
      this.ws?.close();

      try {
        this.logger?.log("info", "Connecting to WebSocket...");
        {
          const ctor = (this.props.implementation ??
            WebSocket) as typeof WebSocket;
          const ws = new ctor(...this.props.constructorParameters);
          await waitForOpen(ws);
          this.ws = ws;
        }
        this.logger?.log("info", "Connected to WebSocket");

        for (const { resolve } of this.queue) {
          resolve(this.ws);
        }
        this.queue = [];

        await waitForClose(this.ws);
        this.logger?.log("info", "WebSocket closed");
        this.backoff.clear();
      } catch (error) {
        this.logger?.log("error", "WebSocket error:", error);
      }

      if (this.disableRetry) {
        break;
      }
    }

    for (const { reject } of this.queue) {
      reject(
        new MastoWebSocketError(
          `Failed to connect to WebSocket after ${this.props.maxAttempts} attempts`,
        ),
      );
    }
    this.queue = [];
  };
}
