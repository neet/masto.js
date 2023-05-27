import { type TagHistory } from './tag';

export type PreviewCardType = 'link' | 'photo' | 'video' | 'rich';

/**
 * Represents a rich preview card that is generated using OpenGraph tags from a URL.
 * @see https://docs.joinmastodon.org/entities/PreviewCard
 */
export interface PreviewCard {
  /** Location of linked resource. */
  url: string;
  /** Title of linked resource. */
  title: string;
  /** Description of preview. */
  description: string;
  /** The type of the preview card. */
  type: PreviewCardType;
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
  width?: number | null;
  /** Height of preview, in pixels. */
  height?: number | null;
  /** Preview thumbnail. */
  image?: string | null;
  /** Used for photo embeds, instead of custom `html`. */
  embedUrl: string;
}

export interface TrendLink extends PreviewCard {
  history: TagHistory[];
}
