import { snakeCase } from "change-case";

import {
  type Action,
  type ActionDispatcher,
  type Encoding,
  type Http,
  type HttpMetaParams,
} from "../../interfaces";
import { type mastodon } from "../../mastodon";
import { sleep } from "../../utils";
import { MastoHttpError, MastoTimeoutError } from "../errors";
import { PaginatorHttp } from "./paginator-http";

type PrimitiveAction = "fetch" | "create" | "update" | "remove" | "list";

export interface HttpActionDispatcherParams {
  readonly mediaTimeout?: number;
}

export class HttpActionDispatcher implements ActionDispatcher {
  constructor(
    private readonly http: Http,
    private readonly params: HttpActionDispatcherParams = {},
  ) {}

  dispatch<T>(action: Action): T | Promise<T> {
    const actionType = this.toPrimitiveAction(action.type);
    const path = this.isPrimitiveAction(action.type)
      ? action.path
      : action.path + "/" + snakeCase(action.type);
    const encoding = this.inferEncoding(actionType, path);
    const meta: HttpMetaParams<Encoding> = { ...action.meta, encoding };

    switch (actionType) {
      case "fetch": {
        return this.http.get(path, action.data, meta);
      }
      case "create": {
        if (path === "/api/v2/media") {
          return this.http
            .post<mastodon.v1.MediaAttachment>(path, action.data, meta)
            .then((media) => {
              return this.waitForMediaAttachment(media.id) as T;
            });
        }
        return this.http.post(path, action.data, meta);
      }
      case "update": {
        return this.http.patch(path, action.data, meta);
      }
      case "remove": {
        return this.http.delete(path, action.data, meta);
      }
      case "list": {
        return new PaginatorHttp(this.http, path, action.data) as T;
      }
    }
  }

  private isPrimitiveAction(action: string): action is PrimitiveAction {
    switch (action) {
      case "fetch":
      case "create":
      case "update":
      case "remove":
      case "list": {
        return true;
      }
      default: {
        return false;
      }
    }
  }

  private toPrimitiveAction(action: string): PrimitiveAction {
    if (this.isPrimitiveAction(action)) {
      return action;
    }

    switch (action) {
      case "lookup":
      case "verifyCredentials": {
        return "fetch";
      }
      case "updateCredentials": {
        return "update";
      }
      default: {
        return "create";
      }
    }
  }

  private inferEncoding(action: PrimitiveAction, path: string): Encoding {
    if (
      (action === "create" && path === "/api/v1/accounts") ||
      (action === "update" && path === "/api/v1/accounts/update_credentials") ||
      (action === "create" && path === "/api/v1/email") ||
      (action === "create" && path === "/api/v1/featured_tag") ||
      (action === "create" && path === "/api/v1/media") ||
      (action === "create" && path === "/api/v2/media")
    ) {
      return "multipart-form";
    }

    return "json";
  }

  private get mediaTimeout(): number {
    return this.params.mediaTimeout ?? 60 * 1000;
  }

  private waitForMediaAttachment = async (
    id: string,
  ): Promise<mastodon.v1.MediaAttachment> => {
    let media: mastodon.v1.MediaAttachment | undefined;
    const signal = AbortSignal.timeout(this.mediaTimeout);

    while (media == undefined) {
      if (signal.aborted) {
        throw new MastoTimeoutError(
          `Media processing timed out of ${this.mediaTimeout}ms`,
        );
      }

      try {
        await sleep(1000);

        const processing = await this.http.get<mastodon.v1.MediaAttachment>(
          `/api/v1/media/${id}`,
        );

        if (processing.url != undefined) {
          media = processing;
        }
      } catch (error) {
        if (error instanceof MastoHttpError && error.statusCode === 404) {
          continue;
        }
        throw error;
      }
    }

    return media;
  };
}
