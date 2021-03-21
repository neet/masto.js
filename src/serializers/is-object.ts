export const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === 'object' && x !== null && x.constructor === Object;
