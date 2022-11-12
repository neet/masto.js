export interface DefaultPaginationParams {
  /** **Internal parameter.** Use HTTP Link header from response for pagination. */
  readonly maxId?: string | null;
  /** **Internal parameter.** Use HTTP Link header from response for pagination. */
  readonly sinceId?: string | null;
  /** Get a list of items with ID greater than this value excluding this ID */
  readonly minId?: string | null;
  /** Maximum number of results to return per page. Defaults to 40. NOTE: Pagination is done with the Link header from the response. */
  readonly limit?: number | null;
}

export interface Repository<
  Entity,
  CreateParams = never,
  UpdateParams = never,
  FetchParams = never,
  PaginationParams = DefaultPaginationParams,
> {
  readonly [Symbol.asyncIterator]?: () => AsyncIterableIterator<Entity[]>;

  readonly getIterator?: (
    params?: PaginationParams,
  ) => AsyncIterableIterator<Entity[]>;

  readonly fetch?:
    | ((id: string) => Promise<Entity>)
    | ((params?: FetchParams) => Promise<Entity>);

  readonly fetchMany?: (
    params?: PaginationParams,
  ) => Promise<IteratorResult<Entity[]>>;

  readonly fetchAll?: (params?: FetchParams) => Promise<Entity[]>;

  readonly create?: (params: CreateParams) => Promise<Entity>;

  readonly update?:
    | ((id: string, params: UpdateParams) => Promise<Entity>)
    | ((params: UpdateParams) => Promise<Entity>);

  readonly delete?: (id: string) => Promise<void>;
}
