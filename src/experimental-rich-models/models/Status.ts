import { Status as StatusProps, StatusVisibility } from '../../entities';
import {
  AccountRepository,
  MediaAttachmentRepository,
  StatusRepository,
} from '../../repositories';
import { Account } from './Account';
import { Attachment } from './Attachment';

export class Status {
  constructor(
    private readonly _props: StatusProps,
    private readonly _statusRepository: StatusRepository,
    private readonly _accountRepository: AccountRepository,
    private readonly _mediaAttachmentRepository: MediaAttachmentRepository,
  ) {}

  get id(): string {
    return this._props.id;
  }

  get uri(): string {
    return this._props.uri;
  }
  get createdAt(): Date {
    return new Date(this._props.createdAt);
  }

  get account(): Account {
    // Which phase should i fetch the relationship
    return new Account(this._props.account, {} as any, this._accountRepository);
  }

  get content(): string {
    return this._props.content;
  }

  get visibility(): StatusVisibility {
    return this._props.visibility;
  }

  get sensitive(): boolean {
    return this._props.sensitive;
  }

  get spoilerText(): string {
    return this._props.spoilerText;
  }

  get mediaAttachments(): Attachment[] {
    return this._props.mediaAttachments.map((attachment) => {
      return new Attachment(attachment, this._mediaAttachmentRepository);
    });
  }

  async favourite(): Promise<Status> {
    const d = await this._statusRepository.favourite(this.id);
    return new Status(
      d,
      this._statusRepository,
      this._accountRepository,
      this._mediaAttachmentRepository,
    );
  }

  async unfavourite(): Promise<Status> {
    const d = await this._statusRepository.unfavourite(this.id);
    return new Status(
      d,
      this._statusRepository,
      this._accountRepository,
      this._mediaAttachmentRepository,
    );
  }

  async mute(): Promise<Status> {
    const d = await this._statusRepository.mute(this.id);
    return new Status(
      d,
      this._statusRepository,
      this._accountRepository,
      this._mediaAttachmentRepository,
    );
  }

  async unmute(): Promise<Status> {
    const d = await this._statusRepository.unmute(this.id);
    return new Status(
      d,
      this._statusRepository,
      this._accountRepository,
      this._mediaAttachmentRepository,
    );
  }
}
