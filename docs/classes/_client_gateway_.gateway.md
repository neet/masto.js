[masto](../README.md) > ["client/gateway"](../modules/_client_gateway_.md) > [Gateway](../classes/_client_gateway_.gateway.md)

# Class: Gateway

Mastodon network request wrapper

*__param__*: Optional params

## Hierarchy

**Gateway**

↳  [Masto](_client_masto_.masto.md)

## Index

### Constructors

* [constructor](_client_gateway_.gateway.md#constructor)

### Accessors

* [accessToken](_client_gateway_.gateway.md#accesstoken)
* [streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)
* [uri](_client_gateway_.gateway.md#uri)
* [version](_client_gateway_.gateway.md#version)

### Methods

* [delete](_client_gateway_.gateway.md#delete)
* [get](_client_gateway_.gateway.md#get)
* [paginate](_client_gateway_.gateway.md#paginate)
* [patch](_client_gateway_.gateway.md#patch)
* [post](_client_gateway_.gateway.md#post)
* [put](_client_gateway_.gateway.md#put)
* [stream](_client_gateway_.gateway.md#stream)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Gateway**(params: *[GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md)*): [Gateway](_client_gateway_.gateway.md)

*Defined in [client/gateway.ts:44](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md) |

**Returns:** [Gateway](_client_gateway_.gateway.md)

___

## Accessors

<a id="accesstoken"></a>

###  accessToken

**get accessToken**(): `string`

**set accessToken**(newAccessToken: *`string`*): `void`

*Defined in [client/gateway.ts:93](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L93)*

Getter for this.\_accessToken

**Returns:** `string`

*Defined in [client/gateway.ts:98](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L98)*

Setter for this.\_accessToken

**Parameters:**

| Name | Type |
| ------ | ------ |
| newAccessToken | `string` |

**Returns:** `void`

___
<a id="streamingapiurl"></a>

###  streamingApiUrl

**get streamingApiUrl**(): `string`

**set streamingApiUrl**(newStreamingApiUrl: *`string`*): `void`

*Defined in [client/gateway.ts:83](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L83)*

Getter for this.\_streamingApiUrl

**Returns:** `string`

*Defined in [client/gateway.ts:88](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L88)*

Setter for this.\_streamingApiUrl

**Parameters:**

| Name | Type |
| ------ | ------ |
| newStreamingApiUrl | `string` |

**Returns:** `void`

___
<a id="uri"></a>

###  uri

**get uri**(): `string`

**set uri**(newUri: *`string`*): `void`

*Defined in [client/gateway.ts:63](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L63)*

Getter for this.\_uri

**Returns:** `string`

*Defined in [client/gateway.ts:68](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L68)*

Setter for this.\_uri

**Parameters:**

| Name | Type |
| ------ | ------ |
| newUri | `string` |

**Returns:** `void`

___
<a id="version"></a>

###  version

**get version**(): `string`

**set version**(newVersion: *`string`*): `void`

*Defined in [client/gateway.ts:73](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L73)*

Getter for this.\_version

**Returns:** `string`

*Defined in [client/gateway.ts:78](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L78)*

Setter for this.\_version

**Parameters:**

| Name | Type |
| ------ | ------ |
| newVersion | `string` |

**Returns:** `void`

___

## Methods

<a id="delete"></a>

###  delete

▸ **delete**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/gateway.ts:268](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L268)*

HTTP DELETE

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` data | `any` |  {} |  jPayload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/gateway.ts:215](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L215)*

HTTP GET

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` params | `object` |  {} |  Query strings |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="paginate"></a>

###  paginate

▸ **paginate**<`Data`,`Params`>(initialUrl: *`string`*, initialParams?: *[Params]()*): `AsyncIterableIterator`<`AxiosResponse`<`Data`> \| `undefined`>

*Defined in [client/gateway.ts:318](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L318)*

Generate an iterable of the pagination. The default generator implementation of JS cannot change the value of `done` depend on the result of yield, Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.

**Type parameters:**

#### Data 
#### Params 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| initialUrl | `string` |  URL for the endpoint |
| `Optional` initialParams | [Params]() |  Query parameter |

**Returns:** `AsyncIterableIterator`<`AxiosResponse`<`Data`> \| `undefined`>
Async iterable iterator of the pages.
See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/gateway.ts:284](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L284)*

HTTP PATCH

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="post"></a>

###  post

▸ **post**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/gateway.ts:236](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L236)*

HTTP POST

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="put"></a>

###  put

▸ **put**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/gateway.ts:252](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L252)*

HTTP PUT

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="stream"></a>

###  stream

▸ **stream**(url: *`string`*, params?: *`object`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/gateway.ts:298](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L298)*

Connect to a streaming

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| url | `string` | - |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___

