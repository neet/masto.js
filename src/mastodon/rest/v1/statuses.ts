import {
  type HttpMetaParams,
  type HttpResponse,
} from "../../../interfaces/index.js";
import {
  type Account,
  type Context,
  type PreviewCard,
  type ScheduledStatus,
  type Status,
  type StatusEdit,
  type StatusSource,
  type StatusVisibility,
  type Translation,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface FetchStatusesParams {
  /** The IDs of the Statuses in the database. */
  readonly id: readonly string[];
}

export interface QuoteApprovalPolicyRegistry {
  public: never;
  followers: never;
  nobody: never;
}

export type QuoteApprovalPolicy = keyof QuoteApprovalPolicyRegistry;

export interface CreateStatusParamsBase {
  /** ID of the status being replied to, if status is a reply */
  readonly inReplyToId?: string | null;
  /** ID of the status being quoted, if any. Will raise an error if the status does not exist, the author does not have access to it, or quoting is denied by Mastodon’s understanding of the attached quote policy. All posts except Private Mentions (direct visibility) are quotable by their author. Quoting a private post will restrict the quoting post’s visibility to private or direct (if the given visibility is public or unlisted, private will be used instead). An error will be returned when making a quote post with direct visibility and the quote author is not explicitly mentioned. If the status text doesn’t include a link to the quoted post, Mastodon will prepend a <p class="quote-inline">RE: <a href="…">…</a></p> paragraph for backward compatibility (such a paragraph will be hidden by Mastodon’s web interface). */
  readonly quotedStatusId?: string | null;
  /** Sets who is allowed to quote the status. When omitted, the user’s default setting will be used instead. Ignored if visibility is private or direct, in which case the policy will always be set to nobody.
   public = Anyone is allowed to quote this status and will have their quote automatically accepted, unless they are blocked.
   followers = Only followers and the author are allowed to quote this status, and will have their quote automatically accepted.
   nobody = Only the author is allowed to quote the status.*/
  readonly quoteApprovalPolicy?: QuoteApprovalPolicy | null;
  /** Mark status and attached media as sensitive? */
  readonly sensitive?: boolean | null;
  /** Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field. */
  readonly spoilerText?: string | null;
  /** Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct. */
  readonly visibility?: StatusVisibility | null;
  /** ISO 639 language code for this status. */
  readonly language?: string | null;
  /** https://github.com/mastodon/mastodon/pull/18350 */
  readonly allowedMentions?: readonly string[] | null;
}

export interface CreateStatusPollParam {
  /** Array of possible answers. If provided, `media_ids` cannot be used, and `poll[expires_in]` must be provided. */
  readonly options: readonly string[];
  /** Duration the poll should be open, in seconds. If provided, media_ids cannot be used, and poll[options] must be provided. */
  readonly expiresIn: number;
  /** Allow multiple choices? */
  readonly multiple?: boolean | null;
  /** Hide vote counts until the poll ends? */
  readonly hideTotals?: boolean | null;
}

export interface CreateStatusParamsWithStatus extends CreateStatusParamsBase {
  /** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */
  readonly status: string;
  /** Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used. */
  readonly mediaIds?: never | null;
  readonly poll?: CreateStatusPollParam | null;
}

export interface CreateStatusParamsWithMediaIds extends CreateStatusParamsBase {
  /** Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used. */
  readonly mediaIds: readonly string[];
  /** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */

  readonly status?: string | null;
  readonly poll?: never | null;
}

export type CreateStatusParams =
  | CreateStatusParamsWithStatus
  | CreateStatusParamsWithMediaIds;

export type CreateScheduledStatusParams = CreateStatusParams & {
  /** ISO 8601 Date-time at which to schedule a status. Providing this parameter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future. */
  readonly scheduledAt?: string | null;
};

interface UpdateStatusMediaAttribute {
  /** The ID of the media attachment to be modified */
  readonly id: string;
  /** A plain-text description of the media, for accessibility purposes. */
  readonly description?: string | null;
  /** Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 */
  readonly focus?: string | null;
  /** Custom thumbnail */
  readonly thumbnail?: Blob | string | null;
}

export type UpdateStatusParams = CreateStatusParams & {
  /** https://github.com/mastodon/mastodon/pull/20878 */
  readonly mediaAttributes?: readonly UpdateStatusMediaAttribute[] | null;
};

export interface ReblogStatusParams {
  /** any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI. */
  readonly visibility?: StatusVisibility | null;
}

export interface TranslateStatusParams {
  /** String (ISO 639 language code). The status content will be translated into this language. Defaults to the user’s current locale. */
  readonly lang?: string | null;
}

export interface Statuses$SelectContextResource {
  /**
   * View statuses above and below this status in the thread.
   * @return Context
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  fetch: Method<Context>;
}

export interface Statuses$SelectCardResource {
  /**
   * Preview card
   * @return Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   * @deprecated
   */
  fetch: Method<PreviewCard>;
}

export interface Statuses$SelectRebloggedByResource {
  /**
   * View who boosted a given status.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  list: Method<Paginator<Account[]>>;
}

export interface Statuses$SelectFavouritedByResource {
  /**
   * View who favourited a given status.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  list: Method<Paginator<Account[]>>;
}

export interface Statuses$SelectQuotesResource {
  /**
   * View quotes of a status.
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/statuses/#quotes
   */
  list: Method<Paginator<Status[]>>;
}

export interface Statuses$SelectHistoryResource {
  /**
   * Get all known versions of a status, including the initial and current states.
   * @returns StatusEdit
   * @see https://docs.joinmastodon.org/methods/statuses/#history
   */
  list: Method<Paginator<StatusEdit[]>>;
}

export interface Statuses$SelectSourceResource {
  /**
   * Obtain the source properties for a status so that it can be edited.
   * @returns StatusSource
   * @see https://docs.joinmastodon.org/methods/statuses/#source
   */
  fetch: Method<StatusSource>;
}

export interface Statuses$SelectResource {
  context: Statuses$SelectContextResource;
  card: Statuses$SelectCardResource;
  rebloggedBy: Statuses$SelectRebloggedByResource;
  favouritedBy: Statuses$SelectFavouritedByResource;
  quotes: Statuses$SelectQuotesResource;
  history: Statuses$SelectHistoryResource;
  source: Statuses$SelectSourceResource;

  /**
   * View information about a status.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  fetch: Method<Status>;

  /**
   * Update a status
   * @param params Parameters
   * @return Status. When scheduled_at is present, ScheduledStatus is returned instead.
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  update: Method<Status, UpdateStatusParams, HttpMetaParams<"json">>;

  /**
   * Delete one of your own statuses.
   * @return Status with source text and `media_attachments` or `poll`
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  remove: Method<Status>;

  /**
   * Add a status to your favourites list.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  favourite: Method<Status>;

  /**
   * Remove a status from your favourites list.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  unfavourite: Method<Status>;

  /**
   * Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  mute: Method<Status>;

  /**
   * Start receiving notifications again for the thread that this status is part of.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  unmute: Method<Status>;

  /**
   * Boost a status
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/#boost
   */
  reblog: Method<Status, ReblogStatusParams, HttpMetaParams<"json">>;

  /**
   * Undo a re-share of a status.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  unreblog: Method<Status>;

  /**
   * Feature one of your own public statuses at the top of your profile.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  pin: Method<Status>;

  /**
   * Un-feature a status from the top of your profile.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  unpin: Method<Status>;

  /**
   * Privately bookmark a status.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  bookmark: Method<Status>;

  /**
   * Remove a status from your private bookmarks.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  unbookmark: Method<Status>;

  /**
   * Translate the status content into some language.
   * @param params Form data parameters
   * @returns Translation
   */
  translate: Method<Translation, TranslateStatusParams>;
}

export interface StatusesResource {
  $select(id: string): Statuses$SelectResource;

  /**
   * Obtain information about multiple statuses.
   */
  fetch: Method<Status[], FetchStatusesParams>;

  /**
   * Post a new status.
   * @param params Parameters
   * @return Status. When scheduled_at is present, ScheduledStatus is returned instead.
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  create: {
    (
      params: CreateStatusParams,
      meta?: HttpMetaParams<"json">,
    ): Promise<Status>;
    (
      params: CreateScheduledStatusParams,
      meta?: HttpMetaParams<"json">,
    ): Promise<ScheduledStatus>;
    /** @experimental */
    $raw(
      params: CreateStatusParams,
      meta?: HttpMetaParams<"json">,
    ): Promise<HttpResponse<Status>>;
    /** @experimental */
    $raw(
      params: CreateScheduledStatusParams,
      meta?: HttpMetaParams<"json">,
    ): Promise<HttpResponse<ScheduledStatus>>;
  };
}

/** @deprecated Use `StatusesResource` instead. */
export type StatusRepository = StatusesResource;
