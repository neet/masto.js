import { type WebSocket } from "isomorphic-ws";

export interface WebSocketConnector {
  acquire(): Promise<WebSocket>;
  close(): void;
  canAcquire(): boolean;
}

export interface WebSocketSubscriptionCounter {
  count(stream: string, params?: Record<string, unknown>): number;
  increment(stream: string, params?: Record<string, unknown>): void;
  decrement(stream: string, params?: Record<string, unknown>): void;
}
