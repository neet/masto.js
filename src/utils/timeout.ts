import { MastoTimeoutError } from '../errors';

export const timeout = <T>(task: Promise<T>, ms?: number): Promise<T> => {
  if (ms == null) {
    return task;
  }

  return Promise.race([
    task,
    new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new MastoTimeoutError(`Timeout of ${ms}ms exceeded`)),
        ms,
      ),
    ),
  ]);
};
