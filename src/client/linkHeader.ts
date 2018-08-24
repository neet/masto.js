import * as LinkHeader from 'http-link-header';

export const getNextUrl = (headers: Headers): string | null => {
  const link = headers.get('Link') || '';
  const refs = LinkHeader.parse(link).refs.filter((ref) => ref.rel === 'next');

  return refs.length > 0
    ? refs[0].uri
    : null;
}
