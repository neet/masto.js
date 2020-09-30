import { MastoTimeoutError } from '../errors';

export const timeout = <T>(
  promise: Promise<T>,
  ms: number = Number.MAX_SAFE_INTEGER,
) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new MastoTimeoutError(`Timeout of ${ms}ms exceeded`)),
        ms,
      ),
    ),
  ]);
