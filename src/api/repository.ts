import type { Paginator } from '../paginator';

export interface DefaultPaginationParams {
  /** Return results older than this ID. */
  readonly maxId?: string | null;
  /** Return results newer than this ID. */
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
  ListParams = undefined,
> {
  readonly fetch?:
    | ((id: string) => Promise<Entity>)
    | ((params?: FetchParams) => Promise<Entity>);

  readonly list?: ListParams extends undefined
    ? () => Paginator<Entity[]>
    : (params?: ListParams) => Paginator<Entity[], ListParams>;

  readonly create?: (params: CreateParams) => Promise<Entity>;

  readonly update?:
    | ((id: string, params: UpdateParams) => Promise<Entity>)
    | ((params: UpdateParams) => Promise<Entity>);

  readonly remove?: (id: string) => Promise<void>;
}
