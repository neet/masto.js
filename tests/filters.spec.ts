import type { mastodon } from '../src';
import { delay } from '../src/utils';
import { login } from '../test-utils/login';

describe('filters', () => {
  let client: mastodon.Client;

  beforeAll(async () => {
    client = await login();
  });

  it('creates a filter', async () => {
    const filter = await client.v2.filters.create({
      title: 'some group',
      context: ['notifications'],
      keywordsAttributes: [
        {
          keyword: 'I hate masto.js',
        },
      ],
    });

    await delay(3000);
    const filters = await client.v2.filters.list();
    expect(filters).toContainEqual(
      expect.objectContaining({
        id: filter.id,
        title: 'some group',
        keywords: expect.arrayContaining([
          expect.objectContaining({ keyword: 'I hate masto.js' }),
        ]),
      }),
    );

    await delay(3000);
    await client.v2.filters.remove(filter.id);
  });
});
