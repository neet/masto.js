export type MimeType = 'application/json' | 'multipart/form-data';

export interface Serializer {
  serialize(type: MimeType, data: unknown): unknown;
  serializeQueryString(data: unknown): string;
  deserialize<T = Record<string, unknown>>(type: MimeType, data: unknown): T;
}
