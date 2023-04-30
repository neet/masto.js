import type { BodyInit } from '@mastojs/ponyfills';

export type Encoding = 'none' | 'json' | 'form-url-encoded' | 'multipart-form';

export interface Serializer {
  serialize(type: 'json', data: unknown): string | undefined;
  serialize(type: Encoding, data: unknown): BodyInit | undefined;
  serializeQueryString(data: unknown): string;
  deserialize<T = Record<string, unknown>>(type: Encoding, data: unknown): T;
}
