import { Headers } from '@mastojs/isomorphic-web';

/* eslint-disable unicorn/no-array-for-each */
export const mergeHeadersInit = ([
  head,
  ...tail
]: readonly HeadersInit[]): HeadersInit => {
  const headers = new Headers(head);

  for (const entry of tail) {
    new Headers(entry).forEach((value, key) => {
      headers.set(key, value);
    });
  }

  return headers;
};
