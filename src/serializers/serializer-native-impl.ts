import { camelCase, snakeCase } from 'change-case';

import { MastoDeserializeError } from '../errors';
import { flattenObject } from './form-data';
import { railsQueryString } from './rails-querystring';
import type { MimeType, Serializer } from './serializer';
import { transformKeys } from './transform-keys';

export class SerializerNativeImpl implements Serializer {
  serialize(type: MimeType, rawData: unknown): unknown {
    if (rawData == undefined) return;

    const data = transformKeys(rawData, snakeCase);

    switch (type) {
      case 'application/json': {
        return JSON.stringify(data);
      }
      case 'multipart/form-data': {
        const formData = new FormData();
        for (const [key, value] of Object.entries(flattenObject(data))) {
          formData.append(key, value as string);
        }
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

  // FIXME 責務が微妙に違う
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
        throw new MastoDeserializeError(
          `Unknown content type ${type} returned from the server.`,
          type,
          data,
        );
      }
    }
  }
}
