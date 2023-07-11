/* eslint-disable unicorn/no-thenable */
import parseLinkHeader from "parse-link-header";

import { type Http, type HttpMetaParams } from "../../interfaces";
import { type mastodon } from "../../mastodon";

type Rel = "next" | "prev";

export class PaginatorHttp<Entity, Params = undefined>
  implements mastodon.Paginator<Entity, Params>
{
  private readonly rel: Rel;

  constructor(
    private readonly http: Http,
    private nextPath?: string,
    private nextParams?: Params | string,
    private readonly meta?: HttpMetaParams,
  ) {
    const hasMinId =
      nextParams && typeof nextParams === "object" && "minId" in nextParams;
    this.rel = hasMinId ? "prev" : "next";
  }

  async next(): Promise<IteratorResult<Entity, undefined>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const response = await this.http.request({
      method: "GET",
      path: this.nextPath,
      search: this.nextParams as Record<string, unknown>,
      ...this.meta,
    });

    const nextUrl = this.getLink(response.headers.get("link"));
    this.nextPath = nextUrl?.pathname;
    this.nextParams = nextUrl?.search.replace(/^\?/, "");

    const data = response.data as Entity | undefined;
    const value =
      this.rel === "prev" && Array.isArray(data)
        ? data.reverse()
        : response.data;

    return {
      done: false,
      value: value as Entity,
    };
  }

  async return(
    value?: undefined | Promise<undefined>,
  ): Promise<IteratorResult<Entity, undefined>> {
    this.clear();
    return {
      done: true,
      value: await value,
    };
  }

  async throw(e: unknown): Promise<IteratorResult<Entity, undefined>> {
    this.clear();
    throw e;
  }

  then<TResult1 = Entity, TResult2 = never>(
    onfulfilled: (
      value: Entity,
    ) => TResult1 | PromiseLike<TResult1> = Promise.resolve.bind(Promise),
    onrejected: (
      reason: unknown,
    ) => TResult2 | PromiseLike<TResult2> = Promise.reject.bind(Promise),
  ): Promise<TResult1 | TResult2> {
    // we assume the first item won't be undefined
    return this.next().then((value) => onfulfilled(value.value!), onrejected);
  }

  values(): AsyncIterableIterator<Entity> {
    return this[Symbol.asyncIterator]();
  }

  [Symbol.asyncIterator](): AsyncIterator<
    Entity,
    undefined,
    Params | string | undefined
  > {
    return this as any as AsyncIterator<
      Entity,
      undefined,
      Params | string | undefined
    >;
  }

  private getLink(value?: string | null): URL | undefined {
    if (value == undefined) {
      return;
    }

    const parsed = parseLinkHeader(value)?.[this.rel]?.url;
    if (parsed == undefined) {
      return;
    }

    return new URL(parsed);
  }

  private clear() {
    this.nextPath = undefined;
    this.nextParams = undefined;
  }

  clone(): mastodon.Paginator<Entity, Params> {
    return new PaginatorHttp(
      this.http,
      this.nextPath,
      this.nextParams,
      this.meta,
    );
  }
}
