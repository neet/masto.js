import { isObject } from '../is-object';

test('typed isObject', () => {
  expect(isObject('hello')).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(NaN)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject([1, 2])).toBe(false);
  expect(isObject({})).toBe(true);
  expect(isObject({ a: 'a' })).toBe(true);
});

