import { Relationship as RelationshipProps } from '../../entities';

export class Relationship {
  constructor(private readonly _props: RelationshipProps) {}

  get id() {
    return this._props.id;
  }

  get following() {
    return this._props.following;
  }

  get requested() {
    return this._props.requested;
  }

  get endorsed() {
    return this._props.endorsed;
  }

  get followedBy() {
    return this._props.followedBy;
  }

  get muting() {
    return this._props.muting;
  }

  get mutingNotifications() {
    return this._props.mutingNotifications;
  }

  get showingReblogs() {
    return this._props.showingReblogs;
  }

  get blocking() {
    return this._props.blocking;
  }

  get domainBlocking() {
    return this._props.domainBlocking;
  }

  get blockedBy() {
    return this._props.blockedBy;
  }

  get note() {
    return this._props.note;
  }
}
