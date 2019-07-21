import semver from 'semver';
import { MastoNotFoundError } from '../errors/masto-not-found-error';
import { Gateway } from '../gateway/gateway';

export type Decorator = (
  gateway: Gateway,
  name: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
) => void;

export interface AvailabeParams {
  since?: string;
  until?: string;
}

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param params Optional params
 */
export const available = (params: AvailabeParams): Decorator => (
  _target,
  name,
  descriptor,
) => {
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new Error('available can only apply to a method of a class');
  }

  const original = descriptor.value;
  const { since, until } = params;

  descriptor.value = function(this: Gateway, ...args: any[]) {
    if (since && semver.lt(this.version, since)) {
      throw new MastoNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (until && semver.gt(this.version, until)) {
      throw new MastoNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
