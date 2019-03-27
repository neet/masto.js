import { isAxiosError, normalizeUrl } from '../utils';

test('normalize url', () => {
  const result = normalizeUrl('https://example.com/');
  expect(result).toBe('https://example.com');
});

test('return true if `response` is contained in the object', () => {
  const obj = {
    response: 'some response',
  };

  expect(isAxiosError(obj)).toBe(true);
});
