import { MastoHttpConfig, MastoLogConfig } from '../../config';
import { MastoTimeoutError } from '../../errors';
import { SerializerNativeImpl } from '../serializers';
import { HttpNativeImpl } from './http-native-impl';

it('timeouts', async () => {
  const serializer = new SerializerNativeImpl();
  const http = new HttpNativeImpl(
    serializer,
    new MastoHttpConfig(
      {
        url: 'https://example.com',
        timeout: 0,
      },
      serializer,
      new MastoLogConfig(),
    ),
  );

  await expect(() => http.get('/')).rejects.toThrowError(MastoTimeoutError);
});
