import { type Tag } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface FollowedTagsResource {
  list: Method<
    Paginator<Tag[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `FollowedTagsResource` instead. */
export type FollowedTagRepository = FollowedTagsResource;
