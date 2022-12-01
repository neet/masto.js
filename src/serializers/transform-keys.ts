import { isObject } from './is-object';

export const transformKeys = <T>(
  data: unknown,
  transform: (key: string) => string,
): T => {
  if (Array.isArray(data)) {
    return data.map((value) => transformKeys(value, transform)) as unknown as T;
  }

  if (isObject(data)) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        transform(key),
        transformKeys(value, transform),
      ]),
    ) as T;
  }

  return data as T;
};
