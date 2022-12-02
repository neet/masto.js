import type { Http } from './http';

export class Paginator<Params, Result>
  implements AsyncIterableIterator<Result>
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

  async next(params?: Params): Promise<IteratorResult<Result>> {
    if (this.nextPath == undefined) {
      return { done: true, value: undefined };
    }

    const reset = params != undefined;
    const response = await this.http.request({
      path: reset ? this.initialPath : this.nextPath,
      searchParams: (params ?? this.nextParams) as Record<string, unknown>,
      requestInit: { method: 'GET' },
    });

    this.nextPath =
      typeof response.headers.get('link') === 'string'
        ? this.pluckNext(response.headers.get('link') as string)
        : undefined;
    this.nextParams = {} as Params;

    return {
      done: false,
      value: response.data as Result,
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

  [Symbol.asyncIterator](): AsyncGenerator<Result, Result, Params | undefined> {
    return this;
  }
}
