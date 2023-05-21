import { MastoHttpError, MastoTimeoutError } from '../errors';
import type { Http } from '../http';
import type { mastodon } from '../mastodon';
import { delay } from '../utils/delay';
import { Timeout } from '../utils/timeout';

export const waitForMediaAttachment = async (
  http: Http,
  id: string,
  timeoutMs = 60 * 1000,
): Promise<mastodon.v1.MediaAttachment> => {
  let media: mastodon.v1.MediaAttachment | undefined;
  const timeout = new Timeout(timeoutMs);

  while (media == undefined) {
    if (timeout.signal.aborted) {
      throw new MastoTimeoutError(
        'The media encoding has been timed out in your instance.',
      );
    }

    await delay(1000);

    try {
      const processing = await http.get<mastodon.v1.MediaAttachment>(
        `/api/v1/media/${id}`,
      );

      if (processing.url != undefined) {
        media = processing;
        timeout.clear();
      }
    } catch (error) {
      if (error instanceof MastoHttpError && error.statusCode === 404) {
        continue;
      }
      throw error;
    }
  }

  return media;
};
