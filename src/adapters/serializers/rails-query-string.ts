import { isRecord } from "../../utils";

const flatten = (object: unknown, parent = ""): [string, unknown][] => {
  if (Array.isArray(object)) {
    return object.flatMap((value, i) =>
      flatten(value, parent == "" ? i.toString() : `${parent}[]`),
    );
  }

  if (isRecord(object)) {
    return Object.entries(object).flatMap(([key, value]) =>
      flatten(value, parent === "" ? key : `${parent}[${key}]`),
    );
  }

  return [[parent, object]];
};

const stringify = (object: unknown): string => {
  return flatten(object)
    .filter(([, v]) => v != undefined)
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`)
    .join("&");
};

export const railsQueryString = { stringify };
