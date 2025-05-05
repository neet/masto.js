import { type HttpMetaParams } from "./http.js";
import { type Encoding } from "./serializer.js";

export interface Action<T extends string> {
  readonly type: T;
  readonly path: string;
  readonly data: unknown;
  readonly meta: HttpMetaParams<Encoding>;
}

export type AnyAction = Action<string>;

export interface ActionDispatcher<T extends AnyAction> {
  dispatch<U>(action: T): U | Promise<U>;
  [Symbol.dispose]?(): void;
}

export interface ActionDispatcherHook<T extends AnyAction, U = unknown> {
  beforeDispatch(action: T): T;
  dispatch(action: T): U | Promise<U> | false;
  afterDispatch(action: T, result: U | Promise<U>): U;
}
