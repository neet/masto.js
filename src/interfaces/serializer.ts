import type { BodyInit } from '@mastojs/ponyfills';

export type Encoding =
  | 'none'
  | 'json'
  | 'form-url-encoded'
  | 'multipart-form'
  | 'querystring';

export interface Serializer {
  serialize(type: 'json', data: unknown): string;
  serialize(type: 'querystring', data: unknown): string;
  serialize(type: Encoding, data: unknown): BodyInit | undefined;
  deserialize<T = Record<string, unknown>>(type: Encoding, data: unknown): T;
}
