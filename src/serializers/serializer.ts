export type MimeType =
  | 'application/json'
  | 'multipart/form-data'
  | 'application/x-www-form-urlencoded';

export interface Serializer {
  serialize(type: MimeType, data: unknown): unknown;
  deserialize<T = Record<string, unknown>>(type: MimeType, data: unknown): T;
}
