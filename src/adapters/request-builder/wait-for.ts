import { type Http } from '../../interfaces';
import { type mastodon } from '../../mastodon';
import { sleep } from '../../utils';
import { MastoHttpError, MastoTimeoutError } from '../errors';

export const waitForMediaAttachment = async (
  http: Http,
  id: string,
  timeoutMs = 60 * 1000,
): Promise<mastodon.v1.MediaAttachment> => {
  let media: mastodon.v1.MediaAttachment | undefined;
  const signal = AbortSignal.timeout(timeoutMs);

  while (media == undefined) {
    try {
      signal.throwIfAborted();
      await sleep(1000);

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
      if (typeof error === 'string') {
        throw new MastoTimeoutError(error);
      }
      throw error;
    }
  }

  return media;
};
