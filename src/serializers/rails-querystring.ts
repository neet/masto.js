import { isObject } from './is-object';

/**
 * Encodes URI in Rails format
 */
const stringify = (object?: unknown): string => {
  if (object == null) {
    return '';
  }
  if (!isObject(object)) {
    return '';
  }

  const values = Object.entries(object)
    .reduce<string[]>((prev, [k, v]) => {
      if (Array.isArray(v)) {
        const xs = v.map((x) => `${k}[]=${x}`);
        return prev.concat(...xs);
      }
      if (isObject(v)) {
        throw new TypeError('Encoding nested object is not supported');
      }
      return prev.concat(`${k}=${v}`);
    }, [])
    .join('&');

  return values;
};

export const railsQueryString = { stringify };
