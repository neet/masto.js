export const mockGet = jest.fn();
export const mockPost = jest.fn();
export const mockDelete = jest.fn();
export const mockPatch = jest.fn();
export const mockPut = jest.fn();
export const mockStream = jest.fn();
export const mockPaginate = jest.fn();

// tslint:disable-next-line
export class Gateway {
  public get = mockGet;
  public post = mockPost;
  public delete = mockDelete;
  public patch = mockPatch;
  public put = mockPut;
  public stream = mockStream;
  public paginate = mockPaginate;
}
