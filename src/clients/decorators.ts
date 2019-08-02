import semver from 'semver';
import { MastoNotFoundError } from '../errors/masto-not-found-error';
import { Gateway } from '../gateway/gateway';

export type Decorator = (
  gateway: Gateway,
  name: string,
  descriptor: TypedPropertyDescriptor<(...args: unknown[]) => unknown>,
) => void;

export interface AvailabeParams {
  since?: string;
  until?: string;
}

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const available = (parameters: AvailabeParams): Decorator => (
  _target,
  name,
  descriptor,
) => {
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new Error('available can only apply to a method of a class');
  }

  const original = descriptor.value;
  const { since, until } = parameters;

  descriptor.value = function(this: Gateway, ...args: unknown[]) {
    const version = semver.coerce(this.version);

    if (since && version && semver.lt(version, since)) {
      throw new MastoNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (until && version && semver.gt(version, until)) {
      throw new MastoNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
