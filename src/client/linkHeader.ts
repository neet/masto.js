import * as LinkHeader from 'http-link-header';

export const getNextUrl = (headers: Headers): string | null => {
  const link = headers.get('Link') || '';
  const next = LinkHeader.parse(link).refs.find(ref => ref.rel === 'next');

  return next ? next.uri : null;
};
