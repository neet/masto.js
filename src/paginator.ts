/* eslint-disable unicorn/no-thenable */
import type { Http } from './http';
import { parseLink } from './utils/link';

export class Paginator<Entity, Params = never>
  implements AsyncIterableIterator<Entity>, PromiseLike<Entity>
{
  private nextPath?: string;
  private nextParams?: Params;

  constructor(
    private readonly http: Http,
    initialPath: string,
    initialParams?: Params,
  ) {
    this.nextPath = initialPath;
    this.nextParams = initialParams;
  }

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

    const { next } = parseLink(response.headers.get('link'));
    if (next != undefined) {
      const url = new URL(next);
      this.nextPath = url.pathname;
      this.nextParams = Object.fromEntries(
        url.searchParams.entries(),
      ) as Params;
    }

    return {
      done: false,
      value: response.data as Entity,
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

  [Symbol.asyncIterator](): AsyncGenerator<Entity, Entity, Params | undefined> {
    return this;
  }
}
