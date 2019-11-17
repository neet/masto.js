[masto](../README.md) › [Globals](../globals.md) › ["gateway/gateway"](../modules/_gateway_gateway_.md) › [Gateway](_gateway_gateway_.gateway.md)

# Class: Gateway

Mastodon network request wrapper

**`param`** Optional params

## Hierarchy

* **Gateway**

  ↳ [Masto](_clients_masto_masto_.masto.md)

  ↳ [MastoAdmin](_clients_masto_admin_masto_admin_.mastoadmin.md)

## Index

### Constructors

* [constructor](_gateway_gateway_.gateway.md#constructor)

### Properties

* [accessToken](_gateway_gateway_.gateway.md#optional-accesstoken)
* [version](_gateway_gateway_.gateway.md#version)

### Accessors

* [streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)
* [uri](_gateway_gateway_.gateway.md#uri)

### Methods

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

*Defined in [src/gateway/gateway.ts:62](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L62)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md) | Parameters  |

**Returns:** *[Gateway](_gateway_gateway_.gateway.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *undefined | string*

*Defined in [src/gateway/gateway.ts:62](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L62)*

API token of the user

___

###  version

• **version**: *string* = ""

*Defined in [src/gateway/gateway.ts:60](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L60)*

Version of the current instance

## Accessors

###  streamingApiUrl

• **get streamingApiUrl**(): *string*

*Defined in [src/gateway/gateway.ts:101](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L101)*

**Returns:** *string*

• **set streamingApiUrl**(`streamingApiUrl`: string): *void*

*Defined in [src/gateway/gateway.ts:105](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`streamingApiUrl` | string |

**Returns:** *void*

___

###  uri

• **get uri**(): *string*

*Defined in [src/gateway/gateway.ts:93](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L93)*

**Returns:** *string*

• **set uri**(`uri`: string): *void*

*Defined in [src/gateway/gateway.ts:97](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *void*

## Methods

###  delete

▸ **delete**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Defined in [src/gateway/gateway.ts:277](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L277)*

HTTP DELETE

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | unknown |  {} | jPayload |
`options?` | AxiosRequestConfig | - | Fetch API options |

**Returns:** *Promise‹T›*

___

###  get

▸ **get**<**T**>(`path`: string, `params`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Defined in [src/gateway/gateway.ts:215](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L215)*

HTTP GET

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`params` | unknown |  {} | Query strings |
`options?` | AxiosRequestConfig | - | Fetch API options |

**Returns:** *Promise‹T›*

___

###  paginate

▸ **paginate**<**T**, **U**>(`initialUrl`: string, `initialParams?`: [U](undefined)): *AsyncGenerator‹T, void, [PaginateNext](../modules/_gateway_gateway_.md#paginatenext)‹U››*

*Defined in [src/gateway/gateway.ts:347](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L347)*

Generate an iterable of the pagination.

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initialUrl` | string | - |
`initialParams?` | [U](undefined) | Query parameter |

**Returns:** *AsyncGenerator‹T, void, [PaginateNext](../modules/_gateway_gateway_.md#paginatenext)‹U››*

Async iterable iterator of the pages.
See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

___

###  patch

▸ **patch**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Defined in [src/gateway/gateway.ts:299](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L299)*

HTTP PATCH

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | unknown |  {} | Payload |
`options?` | AxiosRequestConfig | - | Fetch API options |

**Returns:** *Promise‹T›*

___

###  post

▸ **post**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Defined in [src/gateway/gateway.ts:237](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L237)*

HTTP POST

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`data` | unknown |  {} | Payload |
`options?` | AxiosRequestConfig | - | Fetch API options |

**Returns:** *Promise‹T›*

___

###  put

▸ **put**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Defined in [src/gateway/gateway.ts:259](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L259)*

HTTP PUT

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | unknown |  {} | Payload |
`options?` | AxiosRequestConfig | - | Fetch API options |

**Returns:** *Promise‹T›*

___

###  stream

▸ **stream**(`path`: string, `params`: ParsedUrlQueryInput): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/gateway/gateway.ts:320](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L320)*

Connect to a streaming

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to stream |
`params` | ParsedUrlQueryInput |  {} | Query parameters |

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

### `Static` login

▸ **login**<**T**>(`this`: T, `params`: [LoginParams](../modules/_gateway_gateway_.md#loginparams)): *Promise‹InstanceType<T>›*

*Defined in [src/gateway/gateway.ts:114](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L114)*

Login to Mastodon

**Type parameters:**

▪ **T**: *[Gateway](_gateway_gateway_.gateway.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`params` | [LoginParams](../modules/_gateway_gateway_.md#loginparams) | Paramters |

**Returns:** *Promise‹InstanceType<T>›*

Instance of Mastodon class
