import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Tag } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface FollowedTagRepository {
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Tag[], DefaultPaginationParams>;
}
