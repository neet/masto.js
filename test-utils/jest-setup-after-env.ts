import './jest-extend-expect';

import { createClient } from '../src';
import { ClientPoolImpl } from './pools';

jest.setTimeout(1000 * 60);

globalThis.admin = createClient({
  url: __misc__.url,
  streamingApiUrl: __misc__.instance.urls.streamingApi,
  accessToken: __misc__.adminToken.accessToken,
});

globalThis.clients = new ClientPoolImpl();
