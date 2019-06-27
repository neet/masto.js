> ## [masto](../README.md)

[Globals](../globals.md) / ["gateway/gateway"](../modules/_gateway_gateway_.md) / [Gateway](_gateway_gateway_.gateway.md) /

# Class: Gateway

Mastodon network request wrapper

**`param`** Optional params

## Hierarchy

* **Gateway**

  * [Masto](_clients_masto_masto_.masto.md)

  * [MastoAdmin](_clients_masto_admin_masto_admin_.mastoadmin.md)

### Index

#### Constructors

* [constructor](_gateway_gateway_.gateway.md#constructor)

#### Properties

* [accessToken](_gateway_gateway_.gateway.md#optional-accesstoken)
* [version](_gateway_gateway_.gateway.md#version)

#### Accessors

* [streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)
* [uri](_gateway_gateway_.gateway.md#uri)

#### Methods

* [delete](_gateway_gateway_.gateway.md#delete)
* [get](_gateway_gateway_.gateway.md#get)
* [paginate](_gateway_gateway_.gateway.md#paginate)
* [patch](_gateway_gateway_.gateway.md#patch)
* [post](_gateway_gateway_.gateway.md#post)
* [put](_gateway_gateway_.gateway.md#put)
* [stream](_gateway_gateway_.gateway.md#stream)
* [login](_gateway_gateway_.gateway.md#static-login)

## Constructors

###  constructor

\+ **new Gateway**(`params`: [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md)): *[Gateway](_gateway_gateway_.gateway.md)*

*Defined in [gateway/gateway.ts:57](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L57)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md) | Parameters  |

**Returns:** *[Gateway](_gateway_gateway_.gateway.md)*

___

## Properties

### `Optional` accessToken

● **accessToken**? : *undefined | string*

*Defined in [gateway/gateway.ts:53](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L53)*

API token of the user

___

###  version

● **version**: *string* = ""

*Defined in [gateway/gateway.ts:51](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L51)*

Version of the current instance

___

## Accessors

###  streamingApiUrl

● **get streamingApiUrl**(): *string*

*Defined in [gateway/gateway.ts:96](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L96)*

**Returns:** *string*

● **set streamingApiUrl**(`streamingApiUrl`: string): *void*

*Defined in [gateway/gateway.ts:100](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`streamingApiUrl` | string |

**Returns:** *void*

___

###  uri

● **get uri**(): *string*

*Defined in [gateway/gateway.ts:88](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L88)*

**Returns:** *string*

● **set uri**(`uri`: string): *void*

*Defined in [gateway/gateway.ts:92](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *void*

___

## Methods

###  delete

▸ **delete**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Defined in [gateway/gateway.ts:276](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L276)*

HTTP DELETE

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | jPayload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  get

▸ **get**<**T**>(`path`: string, `params`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Defined in [gateway/gateway.ts:210](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L210)*

HTTP GET

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`params` | any |  {} | Query strings |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  paginate

▸ **paginate**<**Data**, **Params**>(`path`: string, `initialParams?`: [Params]()): *`AsyncIterableIterator<Data | undefined>`*

*Defined in [gateway/gateway.ts:349](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L349)*

Generate an iterable of the pagination.
The default generator implementation of JS cannot change the value of `done` depend on the result of yield,
Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.

**Type parameters:**

■` Data`

■` Params`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path for the endpoint |
`initialParams?` | [Params]() | Query parameter |

**Returns:** *`AsyncIterableIterator<Data | undefined>`*

Async iterable iterator of the pages.
See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

___

###  patch

▸ **patch**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Defined in [gateway/gateway.ts:298](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L298)*

HTTP PATCH

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  post

▸ **post**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Defined in [gateway/gateway.ts:232](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L232)*

HTTP POST

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  put

▸ **put**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Defined in [gateway/gateway.ts:254](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L254)*

HTTP PUT

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  stream

▸ **stream**(`path`: string, `params`: object): *`Promise<WebSocketEvents>`*

*Defined in [gateway/gateway.ts:319](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L319)*

Connect to a streaming

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to stream |
`params` | object |  {} | Query parameters |

**Returns:** *`Promise<WebSocketEvents>`*

Instance of EventEmitter

___

### `Static` login

▸ **login**<**T**>(`this`: `T`, `params`: [LoginParams](../modules/_gateway_gateway_.md#loginparams)): *`Promise<InstanceType<T>>`*

*Defined in [gateway/gateway.ts:109](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/gateway.ts#L109)*

Login to Mastodon

**Type parameters:**

■` T`: *[Gateway](_gateway_gateway_.gateway.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | `T` | - |
`params` | [LoginParams](../modules/_gateway_gateway_.md#loginparams) | Paramters |

**Returns:** *`Promise<InstanceType<T>>`*

Instance of Mastodon class

___