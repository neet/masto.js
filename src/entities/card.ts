export type CardType = 'link' | 'photo' | 'video' | 'rich';

/**
 * Represents a rich preview card that is generated using OpenGraph tags from a URL.
 * @see https://docs.joinmastodon.org/entities/card/
 */
export interface Card {
  /** Location of linked resource. */
  url: string;
  /** Title of linked resource. */
  title: string;
  /** Description of preview. */
  description: string;
  /** The type of the preview card. */
  type: CardType;
  /** Blurhash */
  blurhash: string;

  /** The author of the original resource. */
  authorName?: string | null;
  /** A link to the author of the original resource. */
  authorUrl?: string | null;
  /** The provider of the original resource. */
  providerName?: string | null;
  /** A link to the provider of the original resource. */
  providerUrl?: string | null;
  /** HTML to be used for generating the preview card. */
  html?: string | null;
  /** Width of preview, in pixels. */
  width?: string | null;
  /** Height of preview, in pixels. */
  height?: string | null;
  /** Preview thumbnail. */
  image?: string | null;
  /** Used for photo embeds, instead of custom `html`. */
  embedUrl: string;
}
