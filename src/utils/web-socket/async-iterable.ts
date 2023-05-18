import { on } from 'events-to-async';
import type WebSocket from 'isomorphic-ws';

export async function* toAsyncIterable(
  ws: WebSocket,
): AsyncIterable<WebSocket.MessageEvent> {
  const handleClose = (e: WebSocket.CloseEvent) => {
    events.return?.(e);
  };

  const handleError = (e: WebSocket.ErrorEvent) => {
    events.throw?.(e);
  };

  const events = on<[WebSocket.MessageEvent]>((handler) => {
    ws.addEventListener('message', handler);
    ws.addEventListener('error', handleError);
    ws.addEventListener('close', handleClose);

    return () => {
      ws.removeEventListener('message', handler);
      ws.removeEventListener('error', handleError);
      ws.removeEventListener('close', handleClose);
    };
  });

  for await (const [event] of events) {
    yield event;
  }
}
