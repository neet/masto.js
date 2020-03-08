import { Emoji, Mention, Reaction, Tag } from '.';

export interface Announcement {
  id: string;
  content: string;
  startsAt: string;
  endsAt: string;
  allDay: boolean;
  mentions: Mention[];
  tags: Tag[];
  emojis: Emoji[];
  reactions: Reaction[];
}
