import { fetch } from '@mastojs/ponyfills';

const TRANSPARENT_1X1_PNG =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('media', () => {
  it('creates a media attachment', async () => {
    const response = await fetch(TRANSPARENT_1X1_PNG);
    const file = await response.blob();

    const media = await admin.v2.mediaAttachments.create({
      file,
    });

    expect(media.type).toBe('image');
  });
});
