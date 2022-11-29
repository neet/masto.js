import type { DefaultPaginationParams, Repository } from './repository';

export abstract class IterableRepository<
  T = never,
  C = never,
  U = never,
  R = never,
  RMany = DefaultPaginationParams,
> implements Repository<T, C, U, R, RMany>
{
  abstract iterate(params?: RMany): AsyncIterableIterator<T[]>;

  /** @deprecated Use `iterate` instead */
  getIterator = this.iterate.bind(this);

  fetchMany(params?: RMany): Promise<IteratorResult<T[]>> {
    return this.iterate(params).next();
  }

  async *[Symbol.asyncIterator](): AsyncIterableIterator<T[]> {
    if (this.iterate == undefined) {
      yield* [];
    }
    yield* this.iterate();
  }
}
