/* eslint-disable unicorn/no-thenable */
import { type Http, type HttpMetaParams } from "../../interfaces/index.js";
import { type mastodon } from "../../mastodon/index.js";
import { parseLinkHeader } from "../../utils/index.js";

export class PaginatorHttp<TEntity, TParams = undefined>
  implements mastodon.Paginator<TEntity, TParams>
{
  constructor(
    private readonly http: Http,
    private readonly raw: boolean,
    private path?: string,
    private params?: TParams | string,
    private readonly meta?: HttpMetaParams,
    private readonly direction: mastodon.Direction = "next",
  ) {}

  async *values(): AsyncIterableIterator<TEntity> {
    let path = this.path;
    let params = this.params;

    while (path != undefined) {
      const response = await this.http.request({
        method: "GET",
        path,
        search: params as Record<string, unknown>,
        ...this.meta,
      });

      const nextUrl = this.getLink(response.headers.get("link"));
      path = nextUrl?.pathname;
      params = nextUrl?.search.replace(/^\?/, "");

      const data = (this.raw ? response : response.data) as TEntity;

      yield data;
    }
  }

  then<TResult1 = TEntity, TResult2 = never>(
    onfulfilled: (
      value: TEntity,
    ) => TResult1 | PromiseLike<TResult1> = Promise.resolve.bind(Promise),
    onrejected: (
      reason: unknown,
    ) => TResult2 | PromiseLike<TResult2> = Promise.reject.bind(Promise),
  ): Promise<TResult1 | TResult2> {
    return this.values()
      .next()
      .then((value) => onfulfilled(value.value), onrejected);
  }

  getDirection(): mastodon.Direction {
    return this.direction;
  }

  setDirection(direction: mastodon.Direction): PaginatorHttp<TEntity, TParams> {
    return new PaginatorHttp(
      this.http,
      this.raw,
      this.path,
      this.params,
      this.meta,
      direction,
    );
  }

  [Symbol.asyncIterator](): AsyncIterator<
    TEntity,
    undefined,
    TParams | string | undefined
  > {
    return this.values();
  }

  private getLink(value?: string | null): URL | undefined {
    if (!value) {
      return;
    }

    const parsed = parseLinkHeader(value).get(this.direction);
    if (!parsed) {
      return;
    }

    return new URL(parsed);
  }
}
