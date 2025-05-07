import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Status } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface ListTimelineParams extends DefaultPaginationParams {
  /** Show only local statuses? Defaults to false. */
  readonly local?: boolean | null;
  /** Show only statuses with media attached? Defaults to false. */
  readonly onlyMedia?: boolean | null;
  /** Remote only */
  readonly remote?: boolean | null;
}

export interface ListLinkTimelineParams extends ListTimelineParams {
  /** The URL of the trending article. */
  readonly url: string;
}

export interface TimelinesHomeResource {
  /**
   * View statuses from followed users.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  list(
    params?: ListTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListTimelineParams>;
}

export interface TimelinesPublicResource {
  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  list(
    params?: ListTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListTimelineParams>;
}

export interface TimelinesTag$SelectResource {
  /**
   * View public statuses containing the given hashtag.
   * @param hashtag Content of a #hashtag, not including # symbol.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines#tag
   */
  list(
    params?: ListTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListTimelineParams>;
}

export interface TimelinesTagResource {
  $select(hashtag: string): TimelinesTag$SelectResource;
}

export interface TimelinesList$SelectResource {
  /**
   * View statuses in the given list timeline.
   * @param id Local ID of the list in the database.
   * @param params Query parameter
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  list(
    params?: ListTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListTimelineParams>;
}

export interface TimelinesListResource {
  $select(id: string): TimelinesList$SelectResource;
}

export interface TimelinesDirectResource {
  /**
   * View statuses with a “direct” privacy, from your account or in your notifications.
   * @returns Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  list(
    params?: ListTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListTimelineParams>;
}

export interface TimelinesLinkResource {
  /**
   * View public statuses containing a link to the specified currently-trending article. This only lists statuses from people who have opted in to discoverability features.
   * @returns Array of {@link Status}
   * @see https://docs.joinmastodon.org/methods/timelines/#link
   */
  list(
    params: ListLinkTimelineParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], ListLinkTimelineParams>;
}

export interface TimelinesResource {
  home: TimelinesHomeResource;
  public: TimelinesPublicResource;
  tag: TimelinesTagResource;
  list: TimelinesListResource;
  direct: TimelinesDirectResource;
  link: TimelinesLinkResource;
}

/** @deprecated Use `TimelinesResource` instead. */
export type TimelineRepository = TimelinesResource;
