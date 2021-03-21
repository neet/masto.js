import { isObject } from './is-object';

export const flattenObject = (
  object: unknown,
  parent = '',
): Record<string, unknown> => {
  if (isObject(object)) {
    return Object.entries(object)
      .map(([key, value]) =>
        flattenObject(value, parent ? `${parent}[${key}]` : key),
      )
      .reduce(Object.assign);
  }

  if (Array.isArray(object)) {
    return object
      .map((value, i) =>
        flattenObject(value, parent ? `${parent}[${i}]` : i.toString()),
      )
      .reduce(Object.assign);
  }

  return { [parent]: object };
};
