export const getMock = jest.fn().mockResolvedValue({});
export const postMock = jest.fn().mockResolvedValue({});
export const deleteMock = jest.fn().mockResolvedValue({});
export const patchMock = jest.fn().mockResolvedValue({});
export const putMock = jest.fn().mockResolvedValue({});
export const streamMock = jest.fn().mockResolvedValue({});
export const pagianteMock = jest.fn();

export const Gateway = jest.fn(() => ({
  uri: 'https://example.com',
  streamingApiUrl: 'wss://example.com',
  accessToken: 'token',
  version: '99.99.9',
  get: getMock,
  post: postMock,
  delete: deleteMock,
  patch: patchMock,
  put: putMock,
  stream: streamMock,
  paginate: pagianteMock,
}));
