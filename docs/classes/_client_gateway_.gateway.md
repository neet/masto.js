

# Hierarchy

**Gateway**

↳  [Mastodon](_client_mastodon_.mastodon.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Gateway**(options: *`object`*): [Gateway](_client_gateway_.gateway.md)

*Defined in [client/Gateway.ts:19](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L19)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `object` |  Optional params |

**Returns:** [Gateway](_client_gateway_.gateway.md)

___

# Properties

<a id="streamingurl"></a>

## `<Protected>` streamingUrl

**● streamingUrl**: *`string`* = ""

*Defined in [client/Gateway.ts:16](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L16)*

Streaming API URL of the instance

___
<a id="token"></a>

## `<Protected>``<Optional>` token

**● token**: * `undefined` &#124; `string`
*

*Defined in [client/Gateway.ts:19](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L19)*

API token of the user

___
<a id="url"></a>

## `<Protected>` url

**● url**: *`string`* = ""

*Defined in [client/Gateway.ts:13](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L13)*

Rest API URL of the instance

___

# Methods

<a id="delete"></a>

## `<Protected>` delete

▸ **delete**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:181](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L181)*

HTTP DELETE

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="get"></a>

## `<Protected>` get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:134](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L134)*

HTTP GET

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` params | `object` |  {} |  Query strings |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="getstreamingurl"></a>

##  getStreamingUrl

▸ **getStreamingUrl**(): `string`

*Defined in [client/Gateway.ts:48](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L48)*

Getting streaming API URL of the instance

**Returns:** `string`
Streaming API URL

___
<a id="gettoken"></a>

##  getToken

▸ **getToken**():  `undefined` &#124; `string`

*Defined in [client/Gateway.ts:54](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L54)*

Getting token of authenticated user

**Returns:**  `undefined` &#124; `string`

The token

___
<a id="geturl"></a>

##  getUrl

▸ **getUrl**(): `string`

*Defined in [client/Gateway.ts:42](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L42)*

Getting rest API URL of the instance

**Returns:** `string`
Rest API URL

___
<a id="patch"></a>

## `<Protected>` patch

▸ **patch**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:197](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L197)*

HTTP PATCH

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="post"></a>

## `<Protected>` post

▸ **post**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:149](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L149)*

HTTP POST

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="put"></a>

## `<Protected>` put

▸ **put**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:165](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L165)*

HTTP PUT

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="request"></a>

## `<Protected>` request

▸ **request**<`T`>(options: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:80](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L80)*

Fetch API wrapper function

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `AxiosRequestConfig` |  Axios options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>
Parsed response object

___
<a id="setstreamingurl"></a>

##  setStreamingUrl

▸ **setStreamingUrl**(url: *`string`*): `void`

*Defined in [client/Gateway.ts:66](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L66)*

Setting streaming API URL of the instance

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL of the instance |

**Returns:** `void`

___
<a id="settoken"></a>

##  setToken

▸ **setToken**(token: *`string`*): `void`

*Defined in [client/Gateway.ts:72](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L72)*

Setting token of authenticated user

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Token of the user |

**Returns:** `void`

___
<a id="seturl"></a>

##  setUrl

▸ **setUrl**(url: *`string`*): `void`

*Defined in [client/Gateway.ts:60](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L60)*

Setting rest API URL of the instance

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL of the instance |

**Returns:** `void`

___
<a id="stream"></a>

## `<Protected>` stream

▸ **stream**(url: *`string`*, params: *`object`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Gateway.ts:211](https://github.com/lagunehq/core/blob/ad87ae7/src/client/Gateway.ts#L211)*

Start streaming

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |
| params | `object` |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___

