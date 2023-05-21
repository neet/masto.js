import './jest-polyfills';
import './jest-extend-expect';

import { createRestClient } from '../src';
import { SessionPoolImpl } from './pools';

jest.setTimeout(1000 * 60);

globalThis.admin = createRestClient({
  url: __misc__.url,
  accessToken: __misc__.adminToken.accessToken,
});

globalThis.sessions = new SessionPoolImpl();
