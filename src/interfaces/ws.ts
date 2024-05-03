import { type WebSocket } from "isomorphic-ws";

export interface WebSocketConnector {
  acquire(): Promise<WebSocket>;
  close(): void;
  canAcquire(): boolean;
}
