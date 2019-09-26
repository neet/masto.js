import semver from 'semver';
import { MastoNotFoundError } from '../errors/masto-not-found-error';
import { Gateway } from '../gateway/gateway';

export interface AvailabeParams {
  since?: string;
  until?: string;
}

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const available = (params: AvailabeParams) => (
  _gateway: Gateway,
  name: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: unknown[]) => unknown>,
) => {
  const original = descriptor.value;
  const { since, until } = params;

  if (!original) {
    throw new Error('available can only apply to a method of a class');
  }

  descriptor.value = function(
    this: Gateway,
    ...args: Parameters<typeof original>
  ) {
    const version = semver.coerce(this.version);

    if (since && version && semver.lt(version, since)) {
      throw new MastoNotFoundError(
        `${String(name)} is not available with the current ` +
          `Mastodon version ${version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (until && version && semver.gt(version, until)) {
      throw new MastoNotFoundError(
        `${String(name)} is not available with the current ` +
          `Mastodon version ${version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
