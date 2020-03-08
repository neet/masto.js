import { Emoji } from './emoji';
import { Mention } from './mention';
import { Reaction } from './reaction';
import { Tag } from './tag';

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
