// eslint-disable-next-line import/no-unassigned-import
import 'isomorphic-form-data';

import { isObject } from './is-object';

/**
 * Encode nested object to form-data compatible flat object
 * @example
 * const result = createFormData({
 *   fruit: 'apple',
 *   animals: ['dog', 'elephant'],
 *   nested: {
 *     foo1: {
 *       foo11: 'bar'
 *     }
 *   }
 * });
 *
 * result.get('fruit') === 'apple';
 * result.get('animals[0]') === 'dog'
 * result.get('animals[1]') === 'elephant';
 * result.get('nested[foo1][foo11]') === 'bar';
 *
 * @param encodable Object to encode
 * @param result Result value (for recursive function)
 * @param parentKey Parent key (for recursive function)
 * @return Encoded FormData
 */
export function createFormData(
  encodable: unknown,
  result = new FormData(),
  parentKey = '',
) {
  if (Array.isArray(encodable)) {
    encodable.forEach((value, i) => {
      createFormData(value, result, `${parentKey}[${i}]`);
    });

    return result;
  }

  if (isObject(encodable)) {
    Object.entries<unknown>(encodable).forEach(([key, value]) =>
      createFormData(value, result, parentKey ? `${parentKey}[${key}]` : key),
    );

    return result;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result.append(parentKey, encodable as any);

  return result;
}
