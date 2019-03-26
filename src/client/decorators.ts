import { gt, lt } from 'semver';
import { MastodonNotFoundError } from '../errors/mastodon-not-found-error';
import { MastodonUnauthorizedError } from '../errors/mastodon-unauthorized-error';
import { Masto } from './masto';

export type Decorator = (
  masto: Masto,
  name: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
) => void;

export interface AvailabeParams {
  since?: string;
  until?: string;
}

/**
 * Decorator that indicates the function requires user
 * (placeholder for the future implementation)
 */
export const requiresUser: Decorator = (_target, _name, descriptor) => {
  const original = descriptor.value;

  if (typeof original !== 'function') {
    return;
  }

  descriptor.value = function(this: Masto, ...args: any[]) {
    return original.apply(this, args);
  };
};

/**
 * Decorator that indicates the function requires authentication
 */
export const requiresAuthentication: Decorator = (
  _target,
  name,
  descriptor,
) => {
  const original = descriptor.value;

  if (typeof original !== 'function') {
    return;
  }

  descriptor.value = function(this: Mastodon, ...args: any[]) {
    if (!this.accessToken) {
      throw new MastodonUnauthorizedError(
        `Endpoint ${name} requires authentication. ` +
          'Check Setting > Development of your Mastodon instance ' +
          'to register application.',
      );
    }

    return original.apply(this, args);
  };
};

/**
 * Decorator that verifies the version of the Mastodon instance
 * @param parameters Optional params
 */
export const available = (parameters: AvailabeParams): Decorator => (
  _target,
  name,
  descriptor,
) => {
  const original = descriptor.value;

  if (typeof original !== 'function') {
    return;
  }

  const { since, until } = parameters;

  descriptor.value = function(this: Masto, ...args: any[]) {
    if (since && this.version && lt(this.version, since)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (until && this.version && gt(this.version, until)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
