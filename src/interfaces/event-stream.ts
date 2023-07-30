import { type HttpMetaParams } from "./http";

export interface EventStream {
  stream<T>(
    path: string,
    data?: unknown,
    meta?: HttpMetaParams,
  ): AsyncIterableIterator<T>;
}
