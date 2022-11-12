import { lift } from '../utils/lift';
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

  fetchMany = lift(this.getIterator.bind(this));

  async *[Symbol.asyncIterator]() {
    if (this.getIterator != null) {
      yield* this.getIterator();
    } else {
      yield* [];
    }
  }
}
