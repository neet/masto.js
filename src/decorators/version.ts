import semver from 'semver';

import type { MastoConfig } from '../config';
import { MastoUnexpectedError, MastoVersionError } from '../errors';

interface Target {
  readonly config: MastoConfig;
}

export interface VersionParams {
  since?: `${number}.${number}.${number}`;
  until?: `${number}.${number}.${number}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const version =
  ({ since, until }: VersionParams) =>
  (
    _target: Target,
    name: string,
    descriptor: TypedPropertyDescriptor<Fn>,
  ): void => {
    const origin = descriptor.value;
    if (!origin) {
      throw new MastoUnexpectedError(
        'version can only apply to a method of a class',
      );
    }

    descriptor.value = async function (
      this: Target,
      ...args: Parameters<typeof origin>
    ) {
      if (!this.config.shouldCheckVersion()) {
        return origin.apply(this, args);
      }

      try {
        return await origin.apply(this, args);
      } catch (error) {
        if (since && semver.lt(this.config.version, since, { loose: true })) {
          throw new MastoVersionError(
            `${String(this.constructor.name)}.${String(name)}` +
              ` is not available with the current Mastodon version ` +
              this.config.version.version +
              ` It requires greater than or equal to version ${since}.`,
          );
        }

        if (until && semver.gt(this.config.version, until, { loose: true })) {
          throw new MastoVersionError(
            `${String(this.constructor.name)}.${String(name)}` +
              ` is not available with the current Mastodon version` +
              this.config.version.version +
              ` It was removed on version ${until}.`,
          );
        }

        throw error;
      }
    };
  };
