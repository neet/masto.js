import { HttpMockImpl, httpPost } from '../../http/http-mock-impl';
import { EmailRepository } from '../email-repository';

describe('email', () => {
  const mockHttp = new HttpMockImpl();
  const email = new EmailRepository(mockHttp, '999.0.0', {
    url: 'https://example.com',
  });

  test('create confirmations', () => {
    email.createConfirmation({ email: 'foo@example.com' });
    expect(httpPost.mock.calls[0][0]).toBe('/api/v1/email/confirmations');
    expect(httpPost.mock.calls[0][1]).toStrictEqual({
      email: 'foo@example.com',
    });
  });
});
