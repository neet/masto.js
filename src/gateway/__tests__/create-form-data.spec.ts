// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';
import { createFormData, isArray, isObject } from '../create-form-data';

/**
 * Unfortunatly form-data node.js package doesn't have
 * the same API of FormData of web... so functions below are
 * a hack implementation for `get` and `getAll` to test them
 */

const chunk = <T>(array: T[], length: number) =>
  array.reduce(
    (acc, current, i) => {
      const position = Math.floor(i / length);
      if (!acc[position]) acc[position] = [];
      acc[position].push(current);

      return acc;
    },
    [] as T[][],
  );

const getAll = (formdata: FormData, name: string) =>
  chunk((formdata as any)._streams as string[], 3)
    .filter(([boundary]) => boundary.includes(`name="${name}"`))
    .map(([, datum]) => datum);

const get = (formdata: FormData, name: string) => getAll(formdata, name)[0];

test('typed isArray', () => {
  const r1 = isArray([]);
  const r2 = isArray([1, 2]);
  const r3 = isArray({});
  const r4 = isArray(null);

  expect(r1).toBe(true);
  expect(r2).toBe(true);
  expect(r3).toBe(false);
  expect(r4).toBe(false);
});

test('typed isObject', () => {
  const r1 = isObject(null);
  const r2 = isObject([1, 2]);
  const r3 = isObject({});
  const r4 = isObject({ a: 'a' });
  const r5 = isObject(new FormData());

  expect(r1).toBe(false);
  expect(r2).toBe(false);
  expect(r3).toBe(true);
  expect(r4).toBe(true);
  expect(r5).toBe(false);
});

test('flat value', () => {
  const result = createFormData({
    apple: 'ringo',
    orange: 'mikan',
    grapes: 'budo',
  });

  expect(get(result, 'apple')).toEqual('ringo');
  expect(get(result, 'orange')).toEqual('mikan');
  expect(get(result, 'grapes')).toEqual('budo');
});

test('array', () => {
  const result = createFormData({
    animals: ['lion', 'giraffe', 'elephant'],
  });

  expect(get(result, 'animals[0]')).toEqual('lion');
  expect(get(result, 'animals[1]')).toEqual('giraffe');
  expect(get(result, 'animals[2]')).toEqual('elephant');
});

test('nested object', () => {
  const result = createFormData({
    a: 'string',
    b: 123,
    c: [1, 2, 3],
    e: {
      e1: 'string',
      e2: {
        e21: {
          e211: 'string',
        },
        e22: [{ value: 1 }, { value: 2 }, { value: 3 }],
      },
    },
  });

  expect(get(result, 'a')).toEqual('string');
  expect(get(result, 'b')).toEqual('123');
  expect(get(result, 'c[0]')).toEqual('1');
  expect(get(result, 'c[1]')).toEqual('2');
  expect(get(result, 'c[2]')).toEqual('3');
  expect(get(result, 'e[e1]')).toEqual('string');
  expect(get(result, 'e[e2][e21][e211]')).toEqual('string');
  expect(get(result, 'e[e2][e22][0][value]')).toEqual('1');
  expect(get(result, 'e[e2][e22][1][value]')).toEqual('2');
  expect(get(result, 'e[e2][e22][2][value]')).toEqual('3');
});
