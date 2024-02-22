import { isRecord } from "../../utils";

export const flattenRecord = (
  object: unknown,
  parent = "",
): Record<string, unknown> => {
  if (Array.isArray(object)) {
    return object
      .map((value, i) =>
        flattenRecord(value, parent == "" ? i.toString() : `${parent}[${i}]`),
      )
      .reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  if (isRecord(object)) {
    return Object.entries(object)
      .map(([key, value]) =>
        flattenRecord(value, parent === "" ? key : `${parent}[${key}]`),
      )
      .reduce((prev, curr) => Object.assign(prev, curr), {});
  }

  // Unit of the monoid is always an object
  return parent === ""
    ? (object as Record<string, unknown>)
    : { [parent]: object };
};
