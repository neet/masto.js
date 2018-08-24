/** Type of card */
export type CardTypes = 'link'|'photo'|'video'|'rich';

export interface Card {
  /** The url associated with the card */
  url: string;
  /** The title of the card */
  title: string;
  /** The card description */
  description: string;
  /** The image associated with the card, if any */
  image?: string;
  /** "link", "photo", "video", or "rich" */
  type: CardTypes;
  /** OEmbed data */
  author_name?: string;
  /** OEmbed data */
  author_url?: string;
  /** OEmbed data */
  provider_name?: string;
  /** OEmbed data */
  provider_url?: string;
  /** OEmbed data */
  html?: string;
  /** OEmbed data */
  width?: string;
  /** OEmbed data */
  height?: string;
}
