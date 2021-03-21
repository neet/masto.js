import { deprecated, version } from '../decorators';
import { Attachment } from '../entities';
import { Http } from '../http';
import { Repository } from '../repository';
import { delay, timeout } from '../utils';

export interface CreateMediaAttachmentParams {
  /** The file to be attached, using multipart form data. */
  readonly file: unknown;
  /** A plain-text description of the media, for accessibility purposes. */
  readonly description?: string | null;
  /** Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 */
  readonly focus?: string | null;
  /** Custom thumbnail */
  readonly thumbnail?: unknown | null;
}

export type UpdateMediaAttachmentParams = Partial<CreateMediaAttachmentParams>;

export class MediaAttachmentRepository
  implements
    Repository<
      Attachment,
      CreateMediaAttachmentParams,
      UpdateMediaAttachmentParams
    > {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  @deprecated('Use Masto.media#create instead')
  @version({ since: '0.0.0', until: '3.1.3' })
  v1__create(params: CreateMediaAttachmentParams) {
    return this.http.post<Attachment>(`/api/v1/media`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  @version({ since: '3.1.3' })
  create(params: CreateMediaAttachmentParams) {
    return this.http.post<Attachment>(`/api/v2/media`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Fetches an attachment to be used with a new status.
   * @param id ID of the attachment
   * @see https://github.com/tootsuite/mastodon/pull/13210
   */
  @version({ since: '3.1.3' })
  fetch(id: string) {
    return this.http.get<Attachment>(`/api/v1/media/${id}`);
  }

  /**
   * Update an Attachment, before it is attached to a status and posted.
   * @param id The id of the Attachment entity to be updated
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  @version({ since: '0.0.0' })
  update(id: string, params: UpdateMediaAttachmentParams): Promise<Attachment> {
    return this.http.put(`/api/v1/media/${id}`, params);
  }

  /**
   * @experimental
   * @param id ID of the media
   * @param interval interval of polling
   * @returns Media attachment that has done processing
   */
  async waitFor(id: string, interval = 1000) {
    return timeout(
      (async () => {
        let media: Attachment | null = null;

        while (media == null) {
          await delay(interval);
          const processing = await this.fetch(id);

          if (processing.url != null) {
            media = processing;
          }
        }

        return media;
      })(),
      // TODO: fix
      3000,
    );
  }
}
