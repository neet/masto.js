const enum ScopeVerb {
  Read = 'read',
  Write = 'write',
  Follow = 'follow',
  Push = 'push',
}

const enum ScopeDomain {
  Accounts = 'accounts',
  Blocks = 'blocks',
  Bookmarks = 'bookmarks',
  Conversations = 'conversations',
  Favourites = 'favourites',
  Filters = 'filters',
  Follows = 'follows',
  Lists = 'lists',
  Media = 'media',
  Mutes = 'mutes',
  Notifications = 'notifications',
  Reports = 'reports',
  Search = 'search',
  Statuses = 'statuses',
}

export type Scope = `${'' | 'admin:'}${ScopeVerb}:${ScopeDomain}`;

/**
 * Represents an OAuth token used for authenticating with the API and performing actions.
 * @see https://docs.joinmastodon.org/entities/token/
 */
export interface Token {
  /** An OAuth token to be used for authorization. */
  accessToken: string;
  /** The OAuth token type. Mastodon uses Bearer tokens. */
  tokenType: string;
  /** The OAuth scopes granted by this token, space-separated. */
  scope: Scope;
  /** When the token was generated. */
  createdAt: string;
}
