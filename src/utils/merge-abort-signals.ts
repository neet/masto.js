export const mergeAbortSignals = (
  signals: readonly AbortSignal[],
): AbortSignal | undefined => {
  if (globalThis.AbortController === undefined) {
    return;
  }

  const abortController = new AbortController();

  for (const signal of signals) {
    signal.addEventListener('abort', () => abortController.abort());
  }

  return abortController.signal;
};
