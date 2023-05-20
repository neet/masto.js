/* eslint-disable unicorn/no-thenable */
import parseLinkHeader from 'parse-link-header';

import type { Http, HttpMetaParams } from './http';

type Rel = 'next' | 'prev';

/* eslint-disable @typescript-eslint/no-explicit-any */
const mixins =
  (globalThis as any).AsyncIterator == undefined
    ? class {}
    : (globalThis as any).AsyncIterator;
/* eslint-enable @typescript-eslint/no-explicit-any */

export class Paginator<Entity, Params = undefined>
  extends mixins
  implements PromiseLike<Entity>
{
  private readonly rel: Rel;

  constructor(
    private readonly http: Http,
    private nextPath?: string,
    private nextParams?: Params | string,
    private readonly meta?: HttpMetaParams,
  ) {
    super();

    const hasMinId =
      nextParams && typeof nextParams === 'object' && 'minId' in nextParams;
    this.rel = hasMinId ? 'prev' : 'next';
  }

  async next(): Promise<IteratorResult<Entity, undefined>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const response = await this.http.request({
      method: 'GET',
      path: this.nextPath,
      search: this.nextParams as Record<string, unknown>,
      ...this.meta,
    });

    const nextUrl = this.getLink(response.headers.get('link'));
    this.nextPath = nextUrl?.pathname;
    this.nextParams = nextUrl?.search?.replace(/^\?/, '');

    const data = response.data as Entity | undefined;
    const value =
      this.rel === 'prev' && Array.isArray(data)
        ? data?.reverse()
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
    ) => TResult1 | PromiseLike<TResult1> = Promise.resolve,
    onrejected: (
      reason: unknown,
    ) => TResult2 | PromiseLike<TResult2> = Promise.reject,
  ): Promise<TResult1 | TResult2> {
    // we assume the first item won't be undefined
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.next().then((value) => onfulfilled(value.value!), onrejected);
  }

  [Symbol.asyncIterator](): AsyncIterator<
    Entity,
    undefined,
    Params | string | undefined
  > {
    // TODO: Use polyfill on demand
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  clone(): Paginator<Entity, Params> {
    return new Paginator(this.http, this.nextPath, this.nextParams, this.meta);
  }
}
