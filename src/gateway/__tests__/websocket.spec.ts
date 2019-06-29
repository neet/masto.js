// tslint:disable
import WebSocket from 'isomorphic-ws';
import { WebSocketEvents } from '../websocket';

const mockOn = jest.fn();
const mockEmit = jest.fn();

const mockEmitWs = jest.fn();
const mockCloseWs = jest.fn();
const mockAddEventListenerWs = jest.fn();

jest.mock('eventemitter3', () => {
  return class {
    // this class will be extended by websocket.ts
    on = mockOn;
    emit = mockEmit;
  };
});

jest.mock('isomorphic-ws', () => {
  return jest.fn(() => ({
    emit: mockEmitWs,
    close: mockCloseWs,
    addEventListener: mockAddEventListenerWs,
  }));
});

describe('WebSocketEvents', () => {
  let wsEvents!: WebSocketEvents;

  beforeEach(() => {
    wsEvents = new WebSocketEvents();
    mockOn.mockClear();
    mockAddEventListenerWs.mockClear();
    mockEmit.mockClear();
    mockCloseWs.mockClear();
  });

  test('connect to ws server', async () => {
    // Resolve open
    mockAddEventListenerWs.mockImplementation((e, fn) => {
      if (e === 'open') {
        fn();
      }
    });

    await wsEvents.connect('wss://example.com', []);

    expect((WebSocket as any) as jest.Mock).toBeCalledWith(
      'wss://example.com',
      [],
    );

    expect(mockAddEventListenerWs).toBeCalledWith(
      'message',
      expect.any(Function),
    );
    expect(mockAddEventListenerWs).toBeCalledWith(
      'error',
      expect.any(Function),
    );
    expect(mockAddEventListenerWs).toBeCalledWith('open', expect.any(Function));
  });

  test('noop when this.ws is undefined', () => {
    // @ts-ignore
    wsEvents.ws = undefined;
    const result = wsEvents.disconnect();
    expect(result).toBeUndefined();
  });

  test('disconnect from the server', () => {
    // @ts-ignore
    wsEvents.ws = new WebSocket();
    wsEvents.disconnect();
    expect(mockCloseWs).toBeCalled();
  });

  test('emit event with given props', () => {
    const originalPayload = {
      aaaa: 'foobar',
    };
    const originalData = {
      event: 'update',
      payload: JSON.stringify(originalPayload),
    };

    wsEvents.handleMessage({ data: JSON.stringify(originalData) });
    expect(mockEmit).toBeCalledWith('update', originalPayload);
  });

  test('emit event without callback when parsing failed', () => {
    const originalPayload = 'foobar';
    const originalData = {
      event: 'update',
      payload: originalPayload,
    };

    wsEvents.handleMessage({ data: JSON.stringify(originalData) });
    expect(mockEmit).toBeCalledWith('update');
  });
});
