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
    let media = await admin.v2.media.create({ file });

    media = await admin.v1.media.$select(media.id).fetch();
    expect(media.type).toBe('image');

    media = await admin.v1.media.$select(media.id).update({
      description: 'test',
    });
    expect(media.description).toBe('test');
  });

  it('creates media attachment without polling', () => {
    return sessions.use(async (session) => {
      const file = await createFile();
      const media = await session.rest.v2.media.create({ file });
      expect(media.type).toBe('image');
    });
  });
});
