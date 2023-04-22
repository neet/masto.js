/* eslint-disable unicorn/no-thenable */
import type { Http, HttpMetaParams } from './http';

export class Paginator<Entity, Params = undefined>
  implements AsyncIterableIterator<Entity>, PromiseLike<Entity>
{
  constructor(
    private readonly http: Http,
    private nextPath?: string,
    private nextParams?: string | Params,
    private readonly meta: HttpMetaParams = {},
  ) {}

  async next(): Promise<IteratorResult<Entity, undefined>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const response = await this.http.request({
      method: 'GET',
      path: this.nextPath,
      search: this.nextParams as Record<string, string>,
      meta: this.meta,
    });

    const next = this.pluckNext(response.headers.get('link'))?.split('?');
    this.nextPath = next?.[0];
    this.nextParams = next?.[1];

    return {
      done: false,
      value: response.data as Entity,
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

  [Symbol.asyncIterator](): AsyncGenerator<
    Entity,
    undefined,
    string | undefined
  > {
    return this;
  }

  private clear() {
    this.nextPath = undefined;
    this.nextParams = undefined;
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

  clone(): Paginator<Entity, Params> {
    return new Paginator(this.http, this.nextPath, this.nextParams, this.meta);
  }
}
