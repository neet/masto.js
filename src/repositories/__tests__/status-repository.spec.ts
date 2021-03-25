import { httpDelete, httpGet, HttpMockImpl, httpPost } from '../../http/http-mock-impl';
import { StatusRepository } from '../status-repository';

describe('status', () => {
  const mockHttp = new HttpMockImpl();
  const status = new StatusRepository(mockHttp, '999.0.0');

  beforeEach(() => {
    mockHttp.clear();
  });

  test('fetch', async () => {
    await status.fetch('123123');
    expect(httpGet.mock.calls[0][0]).toBe('/api/v1/statuses/123123');
  });

  test('create', async () => {
    await status.create({
      status: 'hello',
    });
    expect(httpPost.mock.calls[0][0]).toBe('/api/v1/statuses');
    expect(httpPost.mock.calls[0][1]).toStrictEqual({
      status: 'hello',
    });
  })

  test('type checks', () => {
    status.create({
      mediaIds: ['123', '456'],
      // @ts-expect-error: Poll cannot be combined with media
      poll: { options: ['Apple', 'Banana'] },
    });

    // Status can be null when mediaIds provided
    status.create({
      mediaIds: ['123123']
    });

    // @ts-expect-error: Status cannot be null when mediaIds are not provided
    status.create({
      status: null,
    });

    expect(true).toBeTruthy();
  });

  test('delete', async () => {
    await status.remove('123123');
    expect(httpDelete.mock.calls[0][0]).toBe('/api/v1/statuses/123123');
  });
});
