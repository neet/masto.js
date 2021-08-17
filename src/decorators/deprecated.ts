/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const deprecated =
  (message: string) =>
  (
    _obj: unknown,
    name: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ) => {
    const original = descriptor.value;

    if (!original) {
      throw new Error('available can only apply to a method of a class');
    }

    descriptor.value = function (
      this: unknown,
      ...args: Parameters<typeof original>
    ) {
      if (
        process.env.NODE_ENV !== 'production' ||
        !process.env.NODE_IGNORE_MASTO_WARNINGS
      ) {
        // eslint-disable-next-line no-console
        console.warn(`#${name.toString()} is deprecated. ${message}`);
      }

      return original.apply(this, args);
    };
  };
