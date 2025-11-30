import { type HttpMetaParams } from "../../../interfaces/index.js";
import {
  type Marker,
  type MarkerItem,
  type MarkerTimeline,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";

export interface FetchMarkersParams {
  /**
   * Array of markers to fetch.
   * String enum anyOf `home`, `notifications`.
   * If not provided, an empty object will be returned.
   */
  readonly timeline?: readonly MarkerTimeline[] | null;
}

export type CreateMarkersParams = {
  /** ID of the last status read in the timeline. */
  readonly [key in MarkerTimeline]?: Pick<MarkerItem, "lastReadId">;
};

export interface MarkersResource {
  /**
   * Get saved timeline position
   * @param params Parameters
   * @return Markers
   * @see https://docs.joinmastodon.org/methods/timelines/markers/
   */
  fetch: Method<Marker, FetchMarkersParams>;

  /**
   * Save position in timeline
   * @param params Parameters
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  create: Method<Marker, CreateMarkersParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `MarkersResource` instead */
export type MarkerRepository = MarkersResource;
