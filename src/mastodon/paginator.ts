// eslint-disable-next-line prettier/prettier
export interface Paginator<Entity, Params = undefined> extends PromiseLike<Entity> { 
  clone(): Paginator<Entity, Params>;

  next(params?: Params | string): Promise<IteratorResult<Entity, undefined>>;

  return(
    value: undefined | PromiseLike<undefined>,
  ): Promise<IteratorResult<Entity, undefined>>;

  throw(e?: unknown): Promise<IteratorResult<Entity, undefined>>;

  values(): AsyncIterableIterator<Entity>;

  [Symbol.asyncIterator](): AsyncIterator<
    Entity,
    undefined,
    Params | string | undefined
  >;
}
