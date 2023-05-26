import type { HttpMetaParams } from '../../../http';
import type { Paginator } from '../../../paginator';
import type { Notification, NotificationType } from '../../entities/v1';
import type { DefaultPaginationParams } from '../../repository';

export interface ListNotificationsParams extends DefaultPaginationParams {
  /** Instead of specifying every known type to exclude, you can specify only the types you want. */
  readonly types?: readonly NotificationType[] | null;
  /** ID of the account */
  readonly accountId?: string | null;
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  readonly excludeTypes?: readonly NotificationType[] | null;
}

export interface NotificationRepository {
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
    meta?: HttpMetaParams<'json'>,
  ): Paginator<Notification[], ListNotificationsParams>;

  select(id: string): {
    /**
     * View information about a notification with a given ID.
     * @return Notification
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    fetch(meta?: HttpMetaParams): Promise<Notification>;

    /**
     * Clear a single notification from the server.
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/notifications/
     */
    dismiss(meta?: HttpMetaParams): Promise<void>;
  };

  /**
   * Clear all notifications from the server.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  clear(meta?: HttpMetaParams): Promise<void>;
}
