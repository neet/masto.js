import {
  type AbortSignal,
  type Headers,
  type HeadersInit,
} from '@mastojs/ponyfills';

import { type Timeout } from '../../utils';

export interface HttpConfig {
  resolvePath(path: string, params?: string | Record<string, unknown>): URL;
  mergeHeadersWithDefaults(override?: HeadersInit): Headers;
  mergeAbortSignalWithDefaults(
    signal?: AbortSignal | null,
  ): [AbortSignal, Timeout];
}
