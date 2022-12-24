/* eslint-disable unicorn/no-thenable */
import type { Http } from './http';

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

    const next = this.pluckNext(response.headers.get('link'))?.split('?');
    this.nextPath = next?.[0];
    this.nextParams = Object.fromEntries(
      new URLSearchParams(next?.[1]).entries(),
    ) as Params;

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

  private pluckNext = (link: string | null): string | undefined => {
    if (link == undefined) {
      return undefined;
    }

    const path = link
      .match(/<(.+?)>; rel="next"/)?.[1]
      .replace(/^https?:\/\/[^/]+/, '');

    return path;
  };
}
