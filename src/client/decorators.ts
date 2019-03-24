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

export const requiresUser: Decorator = (_1, _2, descriptor) => {
  const original = descriptor.value;
  if (!original) return;

  descriptor.value = (...args: any[]) => {
    // This actually does nothing because we don't
    // have the method to check if the authenticated user is an actual user
    return original(...args);
  };
};

export const requiresAuthentication: Decorator = (
  mastodon,
  name,
  descriptor,
) => {
  const original = descriptor.value;
  if (!original) return;

  descriptor.value = (...args: any[]) => {
    if (!mastodon.accessToken) {
      throw new MastodonUnauthorizedError(`${name} requires authentication`);
    }

    return original(...args);
  };
};

export const available = (parameters: AvailabeParams): Decorator => (
  mastodon,
  name,
  descriptor,
) => {
  const original = descriptor.value;
  if (!original) return;

  const { since, until } = parameters;

  descriptor.value = (...args: any[]) => {
    if (since && lt(since, mastodon.version)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current` +
          `Mastodon version ${mastodon.version}.` +
          `It requires greater than or equal to version ${since}`,
      );
    }

    if (until && gt(until, mastodon.version)) {
      throw new MastodonNotFoundError(
        `${name} is not available with the current` +
          `Mastodon version ${mastodon.version}.` +
          `It requires lesser than or equal to version ${until}`,
      );
    }

    return original(...args);
  };
};
