import type { Serializer } from '../../interfaces';
import { SerializerNativeImpl } from './serializer-native-impl';

describe('SerializerNativeImpl', () => {
  const serializer: Serializer = new SerializerNativeImpl();

  it('encodes an object to JSON', () => {
    const data = serializer.serialize('json', {
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    expect(data).toBe(
      '{"key_name":"value","another_key_name":["value1","value2"]}',
    );
  });

  // it('encodes an object to form-data', () => {
  //   const data = serializer.serialize('multipart/form-data', {
  //     keyName: 'value',
  //     anotherKeyName: ['value1', 'value2'],
  //   });
  //   assert(data instanceof FormData);
  //   expect(data.get('key_name')).toBe('value');
  //   expect(data.get('another_key_name[0]')).toEqual('value1');
  //   expect(data.get('another_key_name[1]')).toEqual('value2');
  // });

  it('encodes an object to a url form-data', () => {
    const data = serializer.serialize('form-url-encoded', {
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    expect(data).toBe(
      'key_name=value&another_key_name[]=value1&another_key_name[]=value2',
    );
  });

  // it('encodes an object to null when unknown type passed', () => {
  //   const data = serializer.serialize(
  //     'text/html',
  //     '<html><body>test</body></html>',
  //   );
  //   expect(data).toBeUndefined();
  // });

  it('encodes an object to a querystring', () => {
    const data = serializer.serialize('querystring', {
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    expect(data).toBe(
      'key_name=value&another_key_name[]=value1&another_key_name[]=value2',
    );
  });

  it('parses JSON string to an Object', () => {
    const data = serializer.deserialize('json', '{ "key_name": "value" }');
    expect(data).toEqual({ keyName: 'value' });
  });

  it('returns undefined for unparsable JSON', () => {
    const data = serializer.deserialize('json', '');
    expect(data).toBeUndefined();
  });

  // it('throws deserialize error for unknown types', () => {
  //   expect(() => {
  //     serializer.deserialize('text/html', '<html><body>test</body></html>');
  //   }).toThrowError(MastoDeserializeError);
  // });
});
