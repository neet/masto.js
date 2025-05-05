import { type Http } from "../interfaces/index.js";

export const httpRequest = vi.fn();
export const httpGet = vi.fn();
export const httpPost = vi.fn();
export const httpPatch = vi.fn();
export const httpPut = vi.fn();
export const httpDelete = vi.fn();

export class HttpMockImpl implements Http {
  clear(): void {
    httpRequest.mockClear();
    httpGet.mockClear();
    httpPost.mockClear();
    httpPatch.mockClear();
    httpPut.mockClear();
    httpDelete.mockClear();
  }

  request = httpRequest;
  get = httpGet;
  post = httpPost;
  patch = httpPatch;
  put = httpPut;
  delete = httpDelete;
}
