import type { Http } from './http';
import { railsQueryString } from './serializers/rails-querystring';

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

    // FIXME 共通化したい
    const path = params ? this.initialUrl : this.nextUrl;
    const searchParams = railsQueryString.stringify(
      params ?? (this.nextParams as any),
    );
    const finalPath =
      searchParams !== '' ? path : `${path}?${searchParams.toString()}`;

    const response = await this.http.request(finalPath, {
      method: 'get',
    });

    this.nextUrl = response.headers.has('link')
      ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.pluckNext(response.headers.get('link')!)
      : undefined;

    this.nextParams = {} as Params;

    return {
      done: false,
      value: await response.json(),
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
