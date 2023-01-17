import { delay } from '../../src/utils';

describe('streaming', () => {
  it('streams status', async () => {
    const callback = jest.fn();
    const stream = await admin.v1.stream.streamUser();
    stream.on('update', callback);

    const status = await admin.v1.statuses.create({ status: 'Streaming test' });
    await delay(1000);

    stream.disconnect();
    await admin.v1.statuses.remove(status.id);

    expect(callback).toBeCalledWith(
      expect.objectContaining({ content: '<p>Streaming test</p>' }),
    );
  });

  it('streams status deletion', async () => {
    const callback = jest.fn();
    const stream = await admin.v1.stream.streamUser();
    stream.on('delete', callback);

    const status = await admin.v1.statuses.create({ status: 'Remove test' });
    await delay(1000);

    // If you delete too fast, it won't be streamed
    await admin.v1.statuses.remove(status.id);
    await delay(1000);

    stream.disconnect();
    expect(callback).toHaveBeenCalledWith(status.id);
  });

  it('streams hashtag', async () => {
    const callback = jest.fn();
    const stream = await admin.v1.stream.streamTagTimeline('mastojs');
    stream.on('update', callback);

    const status = await admin.v1.statuses.create({ status: '#mastojs' });
    await delay(1000);

    stream.disconnect();
    await admin.v1.statuses.remove(status.id);

    expect(callback).toBeCalledWith(expect.objectContaining({ id: status.id }));
  });
});
