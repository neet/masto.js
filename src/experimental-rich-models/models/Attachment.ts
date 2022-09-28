import {
  Attachment as AttachmentProps,
  AttachmentMeta,
  AttachmentType,
} from '../../entities';
import {
  MediaAttachmentRepository,
  UpdateMediaAttachmentParams,
} from '../../repositories';

export class Attachment {
  constructor(
    private readonly _props: AttachmentProps,
    private readonly _repository: MediaAttachmentRepository,
  ) {}

  get id(): string {
    return this._props.id;
  }

  get type(): AttachmentType {
    return this._props.type;
  }

  get url(): URL | null {
    if (this._props.url != null) {
      return new URL(this._props.url);
    }

    return null;
  }

  get previewUrl(): URL {
    return new URL(this._props.previewUrl);
  }

  get remoteUrl(): URL | null {
    if (this._props.remoteUrl != null) {
      return new URL(this._props.remoteUrl);
    }

    return null;
  }

  get previewRemoteUrl(): URL | null {
    if (this._props.previewRemoteUrl != null) {
      return new URL(this._props.previewRemoteUrl);
    }

    return null;
  }

  get textUrl(): URL | null {
    if (this._props.textUrl != null) {
      return new URL(this._props.textUrl);
    }

    return null;
  }

  get meta(): AttachmentMeta | null {
    return this._props.meta ?? null;
  }

  get description(): string | null {
    return this._props.description ?? null;
  }

  get blurhash(): string | null {
    return this._props.blurhash ?? null;
  }

  async update(params: UpdateMediaAttachmentParams): Promise<Attachment> {
    const d = await this._repository.update(this.id, params);
    return new Attachment(d, this._repository);
  }
}
