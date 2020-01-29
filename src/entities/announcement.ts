import { Mention } from './mention';
import { Tag } from './tag';
import { Emoji } from './emoji';
import { Reaction } from './reaction';

export interface Announcement {
  id: string;
  content: string;
  starts_at: string;
  ends_at: string;
  all_day: boolean;
  mentions: Mention[];
  tags: Tag[];
  emojis: Emoji[];
  reactions: Reaction[];
}
