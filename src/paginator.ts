import { Http } from './http';
import { Response } from './http/http';

export interface Paginator<Params, Result> {
  next(params: Params): Promise<IteratorResult<Result>>;
  return<T, U>(value: U | Promise<U>): Promise<IteratorResult<T, U>>;
  throw<T, U>(error: unknown): Promise<IteratorResult<T, U>>;
  [Symbol.asyncIterator](): AsyncGenerator<Result, Result, Params | undefined>;
}

export class PaginatorImpl<Params, Result>
  implements Paginator<Params, Result>, AsyncIterableIterator<Result>
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

export function asyncMap<P, T, U>(
  fn: (x: T) => U,
  paginator: Paginator<P, T>,
): Paginator<P, U> {
  return {
    next: async (params) => {
      const x = await paginator.next(params);
      return {
        done: x.done,
        value: fn(x.value),
      };
    },
    return: paginator.return,
    throw: paginator.throw,
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
