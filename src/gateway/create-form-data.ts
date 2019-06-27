// tslint:disable-next-line no-import-side-effect
import 'isomorphic-form-data';

export const isArray = (x: any): x is any[] =>
  Object.prototype.toString.call(x) === '[object Array]';
export const isObject = (x: any): x is { [key: string]: any } =>
  Object.prototype.toString.call(x) === '[object Object]';

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
