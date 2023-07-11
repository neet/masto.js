import WebSocket from "ws";

import { type Logger, type WebSocketConnector } from "../../interfaces";
import {
  createPromiseWithResolvers,
  ExponentialBackoff,
  type PromiseWithResolvers,
} from "../../utils";
import { MastoWebSocketError } from "../errors";
import { waitForClose, waitForOpen } from "./wait-for-events";

export class WebSocketConnectorImpl implements WebSocketConnector {
  private ws?: WebSocket;

  private queue: PromiseWithResolvers<WebSocket>[] = [];
  private backoff: ExponentialBackoff;

  private disableRetry = false;
  private initialized = false;

  constructor(
    private readonly params: ConstructorParameters<typeof WebSocket>,
    private readonly logger?: Logger,
    private readonly maxAttempts?: number,
  ) {
    this.backoff = new ExponentialBackoff({
      maxAttempts: this.maxAttempts,
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
        this.logger?.info("Connecting to WebSocket...");
        {
          const ws = new WebSocket(...this.params);
          await waitForOpen(ws);
          this.ws = ws;
        }
        this.logger?.info("Connected to WebSocket");

        for (const { resolve } of this.queue) {
          resolve(this.ws);
        }
        this.queue = [];

        await waitForClose(this.ws);
        this.logger?.info("WebSocket closed");
        this.backoff.clear();
      } catch (error) {
        this.logger?.error("WebSocket error:", error);
      }

      if (this.disableRetry) {
        break;
      }
    }

    for (const { reject } of this.queue) {
      reject(
        new MastoWebSocketError(
          `Failed to connect to WebSocket after ${this.maxAttempts} attempts`,
        ),
      );
    }
    this.queue = [];
  };
}
