import { DefaultPaginationParams, Repository } from './repository';

export abstract class IterableRepository<
  T = never,
  C = never,
  U = never,
  R = never,
  RMany = DefaultPaginationParams,
> implements Repository<T, C, U, R, RMany>
{
  abstract getIterator(params?: RMany): AsyncIterableIterator<T[]>;

  fetchMany(params?: RMany): Promise<IteratorResult<T[]>> {
    return this.getIterator(params).next();
  }

  async *[Symbol.asyncIterator]() {
    if (this.getIterator != null) {
      yield* this.getIterator();
    } else {
      yield* [];
    }
  }
}
