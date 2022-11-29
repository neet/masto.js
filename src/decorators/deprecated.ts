import type { MastoConfig } from '../config';
import { MastoError } from '../errors';

interface Target {
  readonly config: MastoConfig;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const deprecated =
  (message: string) =>
  (
    _target: Target,
    name: string | symbol,
    descriptor: TypedPropertyDescriptor<Fn>,
  ): void => {
    const origin = descriptor.value;
    if (!origin) {
      throw new MastoError('deprecated can only apply to a method of a class');
    }

    descriptor.value = function (
      this: Target,
      ...args: Parameters<typeof origin>
    ) {
      if (
        process.env.NODE_ENV !== 'production' ||
        !this.config?.disableDeprecatedWarning
      ) {
        // eslint-disable-next-line no-console
        console.warn(`#${name.toString()} is deprecated. ${message}`);
      }

      return origin.apply(this, args);
    };
  };
