import { AbortController, type AbortSignal } from '@mastojs/ponyfills';

export const createTimeoutSignal = (timeout: number): AbortSignal => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return controller.signal;
};
