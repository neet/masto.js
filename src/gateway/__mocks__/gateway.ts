import { GatewayConstructorParams } from '../gateway';

export const mockGet = jest.fn();
export const mockPost = jest.fn();
export const mockDelete = jest.fn();
export const mockPatch = jest.fn();
export const mockPut = jest.fn();
export const mockStream = jest.fn();
export const mockPaginate = jest.fn();

export class Gateway {
  readonly uri: URL;
  readonly streamingApiUrl: URL;
  readonly version: string;
  readonly accessToken?: string;

  constructor(params: GatewayConstructorParams) {
    this.uri = new URL(params.uri);
    this.streamingApiUrl = new URL(params.streamingApiUrl);
    this.version = params.version;

    if (params.accessToken) {
      this.accessToken = params.accessToken;
    }
  }

  get = mockGet;
  post = mockPost;
  delete = mockDelete;
  patch = mockPatch;
  put = mockPut;
  stream = mockStream;
  paginate = mockPaginate;
}
