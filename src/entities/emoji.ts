export interface Emoji {
  /** The shortcode of the emoji */
  shortcode: string;
  /** URL to the emoji static image */
  staticUrl: string;
  /** URL to the emoji image */
  url: string;
  /** Boolean that indicates if the emoji is visible in picker */
  visibleInPicker: boolean;
  /** Category of the emoji */
  category?: string | null;
}
