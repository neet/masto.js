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
  author_name?: string | null;

  /** OEmbed data */
  author_url?: string | null;

  /** OEmbed data */
  provider_name?: string | null;

  /** OEmbed data */
  provider_url?: string | null;

  /** OEmbed data */
  html?: string | null;

  /** OEmbed data */
  width?: string | null;

  /** OEmbed data */
  height?: string | null;
}
