import { Http } from './http';
import { Response } from './http/http';

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
    return link?.match(/<(.+?)>; rel="next"/)?.[1];
  };

  async next(params?: Params): Promise<IteratorResult<Result>> {
    if (this.nextUrl == null) {
      return { done: true, value: null };
    }

    const response: Response<Result> = await this.http.request({
      method: 'get',
      // if no params specified, use link header
      url: params ? this.initialUrl : this.nextUrl,
      data: params ?? this.nextParams,
    });

    this.nextUrl = this.pluckNext(response.headers?.link as string);

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
