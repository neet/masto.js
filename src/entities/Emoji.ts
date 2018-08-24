export interface Emoji {
  /** The shortcode of the emoji */
  shortcode: string;
  /** URL to the emoji static image */
  static_url: string;
  /** URL to the emoji image */
  url: string;
  /** Boolean that indicates if the emoji is visible in picker */
  visible_in_picker: boolean;
}
