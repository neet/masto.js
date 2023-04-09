import type { HttpMetaParams } from '../../../http';
import type { Poll } from '../entities';

export interface VotePollParams {
  /** Array of own votes containing index for each option (starting from 0) */
  readonly choices: readonly number[];
}

export interface PollRepository {
  select(id: string): {
    /**
     * View a poll
     * @return Poll
     * @see https://docs.joinmastodon.org/methods/statuses/polls#get
     */
    fetch(meta?: HttpMetaParams): Promise<Poll>;

    votes: {
      /**
       * Vote on a poll
       * @param params Parameters
       * @return Poll
       * @see https://docs.joinmastodon.org/methods/statuses/polls#vote
       */
      create(
        params: VotePollParams,
        meta?: HttpMetaParams<'json'>,
      ): Promise<Poll>;
    };
  };
}
