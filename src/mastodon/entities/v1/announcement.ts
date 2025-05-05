import { type CustomEmoji } from "./custom-emoji.js";
import { type Reaction } from "./reaction.js";
import { type Tag } from "./tag.js";

export interface AnnouncementAccount {
  id: string;
  username: string;
  url: string;
  acct: string;
}

export interface AnnouncementStatus {
  id: string;
  url: string;
}

export interface Announcement {
  id: string;
  content: string;
  startsAt: string;
  endsAt: string;
  allDay: boolean;
  publishedAt: string;
  updatedAt: string;
  mentions: AnnouncementAccount[];
  statuses: AnnouncementStatus[];
  tags: Tag[];
  emojis: CustomEmoji[];
  reactions: Reaction[];
}
