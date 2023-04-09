import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Announcement } from '../entities';

export class AnnouncementRepository
  implements
    Repository<Announcement, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Fetch announcements
   * @return Announcements
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  list(): Paginator<Announcement[]> {
    return new Paginator(this.http, '/api/v1/announcements');
  }

  /**
   * Dismiss announcement
   * @param id ID of the announcement
   * @return Nothing
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  dismiss(id: string): Promise<void> {
    return this.http.post<void>(`/api/v1/announcements/${id}/dismiss`);
  }

  /**
   * Add a reaction to an announcement
   * @param id ID of the announcement
   * @param name Emoji string
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  addReaction(id: string, name: string): Promise<void> {
    return this.http.put<void>(`/api/v1/announcements/${id}/reactions/${name}`);
  }

  /**
   * Remove a reaction from an announcement
   * @param id ID of the announcement
   * @param name Emoji string
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  removeReaction(id: string, name: string): Promise<void> {
    return this.http.delete<void>(
      `/api/v1/announcements/${id}/reactions/${name}`,
    );
  }
}
