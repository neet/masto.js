export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
