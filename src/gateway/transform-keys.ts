import { isObject } from './is-object';

const fromEntries = <T>(entries: [string, unknown][]) => {
  const object: { [key: string]: unknown } = {};

  for (const [key, value] of entries) {
    object[key] = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (object as any) as T;
};

// prettier-ignore
export const transformKeys = <T>(
  data: Record<string, unknown>,
  transform: (key: string) => string,
): T => fromEntries<T>(
  Object.entries(data).map(([key, value]) => [
    transform(key),
    isObject(value) ? transformKeys(value, transform) : value,
  ] as [string, T[keyof T]]),
);
