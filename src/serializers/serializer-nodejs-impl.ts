import { camelCase, snakeCase } from 'change-case';
import { ParsedUrlQuery, stringify } from 'querystring';

import { flattenObject } from './form-data';
import { MimeType, Serializer } from './serializer';
import { transformKeys } from './transform-keys';

export class SerializerNodejsImpl implements Serializer {
  serialize(type: MimeType, rawData: unknown): unknown {
    if (rawData == null) return;

    const data = transformKeys(rawData, snakeCase);

    // prettier-ignore
    switch (type) {
      case 'application/json':
        return JSON.stringify(data);
      case 'multipart/form-data': {
        const formData = new FormData();
        Object
          .entries(flattenObject(data))
          .forEach(([key, value]) => formData.append(key, value as string));
        return formData;
      }
      case 'application/x-www-form-urlencoded':
        return stringify(data as ParsedUrlQuery);
      default:
        return;
    }
  }

  deserialize<T = Record<string, unknown>>(type: MimeType, data: string): T {
    switch (type) {
      case 'application/json':
        try {
          return transformKeys(JSON.parse(data), camelCase);
        } catch {
          return undefined as unknown as T;
        }
      default:
        throw new Error(`Unknown content type ${type}, ${data}`);
    }
  }
}
