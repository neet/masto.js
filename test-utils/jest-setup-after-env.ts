import { createClient } from '../src';
import { ClientPoolImpl } from './pools';

jest.setTimeout(1000 * 60);

globalThis.admin = createClient({
  url: __misc__.url,
  version: __misc__.instance.version,
  streamingApiUrl: __misc__.instance.urls.streamingApi,
  accessToken: __misc__.adminToken.accessToken,
  logLevel: 'info',
});

globalThis.clients = new ClientPoolImpl();
