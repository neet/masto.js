import { Gateway } from "../gateway";

export const mockGet = jest.fn();
export const mockPost = jest.fn();
export const mockDelete = jest.fn();
export const mockPatch = jest.fn();
export const mockPut = jest.fn();
export const mockStream = jest.fn();
export const mockPaginate = jest.fn();

export class GatewayImpl implements Gateway {
  uri = 'https://example.com';
  version = '99.99.9';
  streamingApiUrl = 'wss://example.com/stream';
  get = mockGet;
  post = mockPost;
  delete = mockDelete;
  patch = mockPatch;
  put = mockPut;
  stream = mockStream;
  paginate = mockPaginate;
}
