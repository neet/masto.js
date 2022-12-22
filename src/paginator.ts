import type { Http, Response } from './http';

export class Paginator<Params, Result>
  implements AsyncIterableIterator<Result>
{
  private nextUrl?: string;
  private nextParams?: Params;

  constructor(
    private readonly http: Http,
    readonly initialUrl: string,
    readonly initialParams?: Params,
  ) {
    this.nextUrl = initialUrl;
    this.nextParams = initialParams;
  }

  private pluckNext = (link: string) => {
    return link
      .match(/<(.+?)>; rel="next"/)?.[1]
      .replace(/^https?:\/\/[^/]+/, '');
  };

  async next(params?: Params): Promise<IteratorResult<Result>> {
    if (this.nextUrl == undefined) {
      return { done: true, value: undefined };
    }

    const response: Response<Result> = await this.http.request({
      method: 'GET',
      // if no params specified, use link header
      url: params ? this.initialUrl : this.nextUrl,
      params: params ?? this.nextParams,
    });

    this.nextUrl =
      typeof response.headers?.link === 'string'
        ? this.pluckNext(response.headers.link)
        : undefined;
    this.nextParams = {} as Params;

    return {
      done: false,
      value: response.data,
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
