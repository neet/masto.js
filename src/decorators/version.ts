import semver from 'semver';

import type { MastoConfig } from '../config';
import { MastoError } from '../errors';
import { MastoVersionError } from '../errors/masto-version-error';

interface Target {
  readonly version: string;
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
      throw new MastoError('version can only apply to a method of a class');
    }

    descriptor.value = function (
      this: Target,
      ...args: Parameters<typeof origin>
    ) {
      if (this.config.disableVersionCheck) {
        return origin.apply(this, args);
      }

      if (since && semver.lt(this.version, since, { loose: true })) {
        throw new MastoVersionError(
          `${String(this.constructor.name)}.${String(name)}` +
            ` is not available with the current Mastodon version ` +
            this.version +
            ` It requires greater than or equal to version ${since}.`,
        );
      }

      if (until && semver.gt(this.version, until, { loose: true })) {
        throw new MastoVersionError(
          `${String(this.constructor.name)}.${String(name)}` +
            ` is not available with the current Mastodon version` +
            this.version +
            ` It was removed on version ${until}.`,
        );
      }

      return origin.apply(this, args);
    };
  };
