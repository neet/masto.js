
export class MastodonError extends Error {
  constructor (public name: string, public message: string) {
    super();
  };
}

export class MastodonUnauthorizedError extends MastodonError {
  constructor (message: string) {
    super('MastodonUnauthorizedError', message);
  }
}

export class MastodonNotFoundError extends MastodonError {
  constructor (message: string) {
    super('MastodonNotFoundError', message);
  }
}

export class MastodonRatelimitError extends MastodonError {
  constructor (message: string) {
    super('MastodonRatelimitError', message);
  }
}

export class MastodonURLResolveError extends MastodonError {
  constructor (message: string) {
    super('MastodonURLResolveError', message);
  }
}
