import { on } from "events-to-async";

import { MastoUnexpectedError } from "../errors/index.js";

export async function* toAsyncIterable(
  ws: WebSocket,
): AsyncIterableIterator<MessageEvent> {
  const handleClose = async (e: CloseEvent) => {
    /* c8 ignore next 3 */
    if (!events.return) {
      throw new MastoUnexpectedError("events.return is undefined");
    }
    await events.return(e);
  };

  const handleError = async (e: Event) => {
    /* c8 ignore next 3 */
    if (!events.return) {
      throw new MastoUnexpectedError("events.return is undefined");
    }
    await events.return(e);
  };

  const events = on<[MessageEvent]>((handler) => {
    ws.addEventListener("message", handler);
    ws.addEventListener("error", handleError);
    ws.addEventListener("close", handleClose);

    return () => {
      ws.removeEventListener("message", handler);
      ws.removeEventListener("error", handleError);
      ws.removeEventListener("close", handleClose);
    };
  });

  for await (const [event] of events) {
    yield event;
  }
}
