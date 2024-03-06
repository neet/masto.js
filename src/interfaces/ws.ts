import { type WebSocket } from "unws";

export interface WebSocketConnector {
  acquire(): Promise<WebSocket>;
  close(): void;
  canAcquire(): boolean;
}
