export type CardType = 'link' | 'photo' | 'video' | 'rich';

export interface Card {
  /** The url associated with the card */
  url: string;
  /** The title of the card */
  title: string;
  /** The card description */
  description: string;
  /** The image associated with the card, if any */
  image?: string | null;
  /** "link", "photo", "video", or "rich" */
  type: CardType;
  /** OEmbed data */
  authorName?: string | null;
  /** OEmbed data */
  authorUrl?: string | null;
  /** OEmbed data */
  providerName?: string | null;
  /** OEmbed data */
  providerUrl?: string | null;
  /** OEmbed data */
  html?: string | null;
  /** OEmbed data */
  width?: string | null;
  /** OEmbed data */
  height?: string | null;
}
