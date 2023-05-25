import './jest-polyfills';
import './jest-extend-expect';

import { createRestClient } from '../src';
import { SessionPoolImpl } from './pools';

jest.setTimeout(1000 * 60);

globalThis.admin = createRestClient({
  url: globalThis.__misc__.url,
  accessToken: globalThis.__misc__.adminToken.accessToken,
});

globalThis.sessions = new SessionPoolImpl(
  globalThis.__misc__.tokens,
  globalThis.__misc__.url,
  globalThis.__misc__.instance,
);
