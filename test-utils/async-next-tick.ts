export function asyncNextTick(): Promise<void> {
  return new Promise<void>((resolve) => {
    process.nextTick(resolve);
  });
}
