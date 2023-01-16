import { createClient } from '../src';

jest.setTimeout(1000 * 60);

const { url, instance, token } = globalThis;

globalThis.admin = createClient({
  url: url,
  version: instance.version,
  streamingApiUrl: instance.urls.streamingApi,
  accessToken: token.accessToken,
  logLevel: 'info',
});
