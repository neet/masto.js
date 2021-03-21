import { Http } from './http';
import { Response } from './http/http';

export class Paginator<Params, Result>
  implements AsyncIterableIterator<Result> {
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
    const response: Response<Result> = await this.http.request({
      method: 'get',
      path: params ? this.nextUrl : this.initialUrl,
      body: params ?? this.nextParams,
    });

    this.nextUrl = this.pluckNext(response.headers?.link as string);

    return {
      done: this.nextUrl != null,
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
