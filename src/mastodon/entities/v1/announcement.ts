import { type CustomEmoji } from "./custom-emoji";
import { type Reaction } from "./reaction";
import { type Tag } from "./tag";

export interface Announcement {
  id: string;
  content: string;
  startsAt: string;
  endsAt: string;
  allDay: boolean;
  publishedAt: string;
  updatedAt: string;
  mentions: Announcement.Account[];
  statuses: Announcement.Status[];
  tags: Tag[];
  emojis: CustomEmoji[];
  reactions: Reaction[];
}

export namespace Announcement {
  export interface Account {
    id: string;
    username: string;
    url: string;
    acct: string;
  }

  export interface Status {
    id: string;
    url: string;
  }
}

/** @deprecated Use Announcement.Account */
export type AnnouncementAccount = Announcement.Account;

/** @deprecated Use Announcement.Status */
export type AnnouncementStatus = Announcement.Status;
