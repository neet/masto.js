// tslint:disable no-function-expression no-invalid-this
import { gt, lt } from 'semver';
import { MastodonNotFoundError } from '../errors/mastodon-not-found-error';
import { MastodonUnauthorizedError } from '../errors/mastodon-unauthorized-error';
import { Mastodon } from './mastodon';

export type Decorator = (
  mastodon: Mastodon,
  name: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
) => void;

export interface AvailabeParams {
  since?: string;
  until?: string;
}

export const requiresUser: Decorator = (_target, _name, descriptor) => {
  const original = descriptor.value;

  if (typeof original !== 'function') {
    return;
  }

  descriptor.value = function(this: Mastodon, ...args: any[]) {
    // This actually does nothing because we don't
    // have the method to check if the authenticated user is an actual user
    return original.apply(this, args);
  };
};

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
      throw new MastodonUnauthorizedError(`${name} requires authentication`);
    }

    return original.apply(this, args);
  };
};

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

  descriptor.value = function(this: Mastodon, ...args: any[]) {
    if (since && this.version && lt(since, this.version)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It requires greater than or equal to version ${since}.`,
      );
    }

    if (until && this.version && gt(until, this.version)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current ` +
          `Mastodon version ${this.version}. ` +
          `It was removed on version ${until}.`,
      );
    }

    return original.apply(this, args);
  };
};
