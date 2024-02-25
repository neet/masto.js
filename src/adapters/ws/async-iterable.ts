import { on } from "events-to-async";
import { type MessageEvent, type WebSocket } from "unws";

import { MastoUnexpectedError } from "../errors";

export async function* toAsyncIterable(
  ws: WebSocket,
): AsyncIterableIterator<MessageEvent> {
  const handleClose = async (e: unknown) => {
    /* istanbul ignore next */
    if (events.return == undefined) {
      throw new MastoUnexpectedError("events.return is undefined");
    }
    await events.return(e);
  };

  const handleError = async (e: unknown) => {
    /* istanbul ignore next */
    if (events.return == undefined) {
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
