// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';

export const isArray = (x: any): x is any[] =>
  Object.prototype.toString.call(x) === '[object Array]';
export const isObject = (x: any): x is { [key: string]: any } =>
  Object.prototype.toString.call(x) === '[object Object]';

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
 * result.getAll('b[]') === ['dog', 'elephant'];
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
    encodable.forEach(value => {
      createFormData(value, result, `${parentKey}[]`);
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
