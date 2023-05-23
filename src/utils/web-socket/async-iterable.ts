import { on } from 'events-to-async';
import type WebSocket from 'isomorphic-ws';

import { MastoUnexpectedError } from '../../errors';

export async function* toAsyncIterable(
  ws: WebSocket,
): AsyncIterable<WebSocket.MessageEvent> {
  const handleClose = (e: WebSocket.CloseEvent) => {
    if (events.return == undefined) {
      throw new MastoUnexpectedError('events.return is undefined');
    }
    events.return(e);
  };

  const handleError = (e: WebSocket.ErrorEvent) => {
    if (events.throw == undefined) {
      throw new MastoUnexpectedError('events.return is undefined');
    }
    events.throw(e);
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
