import { isObject } from './is-object';

export const flattenObject = (
  object: unknown,
  parent = '',
): Record<string, unknown> => {
  if (Array.isArray(object)) {
    return object
      .map((value, i) =>
        flattenObject(value, parent == '' ? i.toString() : `${parent}[${i}]`),
      )
      .reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  if (isObject(object)) {
    return Object.entries(object)
      .map(([key, value]) =>
        flattenObject(value, parent === '' ? key : `${parent}[${key}]`),
      )
      .reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  // Unit of the monoid is always an object
  return parent === ''
    ? (object as Record<string, unknown>)
    : { [parent]: object };
};
