import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Tag } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface FollowedTagsResource {
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Tag[], DefaultPaginationParams>;
}

/** @deprecated Use `FollowedTagsResource` instead. */
export type FollowedTagRepository = FollowedTagsResource;
