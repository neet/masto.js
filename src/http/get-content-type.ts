import type { Headers } from '@mastojs/ponyfills';

export const getContentType = (headers: Headers): string | undefined => {
  const contentType = headers.get('Content-Type');
  if (typeof contentType !== 'string') {
    return;
  }

  return contentType.replace(/\s*;.*$/, '');
};
