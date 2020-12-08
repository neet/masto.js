import semver from 'semver';

import { MastoNotFoundError } from '../errors';
import { Gateway } from './gateway';

export interface AvailableParams {
  since?: string;
  until?: string;
}

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const available = ({ since, until }: AvailableParams) => (
  _gateway: Gateway,
  name: string | symbol,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
) => {
  const original = descriptor.value;

  if (!original) {
    throw new Error('available can only apply to a method of a class');
  }

  descriptor.value = function (
    this: Gateway,
    ...args: Parameters<typeof original>
  ) {
    if (
      since &&
      this.version &&
      semver.lt(this.version, since, { loose: true })
    ) {
      throw new MastoNotFoundError(
        `${String(name)} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (
      until &&
      this.version &&
      semver.gt(this.version, until, { loose: true })
    ) {
      throw new MastoNotFoundError(
        `${String(name)} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
