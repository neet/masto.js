import { Headers } from '@mastojs/isomorphic-web';

import { getContentType } from './get-content-type';

test.each([
  [{ 'Content-Type': 'text/plain; charset=utf-8' }, 'text/plain'],
  [{ 'content-type': 'text/plain; charset=utf-8' }, 'text/plain'],
  [{ 'Content-Type': 'text/plain' }, 'text/plain'],
])('removes charset from content-type', (headers, expected) => {
  expect(getContentType(new Headers(headers))).toBe(expected);
});
