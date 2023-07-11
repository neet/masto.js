import { type HttpMetaParams } from "./http";

export interface Action {
  readonly type: string;
  readonly path: string;
  readonly data: unknown;
  readonly meta: HttpMetaParams;
}

export interface ActionDispatcher {
  dispatch<T>(action: Action): T | Promise<T>;
}
