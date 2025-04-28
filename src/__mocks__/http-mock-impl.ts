import { Http } from '../interfaces';

export class HttpMockImpl implements Http {
  static clear(): void {
    HttpMockImpl.request.mockClear();
    HttpMockImpl.get.mockClear();
    HttpMockImpl.post.mockClear();
    HttpMockImpl.patch.mockClear();
    HttpMockImpl.put.mockClear();
    HttpMockImpl.delete.mockClear();
  }

  static request = jest.fn()
  static get = jest.fn()
  static post = jest.fn()
  static patch = jest.fn()
  static put = jest.fn()
  static delete = jest.fn()


  request = HttpMockImpl.request;
  get = HttpMockImpl.get;
  post = HttpMockImpl.post;
  patch = HttpMockImpl.patch;
  put = HttpMockImpl.put;
  delete = HttpMockImpl.delete;
}
