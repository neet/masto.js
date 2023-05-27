import { HttpConfigImpl } from '../config';
import { MastoTimeoutError } from '../errors';
import { SerializerNativeImpl } from '../serializers';
import { HttpNativeImpl } from './http-native-impl';

it('timeouts', async () => {
  const serializer = new SerializerNativeImpl();
  const http = new HttpNativeImpl(
    serializer,
    new HttpConfigImpl(
      {
        url: 'https://example.com',
        timeout: 0,
      },
      serializer,
    ),
  );

  await expect(() => http.get('/')).rejects.toThrowError(MastoTimeoutError);
});
