import { flattenObject } from './form-data';

test('flat value', () => {
  const result = flattenObject({
    apple: 'red',
    mandarin: 'orange',
    grapes: 'purple',
  });

  expect(result).toStrictEqual({
    apple: 'red',
    mandarin: 'orange',
    grapes: 'purple',
  });
});

test('array', () => {
  const result = flattenObject({
    animals: ['lion', 'giraffe', 'elephant'],
  });

  expect(result).toStrictEqual({
    'animals[0]': 'lion',
    'animals[1]': 'giraffe',
    'animals[2]': 'elephant',
  });
});

test('nested object', () => {
  const result = flattenObject({
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

  expect(result).toStrictEqual({
    a: 'string',
    b: 123,
    'c[0]': 1,
    'c[1]': 2,
    'c[2]': 3,
    'e[e1]': 'string',
    'e[e2][e21][e211]': 'string',
    'e[e2][e22][0][value]': 1,
    'e[e2][e22][1][value]': 2,
    'e[e2][e22][2][value]': 3,
  });
});
