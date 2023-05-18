/* eslint-disable @typescript-eslint/no-unused-vars */
export async function waitForAsyncIterableToEnd<T>(
  subject: AsyncIterable<T>,
): Promise<void> {
  for await (const _ of subject) {
    // noop;
  }

  return;
}
