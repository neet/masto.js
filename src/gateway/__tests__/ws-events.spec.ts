// tslint:disable
import WebSocket from 'isomorphic-ws';
import { WebSocketEvents } from '../websocket';

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

describe('WebSocketEvents', () => {
  let mastoEvents!: WebSocketEvents;

  beforeAll(() => {
    mastoEvents = new WebSocketEvents();
  });

  test('connect to ws server', async () => {
    // Resolve open
    addEventListenerMock.mockImplementation((e, fn) => {
      if (e === 'open') {
        fn();
      }
    });

    await mastoEvents.connect('wss://example.com', []);

    expect((WebSocket as any) as jest.Mock).toBeCalledWith(
      'wss://example.com',
      [],
    );

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

    mastoEvents.handleMessage({
      type: 'utf8',
      data: JSON.stringify(originalData),
      target: {} as any,
    });

    expect(emitMock).toBeCalledWith('update', originalPayload);
  });

  test('emit event with given props, with raw payload', () => {
    const originalPayload = 'foobar';

    const originalData = {
      event: 'update',
      payload: originalPayload,
    };

    mastoEvents.handleMessage({
      type: 'utf8',
      data: JSON.stringify(originalData),
      target: {} as any,
    });

    expect(emitMock).toBeCalledWith('update', originalPayload);
  });

  test('subscribe events via event emitter', async () => {
    const cb = jest.fn();
    const stream = await mastoEvents.on('update', cb);
    expect(onMock).toBeCalledWith('update', cb);
    expect(stream).toBeUndefined(); // mock
  });
});
