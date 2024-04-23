import { type HttpMetaParams } from "../../../interfaces";
import { type Marker } from "../../entities/v1";

export interface FetchMarkersParams {
  /**
   * Array of markers to fetch.
   * String enum anyOf `home`, `notifications`.
   * If not provided, an empty object will be returned.
   */
  readonly timeline?: readonly Marker.Timeline[];
}

export type CreateMarkersParams = {
  /** ID of the last status read in the timeline. */
  readonly [key in Marker.Timeline]?: Pick<Marker.Item, "lastReadId">;
};

export interface MarkerRepository {
  /**
   * Get saved timeline position
   * @param params Parameters
   * @return Markers
   * @see https://docs.joinmastodon.org/methods/timelines/markers/
   */
  fetch(params?: FetchMarkersParams, meta?: HttpMetaParams): Promise<Marker>;

  /**
   * Save position in timeline
   * @param params Parameters
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  create(
    params: CreateMarkersParams,
    meta?: HttpMetaParams<"json">,
  ): Promise<Marker>;
}
