// https://github.com/microsoft/TypeScript/issues/57000
export const isRecord = (x: unknown): x is Record<string, unknown> => {
  return Object(x) === x;
};
