import { AbortController, type AbortSignal } from '@mastojs/ponyfills';

export const mergeAbortSignals = (
  signals: readonly AbortSignal[],
): AbortSignal => {
  const abortController = new AbortController();

  for (const signal of signals) {
    signal.addEventListener('abort', () => abortController.abort());
  }

  return abortController.signal;
};
