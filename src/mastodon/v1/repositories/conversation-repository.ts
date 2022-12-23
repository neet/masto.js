import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Conversation } from '../entities';

export class ConversationRepository
  implements
    Repository<Conversation, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Show conversation
   * @param params Parameters
   * @return Array of Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @version({ since: '2.6.0' })
  list(
    params: DefaultPaginationParams = {},
  ): Paginator<Conversation[], DefaultPaginationParams> {
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
