import { camelCase, snakeCase } from 'change-case';

import { flattenObject } from './form-data';
import { railsQueryString } from './rails-querystring';
import type { MimeType, Serializer } from './serializer';
import { transformKeys } from './transform-keys';

export class SerializerNativeImpl implements Serializer {
  serialize(type: MimeType, rawData: unknown): unknown {
    if (rawData == undefined) return;

    const data = transformKeys(rawData, snakeCase);

    // prettier-ignore
    switch (type) {
      case 'application/json': {
        return JSON.stringify(data);
      }
      case 'multipart/form-data': {
        const formData = new FormData();
        for (const [key, value] of Object
          .entries(flattenObject(data))) formData.append(key, value as string);
        return formData;
      }
      default: {
        return;
      }
    }
  }

  serializeQueryString(rawData: unknown): string {
    const data = transformKeys(rawData, snakeCase);
    return railsQueryString.stringify(data);
  }

  deserialize<T = Record<string, unknown>>(type: MimeType, data: string): T {
    switch (type) {
      case 'application/json': {
        try {
          return transformKeys(JSON.parse(data), camelCase);
        } catch {
          return undefined as unknown as T;
        }
      }
      default: {
        throw new Error(`Unknown content type ${type}, ${data}`);
      }
    }
  }
}
