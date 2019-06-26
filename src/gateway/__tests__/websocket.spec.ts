// tslint:disable
import WebSocket from 'isomorphic-ws';
import { WebSocketEvents } from '../websocket';

const mockOn = jest.fn();
const mockAddEventListener = jest.fn();
const mockEmit = jest.fn();
const mockClose = jest.fn();

jest.mock('eventemitter3', () => {
  return class {
    // this class will be extended by websocket.ts
    on = mockOn;
    emit = mockEmit;
  };
});

jest.mock('isomorphic-ws', () => {
  return jest.fn(() => ({
    close: mockClose,
    addEventListener: mockAddEventListener,
  }));
});

describe('WebSocketEvents', () => {
  const wsEvents = new WebSocketEvents();

  beforeEach(() => {
    mockOn.mockClear();
    mockAddEventListener.mockClear();
    mockEmit.mockClear();
    mockClose.mockClear();
  });

  test('connect to ws server', async () => {
    // Resolve open
    mockAddEventListener.mockImplementation((e, fn) => {
      if (e === 'open') {
        fn();
      }
    });

    await wsEvents.connect('wss://example.com', []);

    expect((WebSocket as any) as jest.Mock).toBeCalledWith(
      'wss://example.com',
      [],
    );

    expect(mockAddEventListener).toBeCalledWith(
      'message',
      expect.any(Function),
    );
    expect(mockAddEventListener).toBeCalledWith('error', expect.any(Function));
    expect(mockAddEventListener).toBeCalledWith('open', expect.any(Function));
  });

  test('disconnect from the server', () => {
    wsEvents.disconnect();
    expect(mockClose).toBeCalled();
  });

  test('emit event with given props', () => {
    const originalPayload = {
      aaaa: 'foobar',
    };
    const originalData = {
      event: 'update',
      payload: JSON.stringify(originalPayload),
    };

    wsEvents.handleMessage(JSON.stringify(originalData));
    expect(mockEmit).toBeCalledWith('update', originalPayload);
  });

  test('emit event with given props, with raw payload', () => {
    const originalPayload = 'foobar';
    const originalData = {
      event: 'update',
      payload: originalPayload,
    };

    wsEvents.handleMessage(JSON.stringify(originalData));
    expect(mockEmit).toBeCalledWith('update', originalPayload);
  });

  test('subscribe events via event emitter', async () => {
    const cb = jest.fn();
    const stream = await wsEvents.on('update', cb);
    expect(mockOn).toBeCalledWith('update', cb);
    expect(stream).toBeUndefined(); // mock
  });
});
