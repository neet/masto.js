import { type WebSocket } from "unws";

// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
const ReadyState = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
};

export function waitForOpen(ws: WebSocket): Promise<void> {
  if (ws.readyState === ReadyState.OPEN) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const handleError = (error: unknown): void => {
      reject(error);
    };

    const handleClose = (): void => {
      reject(new Error("WebSocket closed"));
    };

    const handleOpen = (): void => {
      resolve();
    };

    ws.addEventListener("error", handleError, { once: true });
    ws.addEventListener("close", handleClose, { once: true });
    ws.addEventListener("open", handleOpen, { once: true });
  });
}

export function waitForClose(ws: WebSocket): Promise<void> {
  if (ws.readyState === ReadyState.CLOSED) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const handleClose = (): void => {
      resolve();
    };

    ws.addEventListener("error", handleClose, { once: true });
    ws.addEventListener("close", handleClose, { once: true });
  });
}
