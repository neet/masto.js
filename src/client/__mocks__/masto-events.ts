export const connectMock = jest.fn();

export const MastoEvents = jest.fn(() => ({
  connect: connectMock,
}));
