// tslint:disable
import 'eventemitter3';
import * as WebSocket from 'isomorphic-ws';
import { MastoEvents } from '../masto-events';

const onMock = jest.fn();
const emitMock = jest.fn();
const closeMock = jest.fn();
const addEventListenerMock = jest.fn();

jest.mock('eventemitter3', () => {
  return class {
    on = onMock;
    emit = emitMock;
  };
});

jest.mock('isomorphic-ws', () => {
  return jest.fn(() => ({
    close: closeMock,
    addEventListener: addEventListenerMock,
  }));
});

describe('MastoEvents', () => {
  let mastoEvents!: MastoEvents;

  beforeAll(() => {
    mastoEvents = new MastoEvents();
  });

  test('connect to ws server', async () => {
    // Resolve open
    addEventListenerMock.mockImplementation((e, fn) => {
      if (e === 'open') {
        fn();
      }
    });

    await mastoEvents.connect('wss://example.com');

    expect((WebSocket as any) as jest.Mock).toBeCalledWith('wss://example.com');

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'message',
      expect.any(Function),
    );

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'error',
      expect.any(Function),
    );

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'open',
      expect.any(Function),
    );
  });

  test('disconnect from the server', async () => {
    await mastoEvents.disconnect();
    expect(closeMock).toBeCalled();
  });

  test('emit event with given props', () => {
    const originalPayload = {
      aaaa: 'foobar',
    };

    const originalData = {
      event: 'update',
      payload: JSON.stringify(originalPayload),
    };

    const emitData = {
      event: 'update',
      data: originalPayload,
    };

    mastoEvents.handleMessage({
      type: 'utf8',
      data: JSON.stringify(originalData),
      target: {} as any,
    });

    expect(emitMock).toBeCalledWith('update', emitData);
  });

  test('emit event with given props, with raw payload', () => {
    const originalPayload = 'foobar';

    const originalData = {
      event: 'update',
      payload: originalPayload,
    };

    const emitData = {
      event: 'update',
      data: originalPayload,
    };

    mastoEvents.handleMessage({
      type: 'utf8',
      data: JSON.stringify(originalData),
      target: {} as any,
    });

    expect(emitMock).toBeCalledWith('update', emitData);
  });

  test('return void if message is not utf8-encoded', () => {
    const result = mastoEvents.handleMessage({
      type: 'base64',
      data: '',
      target: {} as any,
    });

    expect(result).toBeUndefined();
  });

  test('subscribe events via event emitter', async () => {
    const cb = jest.fn();
    await mastoEvents.on('update', cb);
    expect(onMock).toBeCalledWith('update', cb);
  });
});
