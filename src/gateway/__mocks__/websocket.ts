export const connectMock = jest.fn();

export const WebSocketEvents = jest.fn(() => ({
  connect: connectMock,
}));
