import { fetch } from '@mastojs/ponyfills';

const TRANSPARENT_1X1_PNG =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

const createFile = async () => {
  const response = await fetch(TRANSPARENT_1X1_PNG);
  const file = await response.blob();
  return file;
};

describe('media', () => {
  it('creates a media attachment', async () => {
    const file = await createFile();
    let media = await admin.v2.mediaAttachments.create({ file });

    media = await admin.v1.mediaAttachments.fetch(media.id);
    expect(media.type).toBe('image');

    media = await admin.v1.mediaAttachments.update(media.id, {
      description: 'test',
    });
    expect(media.description).toBe('test');
  });

  it('creates media attachment without polling', () => {
    return clients.use(async (client) => {
      const file = await createFile();
      const media = await client.v2.mediaAttachments.create(
        { file },
        { skipPolling: true },
      );
      expect(media.type).toBe('image');
    });
  });
});
