/* eslint-disable unicorn/no-thenable */
import type { Http } from './http';
import { parseLink } from './utils/link';

type Direction = 'forward' | 'backward';

export class Paginator<Entity, Params = never>
  implements AsyncIterableIterator<Entity>, PromiseLike<Entity>
{
  constructor(
    private readonly http: Http,
    private nextPath?: string,
    private nextParams?: Params,
    private readonly direction: Direction = 'backward',
  ) {}

  async next(): Promise<IteratorResult<Entity>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const response = await this.http.request({
      requestInit: { method: 'GET' },
      path: this.nextPath,
      searchParams: new URLSearchParams(
        this.nextParams as Record<string, string>,
      ),
    });

    const { next, prev } = parseLink(response.headers.get('link'));

    if (this.direction === 'backward' && next != undefined) {
      const url = new URL(next);
      this.nextPath = url.pathname;
      this.nextParams = Object.fromEntries(
        url.searchParams.entries(),
      ) as Params;
    }

    if (this.direction === 'forward' && prev != undefined) {
      const url = new URL(prev);
      this.nextPath = url.pathname;
      this.nextParams = Object.fromEntries(
        url.searchParams.entries(),
      ) as Params;
    }

    if (
      (this.direction === 'backward' && next == undefined) ||
      (this.direction === 'forward' && prev == undefined)
    ) {
      this.nextPath = undefined;
      this.nextParams = undefined;
    }

    const value = (
      this.direction === 'backward'
        ? response.data
        : (response.data as Array<unknown>).reverse()
    ) as Entity;

    return {
      done: false,
      value,
    };
  }

  async return<T, U>(value: U | Promise<U>): Promise<IteratorResult<T, U>> {
    return {
      done: true,
      value: await value,
    };
  }

  async throw<T, U>(e: unknown): Promise<IteratorResult<T, U>> {
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
    return this.next().then((value) => onfulfilled(value.value), onrejected);
  }

  reverse(): Paginator<Entity, Params> {
    return new Paginator(this.http, this.nextPath, this.nextParams, 'forward');
  }

  [Symbol.asyncIterator](): AsyncGenerator<Entity, Entity, Params | undefined> {
    return this;
  }
}
