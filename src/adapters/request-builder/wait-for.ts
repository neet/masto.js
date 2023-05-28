import { type Http } from '../../interfaces';
import { type mastodon } from '../../mastodon';
import { createTimeoutSignal, delay } from '../../utils';
import { MastoHttpError, MastoTimeoutError } from '../errors';

export const waitForMediaAttachment = async (
  http: Http,
  id: string,
  timeoutMs = 60 * 1000,
): Promise<mastodon.v1.MediaAttachment> => {
  let media: mastodon.v1.MediaAttachment | undefined;
  const timeout = createTimeoutSignal(timeoutMs);

  while (media == undefined) {
    if (timeout.aborted) {
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
