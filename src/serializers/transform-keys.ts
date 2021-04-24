/* eslint-disable @typescript-eslint/no-explicit-any */

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
  data: unknown,
  transform: (key: string) => string,
): T => {
  if (Array.isArray(data)) {
    return data.map((value) => transformKeys(value, transform)) as unknown as T;
  }
  
  if (isObject(data)) {
    return fromEntries<T>(
      Object.entries(data).map(([key, value]) => [
        transform(key),
        transformKeys(value, transform),
      ]) as any,
    );
  }

  return data as T;
}
