import {
  type Action,
  type ActionDispatcher,
  type Http,
} from "../../interfaces";
import { type mastodon } from "../../mastodon";
import { sleep } from "../../utils";
import { MastoHttpError, MastoTimeoutError } from "../errors";
import { HttpAction } from "./action-http";
import { PaginatorHttp } from "./paginator-http";

export interface HttpActionDispatcherParams {
  readonly mediaTimeout?: number;
}

export class HttpActionDispatcher implements ActionDispatcher {
  constructor(
    private readonly http: Http,
    private readonly params: HttpActionDispatcherParams = {},
  ) {}

  dispatch<T>(action: Action): T | Promise<T> {
    const httpAction = new HttpAction(action);
    return this.dispatchHttp(httpAction);
  }

  dispatchHttp<T>(action: HttpAction): T | Promise<T> {
    const req = action.toRequest();

    switch (req.type) {
      case "fetch": {
        return this.http.get(req.path, req.data, req.meta);
      }
      case "create": {
        if (req.path === "/api/v2/media") {
          return this.http
            .post<mastodon.v1.MediaAttachment>(req.path, req.data, req.meta)
            .then((media) => {
              return this.waitForMediaAttachment(media.id) as T;
            });
        }
        return this.http.post(req.path, req.data, req.meta);
      }
      case "update": {
        return this.http.patch(req.path, req.data, req.meta);
      }
      case "remove": {
        return this.http.delete(req.path, req.data, req.meta);
      }
      case "list": {
        return new PaginatorHttp(this.http, req.path, req.data) as T;
      }
    }
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
