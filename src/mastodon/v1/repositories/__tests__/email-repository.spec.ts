import { SemVer } from 'semver';
import { MastoConfig } from '../../../../config';
import { HttpMockImpl, httpPost } from '../../../../http/http-mock-impl';
import { SerializerNativeImpl } from '../../../../serializers';
import { EmailRepository } from '../email-repository';

describe('email', () => {
  const config = new MastoConfig(
    {
      url: 'https://mastodon.social',
      streamingApiUrl: 'wss://mastodon.social',
      version: new SemVer('1.0.0'),
      accessToken: 'token',
    },
    new SerializerNativeImpl(),
  );
  const mockHttp = new HttpMockImpl();
  const email = new EmailRepository(mockHttp, config);

  test('create confirmations', () => {
    email.createConfirmation({ email: 'foo@example.com' });
    expect(httpPost).toBeCalledWith('/api/v1/email/confirmations', {
      email: 'foo@example.com',
    });
  });
});
