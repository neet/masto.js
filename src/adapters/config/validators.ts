export const isPositiveInteger = (value: unknown): value is number => {
  return typeof value === "number" && value > 0 && value % 1 === 0;
};

export const isURL = (value: unknown): value is string => {
  if (typeof value !== "string") {
    return false;
  }

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
