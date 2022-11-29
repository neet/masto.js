import { isObject } from './is-object';

/**
 * Encodes URI in Rails format
 */
const stringify = (object?: unknown): string => {
  if (!isObject(object)) {
    return '';
  }

  const values = Object.entries(object)
    .reduce<string[]>((prev, [k, v]) => {
      if (Array.isArray(v)) {
        const xs = v.map((x) => `${k}[]=${encodeURIComponent(x)}`);
        return [...prev, ...xs];
      }
      if (v == undefined) {
        return prev;
      }
      if (
        typeof v === 'string' ||
        typeof v === 'number' ||
        typeof v === 'boolean'
      ) {
        return [...prev, `${k}=${encodeURIComponent(v)}`];
      }
      throw new TypeError('Encoding nested object is not supported');
    }, [])
    .join('&');

  return values;
};

export const railsQueryString = { stringify };
