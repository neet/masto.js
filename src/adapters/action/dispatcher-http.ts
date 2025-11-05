import {
  type Action,
  type ActionDispatcher,
  type ActionDispatcherHook,
  type Http,
  type HttpResponse,
} from "../../interfaces/index.js";
import { type Paginator } from "../../mastodon/paginator.js";
import { PaginatorHttp } from "./paginator-http.js";

export type HttpActionMap = {
  fetch: Promise<HttpResponse<unknown>>;
  create: Promise<HttpResponse<unknown>>;
  update: Promise<HttpResponse<unknown>>;
  remove: Promise<HttpResponse<unknown>>;
  list: Paginator<unknown>;
};

export type HttpActionType = keyof HttpActionMap;
export type HttpAction = Action<HttpActionType>;

export class HttpActionDispatcher implements ActionDispatcher<HttpActionMap> {
  constructor(
    private readonly http: Http,
    private readonly hook: ActionDispatcherHook<HttpAction>,
  ) {}

  dispatch(
    action: Action<"fetch" | "create" | "update" | "remove">,
  ): Promise<HttpResponse<unknown>>;
  dispatch(action: Action<"list">): Paginator<unknown>;
  dispatch(action: Action<HttpActionType>): unknown {
    if (this.hook) {
      action = this.hook.beforeDispatch(action);
    }

    let result = this.hook.dispatch(action) as
      | Promise<HttpResponse<unknown>>
      | Paginator<unknown>
      | false;
    if (result !== false) {
      return result;
    }

    switch (action.type) {
      case "fetch": {
        result = this.http.get(action.path, action.data, action.meta);
        break;
      }
      case "create": {
        result = this.http.post(action.path, action.data, action.meta);
        break;
      }
      case "update": {
        result = this.http.put(action.path, action.data, action.meta);
        break;
      }
      case "remove": {
        result = this.http.delete(action.path, action.data, action.meta);
        break;
      }
      case "list": {
        result = new PaginatorHttp(this.http, action.path, action.data);
        break;
      }
    }

    /* eslint-disable unicorn/prefer-ternary, prettier/prettier */
    if (result instanceof Promise) {
      return result.then((result) => this.hook?.afterDispatch(action, result)) as Promise<HttpResponse<unknown>>;
    } else {
      return this.hook.afterDispatch(action, result) as Paginator<unknown>;
    }
    /* eslint-enable unicorn/prefer-ternary, prettier/prettier */
  }
}
