export type Direction = "next" | "prev";

// eslint-disable-next-line prettier/prettier
export interface Paginator<Entity, Params = undefined> extends PromiseLike<Entity> { 
  getDirection(): Direction;
  setDirection(direction: Direction): void;

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
