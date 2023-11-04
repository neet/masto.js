import { snakeCase } from "change-case";

import {
  type Action,
  type Encoding,
  type HttpMetaParams,
} from "../../interfaces";

type PrimitiveAction = "fetch" | "create" | "update" | "remove" | "list";

type HttpRequestDraft = {
  readonly type: PrimitiveAction;
  readonly path: string;
  readonly data?: unknown;
  readonly meta?: HttpMetaParams<Encoding>;
};

class HttpActionType<T extends string> {
  constructor(private readonly type: T) {}

  isPrimitive(): this is HttpActionType<PrimitiveAction> {
    return ["fetch", "create", "update", "remove", "list"].includes(this.type);
  }

  toPrimitive(): PrimitiveAction {
    if (this.isPrimitive()) {
      return this.type;
    }

    switch (this.type) {
      case "lookup":
      case "verify_credentials": {
        return "fetch";
      }
      case "update_credentials": {
        return "update";
      }
      default: {
        return "create";
      }
    }
  }
}

export class HttpAction {
  private readonly type: HttpActionType<string>;

  constructor(private readonly action: Action) {
    this.type = new HttpActionType(action.type);
  }

  toRequest(): HttpRequestDraft {
    return {
      type: this.type.toPrimitive(),
      path: this.getPath(),
      data: this.action.data,
      meta: { ...this.action.meta, encoding: this.getEncoding() },
    };
  }

  private getPath(): string {
    const { type, path } = this.action;

    if (this.type.isPrimitive()) {
      return path;
    }

    return path + "/" + snakeCase(type);
  }

  private getEncoding(): Encoding {
    const { type, path } = this.action;

    if (
      type === "create" &&
      [
        "/api/v1/accounts",
        "/api/v1/email",
        "/api/v1/featured_tag",
        "/api/v1/media",
        "/api/v2/media",
      ].includes(path)
    ) {
      return "multipart-form";
    }

    if (type === "update" && path === "/api/v1/accounts/update_credentials") {
      return "multipart-form";
    }

    return "json";
  }
}
