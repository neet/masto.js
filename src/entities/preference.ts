import { StatusVisibility } from './status';

export type PreferenceReadingExpandMedia = 'show_all' | 'hide_all' | 'default';

export interface Preference {
  'posting:default:visibility'?: StatusVisibility | null;
  'posting:default:sensitive'?: boolean | null;
  'posting:default:language'?: string | null;
  'reading:expand:media'?: PreferenceReadingExpandMedia | null;
  'reading:expand:spoilers'?: boolean | null;
}
