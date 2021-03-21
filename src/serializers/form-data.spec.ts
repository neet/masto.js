import { flattenObject } from './form-data';

test('flat value', () => {
  const result = flattenObject({
    apple: 'red',
    mandarin: 'orange',
    grapes: 'purple',
  });

  expect(result['apple']).toEqual('red');
  expect(result['mandarin']).toEqual('orange');
  expect(result['grapes']).toEqual('purple');
});

test('array', () => {
  const result = flattenObject({
    animals: ['lion', 'giraffe', 'elephant'],
  });

  expect(result['animals[0]']).toEqual('lion');
  expect(result['animals[1]']).toEqual('giraffe');
  expect(result['animals[2]']).toEqual('elephant');
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

  expect(result['a']).toEqual('string');
  expect(result['b']).toEqual(123);
  expect(result['c[0]']).toEqual(1);
  expect(result['c[1]']).toEqual(2);
  expect(result['c[2]']).toEqual(3);
  expect(result['e[e1]']).toEqual('string');
  expect(result['e[e2][e21][e211]']).toEqual('string');
  expect(result['e[e2][e22][0][value]']).toEqual(1);
  expect(result['e[e2][e22][1][value]']).toEqual(2);
  expect(result['e[e2][e22][2][value]']).toEqual(3);
});
