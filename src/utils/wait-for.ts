import type { mastodon } from '..';

export const waitForMediaAttachment = (
  client: mastodon.RestAPIClient,
  id: string,
): Promise<mastodon.v1.MediaAttachment> => {
  return new Promise<mastodon.v1.MediaAttachment>((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const media = await client.v1.media.select(id).fetch();
        if (media.url != undefined) {
          clearInterval(interval);
          resolve(media);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 1000);
  });
};
