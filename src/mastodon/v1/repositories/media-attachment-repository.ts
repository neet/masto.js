import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import type { Repository } from '../../repository';
import type { MediaAttachment } from '../entities';

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
      MediaAttachment,
      CreateMediaAttachmentParams,
      UpdateMediaAttachmentParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  /* istanbul ignore next */
  create(params: CreateMediaAttachmentParams): Promise<MediaAttachment> {
    return this.http.post<MediaAttachment>(`/api/v1/media`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Fetches an attachment to be used with a new status.
   * @param id ID of the attachment
   * @see https://github.com/tootsuite/mastodon/pull/13210
   */
  fetch(id: string): Promise<MediaAttachment> {
    return this.http.get<MediaAttachment>(`/api/v1/media/${id}`);
  }

  /**
   * Update an Attachment, before it is attached to a status and posted.
   * @param id The id of the Attachment entity to be updated
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  update(
    id: string,
    params: UpdateMediaAttachmentParams,
  ): Promise<MediaAttachment> {
    return this.http.put<MediaAttachment>(`/api/v1/media/${id}`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
