import fs from 'node:fs/promises';
import path from 'node:path';

import type { mastodon } from '../src';
import { login } from '../test-utils/login';

describe('account', () => {
  let client: mastodon.Client;

  beforeAll(async () => {
    client = await login();
  });

  it('creates a media attachment', async () => {
    const media = await client.v2.mediaAttachments.create({
      file: new Blob([await fs.readFile(path.join(__dirname, './image.png'))]),
    });

    expect(media.type).toBe('image');
  });
});
