import { Account as AccountProps } from '../../entities';
import { asyncMap, Paginator } from '../../paginator';
import { AccountRepository, FollowAccountParams } from '../../repositories';
import { DefaultPaginationParams } from '../../repository';
import { Relationship } from './Relationship';

export class Account {
  constructor(
    private readonly _props: AccountProps,
    readonly relationship: Relationship,
    private readonly _repository: AccountRepository,
  ) {}

  get id(): string {
    return this._props.id;
  }

  get username(): string {
    return this._props.username;
  }

  get acct(): string {
    return this._props.acct;
  }

  get url(): URL {
    return new URL(this._props.url);
  }

  get displayName(): string {
    return this._props.displayName;
  }

  get note(): string {
    return this._props.note;
  }

  get avatar(): URL {
    return new URL(this._props.avatar);
  }

  get avatarStatic(): URL {
    return new URL(this._props.avatarStatic);
  }

  get header(): URL {
    return new URL(this._props.header);
  }

  get headerStatic(): URL {
    return new URL(this._props.headerStatic);
  }

  get locked(): boolean {
    return this.locked;
  }

  // emojis

  get discoverable(): boolean {
    return this._props.discoverable;
  }

  get createdAt(): Date {
    return new Date(this._props.createdAt);
  }

  get statusesCount(): number {
    return this._props.statusesCount;
  }

  get followersCount(): number {
    return this._props.followersCount;
  }

  get followingCount(): number {
    return this._props.followingCount;
  }

  get lastStatusAt(): Date {
    return new Date(this._props.lastStatusAt);
  }

  get moved(): boolean | null {
    return this.moved ?? null;
  }

  // fields

  get bot(): boolean | null {
    return this.bot ?? null;
  }

  toJSON(): AccountProps {
    return this._props;
  }

  async follow(params: FollowAccountParams): Promise<Account> {
    const d = await this._repository.follow(this.id, params);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  async unfollow(params: FollowAccountParams): Promise<Account> {
    const d = await this._repository.unfollow(this.id, params);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  async block(): Promise<Account> {
    const d = await this._repository.block(this.id);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  async unblock(): Promise<Account> {
    const d = await this._repository.unblock(this.id);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  async pin(): Promise<Account> {
    const d = await this._repository.pin(this.id);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  async unpin(): Promise<Account> {
    const d = await this._repository.unpin(this.id);
    return new Account(this._props, new Relationship(d), this._repository);
  }

  followers(
    params: DefaultPaginationParams = {},
  ): Paginator<DefaultPaginationParams, Account[]> {
    return asyncMap(
      (xs) =>
        xs.map((x) => new Account(x, this.relationship, this._repository)),
      this._repository.getFollowersIterable(this.id, params),
    );
  }

  following(
    params: DefaultPaginationParams = {},
  ): Paginator<DefaultPaginationParams, Account[]> {
    return asyncMap(
      (xs) =>
        xs.map((x) => new Account(x, this.relationship, this._repository)),
      this._repository.getFollowingIterable(this.id, params),
    );
  }
}
