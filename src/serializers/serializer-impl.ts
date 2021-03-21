import 'isomorphic-form-data';

import { camelCase, snakeCase } from 'change-case';

import { flattenObject } from './form-data';
import { MimeType, Serializer } from './serializer';
import { transformKeys } from './transform-keys';

export class SerializerImpl implements Serializer {
  serialize(type: MimeType, rawData: Record<string, unknown>): unknown {
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
      default:
        return;
    }
  }

  deserialize<T = Record<string, unknown>>(type: MimeType, data: string): T {
    switch (type) {
      case 'application/json':
        return transformKeys(JSON.parse(data), camelCase);
      default:
        throw new Error(`Unknown content type ${type}, ${data}`);
    }
  }
}
