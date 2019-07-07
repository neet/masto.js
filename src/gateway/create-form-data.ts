// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';

export const isArray = (x: unknown): x is any[] =>
  typeof x === 'object' && x !== null && x.constructor === Array;
export const isObject = (x: unknown): x is { [key: string]: any } =>
  typeof x === 'object' && x !== null && x.constructor === Object;

/**
 * Encode nested object to form-data compatible flat object
 * @example
 * const result = createFormData({
 *   fruit: 'apple',
 *   animals: ['dog', 'elephant'],
 *   foo: {
 *     foo1: {
 *       foo11: 'bar'
 *     }
 *   }
 * });
 *
 * result.get('a') === 'apple';
 * result.get('b[0]') === 'dog'
 * result.get('b[1]') === 'elephant';
 * result.get('foo[foo1][foo11]') === 'bar';
 *
 * @param encodable Object to encode
 * @param result Result value (for recursive function)
 * @param parentKey Parent key (for recursive function)
 * @return Encoded FormData
 */
export function createFormData(
  encodable: any,
  result = new FormData(),
  parentKey = '',
) {
  if (isArray(encodable)) {
    encodable.forEach((value, i) => {
      createFormData(value, result, `${parentKey}[${i}]`);
    });

    return result;
  }

  if (isObject(encodable)) {
    Object.entries<any>(encodable).forEach(([key, value]) =>
      createFormData(value, result, parentKey ? `${parentKey}[${key}]` : key),
    );

    return result;
  }

  result.append(parentKey, encodable as any);

  return result;
}
