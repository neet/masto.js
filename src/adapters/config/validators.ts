export const isPositiveInteger = (value: number): boolean => {
  return value > 0 && value % 1 === 0;
};

export const isURL = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
