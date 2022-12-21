/* eslint-disable unicorn/no-thenable */
import type { Http } from './http';

export class Paginator<Entity, Params = never>
  implements AsyncIterableIterator<Entity>, PromiseLike<Entity>
{
  private nextPath?: string;
  private nextParams?: Params;

  constructor(
    private readonly http: Http,
    private readonly initialPath: string,
    initialParams?: Params,
  ) {
    this.nextPath = this.initialPath;
    this.nextParams = initialParams;
  }

  private pluckNext = (link: string) => {
    return link
      .match(/<(.+?)>; rel="next"/)?.[1]
      .replace(/^https?:\/\/[^/]+/, '');
  };

  async next(): Promise<IteratorResult<Entity>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const response = await this.http.request({
      requestInit: { method: 'GET' },
      path: this.nextPath,
      searchParams: this.nextParams as Record<string, unknown>,
    });

    this.nextPath =
      typeof response.headers.get('link') === 'string'
        ? this.pluckNext(response.headers.get('link') as string)
        : undefined;
    this.nextParams = {} as Params;

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
  ): PromiseLike<TResult1 | TResult2> {
    return this.next().then((value) => onfulfilled(value.value), onrejected);
  }

  [Symbol.asyncIterator](): AsyncGenerator<Entity, Entity, Params | undefined> {
    return this;
  }
}
