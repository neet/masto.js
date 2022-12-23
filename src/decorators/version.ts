import { SemVer } from 'semver';

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
  (params: VersionParams) =>
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

    descriptor.value = function (
      this: Target,
      ...args: Parameters<typeof origin>
    ) {
      const since = params.since && new SemVer(params.since, { loose: true });
      const until = params.until && new SemVer(params.until, { loose: true });
      const result = this.config.satisfiesVersion(since, until);

      switch (result.compat) {
        case 'unimplemented': {
          throw new MastoVersionError(
            `${String(this.constructor.name)}.${String(name)}` +
              ` is not available with the current Mastodon version ` +
              result.version +
              ` It requires greater than or equal to version ${since}.`,
          );
        }
        case 'removed': {
          throw new MastoVersionError(
            `${String(this.constructor.name)}.${String(name)}` +
              ` is not available with the current Mastodon version` +
              result.version +
              ` It was removed on version ${until}.`,
          );
        }
        case 'compatible': {
          return origin.apply(this, args);
        }
      }
    };
  };
