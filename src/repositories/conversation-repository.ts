import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Conversation } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { IterableRepository } from './iterable-repository';
import { DefaultPaginationParams } from './repository';

export class ConversationRepository extends IterableRepository<Conversation> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {
    super();
  }

  /**
   * Show conversation
   * @param params Parameters
   * @return Array of Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @version({ since: '2.6.0' })
  getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Conversation[]> {
    return new Paginator(this.http, '/api/v1/conversations', params);
  }

  /**
   * Remove conversation
   * @param id ID of the conversation in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @version({ since: '2.6.0' })
  remove(id: string): Promise<void> {
    return this.http.delete<void>(`/api/v1/conversations/${id}`);
  }

  /**
   * Mark as read
   * @param id ID of the conversation in the database
   * @return Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @version({ since: '2.6.0' })
  read(id: string): Promise<Conversation> {
    return this.http.post<Conversation>(`/api/v1/conversations/${id}/read`);
  }
}
