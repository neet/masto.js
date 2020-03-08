import { transformKeys } from '../transform-keys';

describe('transformKeys', () => {
  it('transforms a flat object', () => {
    expect(
      transformKeys({
        key: 'value',
        key_key: ['value', 'value'],
        key_key_key: 3,
      }),
    ).toEqual({
      key: 'value',
      keyKey: ['value', 'value'],
      keyKeyKey: 3,
    });
  });

  it('transforms a deep object', () => {
    expect(
      transformKeys({
        key: {
          key_key: {
            key_key_key: 'value',
          },
        },
      }),
    ).toEqual({
      key: { keyKey: { keyKeyKey: 'value' } },
    });
  });
});
