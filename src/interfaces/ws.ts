import { type WebSocket } from "ws";

export interface WebSocketConnector {
  acquire(): Promise<WebSocket>;
  close(): void;
  canAcquire(): boolean;
}
