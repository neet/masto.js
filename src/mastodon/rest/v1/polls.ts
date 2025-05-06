import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Poll } from "../../entities/v1/index.js";

export interface VotePollParams {
  /** Array of own votes containing index for each option (starting from 0) */
  readonly choices: readonly number[];
}

export interface Polls$SelectVotesResource {
  /**
   * Vote on a poll
   * @param params Parameters
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls#vote
   */
  create(params: VotePollParams, meta?: HttpMetaParams<"json">): Promise<Poll>;
}

export interface Polls$SelectResource {
  votes: Polls$SelectVotesResource;

  /**
   * View a poll
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls#get
   */
  fetch(meta?: HttpMetaParams): Promise<Poll>;
}

export interface PollsResource {
  $select(id: string): Polls$SelectResource;
}

/** @deprecated Use `PollsResource` instead */
export type PollRepository = PollsResource;
