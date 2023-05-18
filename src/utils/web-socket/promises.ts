import WebSocket from 'ws';

export async function connect(
  params: ConstructorParameters<typeof WebSocket>,
): Promise<WebSocket> {
  const ws = new WebSocket(...params);

  return new Promise<WebSocket>((resolve, reject) => {
    const handleError = (error: WebSocket.ErrorEvent): void => {
      reject(error);
    };

    const handleOpen = (): void => {
      resolve(ws);
    };

    ws.addEventListener('error', handleError, { once: true });
    ws.addEventListener('open', handleOpen, { once: true });
  });
}
