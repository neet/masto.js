import type { mastodon } from '..';
import { MastoHttpNotFoundError, MastoTimeoutError } from '../errors';
import { delay } from './delay';
import { Timeout } from './timeout';

export const waitForMediaAttachment = async (
  client: mastodon.RestAPIClient,
  id: string,
  ms = 60 * 1000,
): Promise<mastodon.v1.MediaAttachment> => {
  let media: mastodon.v1.MediaAttachment | undefined;
  const timeout = new Timeout(ms);

  while (media == undefined) {
    if (timeout.signal.aborted) {
      throw new MastoTimeoutError(
        'The media encoding has been timed out in your instance.',
      );
    }

    await delay(1000);

    try {
      const processing = await client.v1.media.select(id).fetch();

      if (processing.url != undefined) {
        media = processing;
        timeout.clear();
      }
    } catch (error) {
      if (error instanceof MastoHttpNotFoundError) {
        continue;
      }
      throw error;
    }
  }

  return media;
};
