[masto](../README.md) > ["client/__mocks__/gateway"](../modules/_client___mocks___gateway_.md)

# External module: "client/__mocks__/gateway"

## Index

### Variables

* [Gateway](_client___mocks___gateway_.md#gateway)
* [deleteMock](_client___mocks___gateway_.md#deletemock)
* [getMock](_client___mocks___gateway_.md#getmock)
* [paginateMock](_client___mocks___gateway_.md#paginatemock)
* [patchMock](_client___mocks___gateway_.md#patchmock)
* [postMock](_client___mocks___gateway_.md#postmock)
* [putMock](_client___mocks___gateway_.md#putmock)
* [streamMock](_client___mocks___gateway_.md#streammock)

---

## Variables

<a id="gateway"></a>

### `<Const>` Gateway

**● Gateway**: *`Mock`<`object`, `[]`>* =  jest.fn(() => ({
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
  paginate: paginateMock,
}))

*Defined in [client/__mocks__/gateway.ts:9](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L9)*

___
<a id="deletemock"></a>

### `<Const>` deleteMock

**● deleteMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:3](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L3)*

___
<a id="getmock"></a>

### `<Const>` getMock

**● getMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:1](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L1)*

___
<a id="paginatemock"></a>

### `<Const>` paginateMock

**● paginateMock**: *`Mock`<`any`, `any`>* =  jest.fn()

*Defined in [client/__mocks__/gateway.ts:7](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L7)*

___
<a id="patchmock"></a>

### `<Const>` patchMock

**● patchMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:4](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L4)*

___
<a id="postmock"></a>

### `<Const>` postMock

**● postMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:2](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L2)*

___
<a id="putmock"></a>

### `<Const>` putMock

**● putMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:5](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L5)*

___
<a id="streammock"></a>

### `<Const>` streamMock

**● streamMock**: *`Mock`<`any`, `any`>* =  jest.fn().mockResolvedValue({})

*Defined in [client/__mocks__/gateway.ts:6](https://github.com/neet/masto.js/blob/368b200/src/client/__mocks__/gateway.ts#L6)*

___

