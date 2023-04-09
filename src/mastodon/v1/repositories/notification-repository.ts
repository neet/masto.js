import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Notification, NotificationType } from '../entities';

export interface ListNotificationsParams extends DefaultPaginationParams {
  /** Instead of specifying every known type to exclude, you can specify only the types you want. */
  readonly types?: NotificationType[] | null;
  /** ID of the account */
  readonly accountId?: string | null;
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  readonly excludeTypes?: NotificationType[] | null;
}

export class NotificationRepository
  implements
    Repository<Notification, never, never, never, ListNotificationsParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Notifications concerning the user.
   * This API returns Link headers containing links to the next/previous page.
   * However, the links can also be constructed dynamically using query params and `id` values.
   * @param params Query parameter
   * @return Array of Notification
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  list(
    params?: ListNotificationsParams,
  ): Paginator<Notification[], ListNotificationsParams> {
    return new Paginator(this.http, '/api/v1/notifications', params);
  }

  /**
   * View information about a notification with a given ID.
   * @param id ID of the notification in the database.
   * @return Notification
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  fetch(id: string): Promise<Notification> {
    return this.http.get<Notification>(`/api/v1/notifications/${id}`);
  }

  /**
   * Clear all notifications from the server.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  clear(): Promise<void> {
    return this.http.post<void>('/api/v1/notifications/clear');
  }

  /**
   * Clear a single notification from the server.
   * @param id ID of the notification to be cleared
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  dismiss(id: string): Promise<void> {
    return this.http.post<void>(`/api/v1/notifications/${id}/dismiss`);
  }
}
