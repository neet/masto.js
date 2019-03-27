export const connectMock = jest.fn();

export const StreamingHandler = jest.fn(() => ({
  connect: connectMock,
}));
