// tslint:disable
import { Masto } from '../masto';
import '../gateway';

jest.mock('../gateway');

describe('Masto', () => {
  // @ts-ignore
  let masto: Masto | undefined;

  beforeAll(async () => {
    masto = await Masto.login({
      uri: 'https://example.com',
      accessToken: 'token',
    });
  });

  test('Masto.login', async () => {
    const instance = await Masto.login({
      uri: 'https://example.com',
      accessToken: 'token',
    });

    // @ts-ignore
    (instance.get as jest.Mock).mockResolvedValue({
      data: {
        urls: {
          streaming_api: 'streaming api',
        },
        version: '0.0.0',
      },
    });

    // @ts-ignore
    expect(instance.get).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/instance'),
    );
    expect(instance.version).toBe('0.0.0');
    expect(instance.streamingApiUrl).toBe('streaming api');
  });
});
