import fs from 'node:fs';
import path from 'node:path';

import type { MastoClient } from '../src/clients';
import { login } from '../test-utils/login';

describe('account', () => {
  let client: MastoClient;

  beforeAll(async () => {
    client = await login();
  });

  it('creates a media attachment', async () => {
    const media = await client.v1.mediaAttachments.create({
      file: fs.createReadStream(path.join(__dirname, './image.png')),
    });

    expect(media.type).toBe('image');
  });
});
