export const mockConnect = jest.fn();

export const WebSocketEvents = jest.fn(() => ({
  connect: mockConnect,
}));
