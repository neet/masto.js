export interface Serializer {
  serialize(type: string, data: unknown): unknown;
  serializeQueryString(data: unknown): string;
  deserialize<T = Record<string, unknown>>(type: string, data: unknown): T;
}
