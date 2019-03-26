export const Gateway = jest.fn(() => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  paginate: jest.fn(),
}));
