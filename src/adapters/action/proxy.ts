import { snakeCase } from "change-case";

import { type ActionDispatcher, type HttpMetaParams } from "../../interfaces";
import { noop } from "../../utils/noop";

export const createActionProxy = <T>(
  actionDispatcher: ActionDispatcher,
  context: string[] = [],
): T => {
  return new Proxy(noop, {
    get: get(actionDispatcher, context),
    apply: apply(actionDispatcher, context),
  }) as T;
};

const SPECIAL_PROPERTIES = new Set([
  "then",
  "catch",
  "finally",
  "inspect",
  "toString",
  "valueOf",
  "toJSON",
  "constructor",
  "prototype",
  "length",
  "name",
  "caller",
  "callee",
  "arguments",
  "bind",
  "apply",
  "call",
]);

const get =
  <T>(actionDispatcher: ActionDispatcher, context: string[]) =>
  (_: unknown, property: string | symbol) => {
    if (typeof property === "string" && SPECIAL_PROPERTIES.has(property)) {
      return;
    }
    if (typeof property === "symbol") {
      return;
    }
    return createActionProxy<T>(actionDispatcher, [...context, property]);
  };

const apply =
  <T>(actionDispatcher: ActionDispatcher, context: string[]) =>
  (_1: unknown, _2: unknown, args: unknown[]): unknown => {
    const action = context.pop();

    if (action == undefined) {
      throw new Error("No action specified");
    }

    if (action === "$select") {
      return createActionProxy<T>(actionDispatcher, [
        ...context,
        ...(args as string[]),
      ]);
    }

    const path = "/" + context.map((name) => snakeCase(name)).join("/");
    const [data, meta] = args;

    return actionDispatcher.dispatch<T>({
      type: action,
      path,
      data,
      meta: meta as HttpMetaParams,
    });
  };
