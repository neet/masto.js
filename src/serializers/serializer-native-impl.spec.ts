import assert from 'node:assert';

import { FormData } from '@mastojs/isomorphic-web';

import { SerializerNativeImpl } from './serializer-native-impl';

describe('SerializerNativeImpl', () => {
  const serializer = new SerializerNativeImpl();

  it('encodes an object to JSON', () => {
    const data = serializer.serialize('application/json', {
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    expect(data).toBe(
      '{"key_name":"value","another_key_name":["value1","value2"]}',
    );
  });

  it('encodes an object to form-data', (done) => {
    if (globalThis.FormData === undefined) {
      return done();
    }

    const data = serializer.serialize('multipart/form-data', {
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    assert(data instanceof FormData);
    expect(data.get('key_name')).toBe('value');
    expect(data.get('another_key_name[0]')).toEqual('value1');
    expect(data.get('another_key_name[1]')).toEqual('value2');
  });

  it('encodes an object to a querystring', () => {
    const data = serializer.serializeQueryString({
      keyName: 'value',
      anotherKeyName: ['value1', 'value2'],
    });

    expect(data).toBe(
      'key_name=value&another_key_name[]=value1&another_key_name[]=value2',
    );
  });

  it('parses JSON string to an Object', () => {
    const data = serializer.deserialize(
      'application/json',
      '{ "key_name": "value" }',
    );
    expect(data).toEqual({ keyName: 'value' });
  });
});
