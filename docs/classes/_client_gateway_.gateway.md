[masto](../README.md) > ["client/gateway"](../modules/_client_gateway_.md) > [Gateway](../classes/_client_gateway_.gateway.md)

# Class: Gateway

Mastodon network request wrapper

*__param__*: Optional params

## Hierarchy

**Gateway**

## Index

### Constructors

* [constructor](_client_gateway_.gateway.md#constructor)

### Properties

* [accessToken](_client_gateway_.gateway.md#accesstoken)
* [version](_client_gateway_.gateway.md#version)

### Accessors

* [streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)
* [uri](_client_gateway_.gateway.md#uri)

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

*Defined in [client/gateway.ts:47](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L47)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md) |  Parameters |

**Returns:** [Gateway](_client_gateway_.gateway.md)

___

## Properties

<a id="accesstoken"></a>

### `<Optional>` accessToken

**● accessToken**: *`undefined` \| `string`*

*Defined in [client/gateway.ts:47](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L47)*

API token of the user

___
<a id="version"></a>

###  version

**● version**: *`string`* = ""

*Defined in [client/gateway.ts:45](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L45)*

Version of the current instance

___

## Accessors

<a id="streamingapiurl"></a>

###  streamingApiUrl

**get streamingApiUrl**(): `string`

**set streamingApiUrl**(streamingApiUrl: *`string`*): `void`

*Defined in [client/gateway.ts:76](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L76)*

**Returns:** `string`

*Defined in [client/gateway.ts:80](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| streamingApiUrl | `string` |

**Returns:** `void`

___
<a id="uri"></a>

###  uri

**get uri**(): `string`

**set uri**(uri: *`string`*): `void`

*Defined in [client/gateway.ts:68](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L68)*

**Returns:** `string`

*Defined in [client/gateway.ts:72](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | `string` |

**Returns:** `void`

___

## Methods

<a id="delete"></a>

###  delete

▸ **delete**<`T`>(path: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`T`>

*Defined in [client/gateway.ts:271](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L271)*

HTTP DELETE

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |  Path to request |
| `Default value` data | `any` |  {} |  jPayload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`T`>

___
<a id="get"></a>

###  get

▸ **get**<`T`>(path: *`string`*, params?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`T`>

*Defined in [client/gateway.ts:199](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L199)*

HTTP GET

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |
| `Default value` params | `any` |  {} |  Query strings |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`T`>

___
<a id="paginate"></a>

###  paginate

▸ **paginate**<`Data`,`Params`>(path: *`string`*, initialParams?: *[Params]()*): `AsyncIterableIterator`<`Data` \| `undefined`>

*Defined in [client/gateway.ts:348](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L348)*

Generate an iterable of the pagination. The default generator implementation of JS cannot change the value of `done` depend on the result of yield, Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.

**Type parameters:**

#### Data 
#### Params 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| path | `string` |  Path for the endpoint |
| `Optional` initialParams | [Params]() |  Query parameter |

**Returns:** `AsyncIterableIterator`<`Data` \| `undefined`>
Async iterable iterator of the pages. See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

___
<a id="patch"></a>

###  patch

▸ **patch**<`T`>(path: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`T`>

*Defined in [client/gateway.ts:295](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L295)*

HTTP PATCH

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |  Path to request |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`T`>

___
<a id="post"></a>

###  post

▸ **post**<`T`>(path: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`T`>

*Defined in [client/gateway.ts:223](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L223)*

HTTP POST

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`T`>

___
<a id="put"></a>

###  put

▸ **put**<`T`>(path: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`T`>

*Defined in [client/gateway.ts:247](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L247)*

HTTP PUT

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |  Path to request |
| `Default value` data | `any` |  {} |  Payload |
| `Optional` options | `AxiosRequestConfig` | - |  Fetch API options |

**Returns:** `Promise`<`T`>

___
<a id="stream"></a>

###  stream

▸ **stream**(path: *`string`*, params?: *`object`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/gateway.ts:318](https://github.com/neet/masto.js/blob/368b200/src/client/gateway.ts#L318)*

Connect to a streaming

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string` | - |  Path to stream |
| `Default value` params | `object` |  {} |  Query parameters |

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___

