import type { MastoConfig } from '../config';
import { MastoUnexpectedError } from '../errors/masto-unexpected-error';

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
      throw new MastoUnexpectedError(
        'deprecated can only apply to a method of a class',
      );
    }

    descriptor.value = function (
      this: Target,
      ...args: Parameters<typeof origin>
    ) {
      this.config.warn(`#${name.toString()} is deprecated. ${message}`);
      return origin.apply(this, args);
    };
  };
