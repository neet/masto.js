import { createFormData, isArray, isObject } from '../create-form-data';

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

  expect(r1).toBe(false);
  expect(r2).toBe(false);
  expect(r3).toBe(true);
  expect(r4).toBe(true);
});

test('flat value', () => {
  const result = createFormData({
    apple: 'ringo',
    orange: 'mikan',
    grapes: 'budo',
  });

  const manual = new FormData();
  manual.append('apple', 'ringo');
  manual.append('orange', 'mikan');
  manual.append('grapes', 'budo');

  expect(result).toEqual(manual);
});

test('array', () => {
  const result = createFormData({
    animals: ['lion', 'giraffe', 'elephant'],
  });

  const manual = new FormData();
  manual.append('animals[]', 'lion');
  manual.append('animals[]', 'giraffe');
  manual.append('animals[]', 'elephant');

  expect(result).toEqual(manual);
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
        e22: [1, 2, 3],
      },
    },
  });

  const manual = new FormData();
  manual.append('a', 'string');
  manual.append('b', '123');
  manual.append('c[]', '1');
  manual.append('c[]', '2');
  manual.append('c[]', '3');
  manual.append('e[e1]', 'string');
  manual.append('e[e2][e21][e211]', 'string');
  manual.append('e[e2][e22][]', '1');
  manual.append('e[e2][e22][]', '2');
  manual.append('e[e2][e22][]', '3');

  expect(result).toMatchSnapshot();
  expect(result).toEqual(manual);
});
