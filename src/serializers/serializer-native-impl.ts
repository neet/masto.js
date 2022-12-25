import type { BodyInit } from '@mastojs/ponyfills';
import { FormData } from '@mastojs/ponyfills';
import { camelCase, snakeCase } from 'change-case';

import { MastoDeserializeError } from '../errors';
import { flattenObject } from './form-data';
import { railsQueryString } from './rails-querystring';
import type { Serializer } from './serializer';
import { transformKeys } from './transform-keys';

export class SerializerNativeImpl implements Serializer {
  serialize(type: string, rawData: unknown): BodyInit | undefined {
    if (rawData == undefined) {
      return;
    }

    const data = transformKeys(rawData, snakeCase);

    switch (type) {
      case 'application/json': {
        return JSON.stringify(data);
      }
      case 'multipart/form-data': {
        const formData = new FormData();
        for (const [key, value] of Object.entries(flattenObject(data))) {
          // `form-data` module has an issue that they doesn't set filename
          // https://github.com/neet/masto.js/issues/481
          // https://github.com/mastodon/mastodon/issues/17622
          if (
            globalThis.Buffer != undefined &&
            value instanceof globalThis.Buffer
          ) {
            // We set `blob` as filename, which is the default for Blob defined by the spec
            // https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
            formData.append(key, value, 'blob');
            continue;
          }

          formData.append(key, value);
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

  deserialize<T = Record<string, unknown>>(type: string, data: string): T {
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
