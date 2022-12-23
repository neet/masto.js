import type { BodyInit } from '@mastojs/ponyfills';

export interface Serializer {
  serialize(type: string, data: unknown): BodyInit | undefined;
  serializeQueryString(data: unknown): string;
  deserialize<T = Record<string, unknown>>(type: string, data: unknown): T;
}
