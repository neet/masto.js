import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Poll } from '../entities';
import { Http } from '../http';
import { Repository } from './repository';

export interface VotePollParams {
  /** Array of own votes containing index for each option (starting from 0) */
  readonly choices: string[];
}

export class PollRepository implements Repository<Poll> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}
  /**
   * View a poll
   * @param id ID of the poll in the database
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls/
   */
  @version({ since: '2.8.0' })
  fetch(id: string) {
    return this.http.get<Poll>(`/api/v1/polls/${id}`);
  }

  /**
   * Vote on a poll
   * @param id ID of the poll in the database
   * @param params Parameters
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls/
   */
  @version({ since: '2.8.0' })
  vote(id: string, params: VotePollParams) {
    return this.http.post<Poll>(`/api/v1/polls/${id}/votes`, params);
  }
}
