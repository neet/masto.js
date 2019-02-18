

# Hierarchy

**Gateway**

↳  [Mastodon](_client_mastodon_.mastodon.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Gateway**(options: *`object`*): [Gateway](_client_gateway_.gateway.md)

*Defined in [client/Gateway.ts:18](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L18)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | `object` |  Optional params |

**Returns:** [Gateway](_client_gateway_.gateway.md)

___

# Properties

<a id="streamingurl"></a>

## `<Protected>` streamingUrl

**● streamingUrl**: *`string`* = ""

*Defined in [client/Gateway.ts:15](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L15)*

Streaming API URL of the instance

___
<a id="token"></a>

## `<Protected>``<Optional>` token

**● token**: * `undefined` &#124; `string`
*

*Defined in [client/Gateway.ts:18](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L18)*

API token of the user

___
<a id="url"></a>

## `<Protected>` url

**● url**: *`string`* = ""

*Defined in [client/Gateway.ts:12](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L12)*

Rest API URL of the instance

___

# Methods

<a id="delete"></a>

## `<Protected>` delete

▸ **delete**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:202](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L202)*

HTTP DELETE

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="get"></a>

## `<Protected>` get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:153](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L153)*

HTTP GET

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` params | `object` |  {} |  Query strings |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="getstreamingurl"></a>

##  getStreamingUrl

▸ **getStreamingUrl**(): `string`

*Defined in [client/Gateway.ts:51](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L51)*

Getting streaming API URL of the instance

**Returns:** `string`
Streaming API URL

___
<a id="gettoken"></a>

##  getToken

▸ **getToken**():  `undefined` &#124; `string`

*Defined in [client/Gateway.ts:57](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L57)*

Getting token of authenticated user

**Returns:**  `undefined` &#124; `string`

The token

___
<a id="geturl"></a>

##  getUrl

▸ **getUrl**(): `string`

*Defined in [client/Gateway.ts:45](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L45)*

Getting rest API URL of the instance

**Returns:** `string`
Rest API URL

___
<a id="patch"></a>

## `<Protected>` patch

▸ **patch**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:218](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L218)*

HTTP PATCH

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="post"></a>

## `<Protected>` post

▸ **post**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:170](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L170)*

HTTP POST

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="put"></a>

## `<Protected>` put

▸ **put**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:186](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L186)*

HTTP PUT

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>

___
<a id="request"></a>

## `<Protected>` request

▸ **request**<`T`>(options: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Defined in [client/Gateway.ts:89](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L89)*

Fetch API wrapper function

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | `AxiosRequestConfig` |  Axios options |

**Returns:** `Promise`<`AxiosResponse`<`T`>>
Parsed response object

___
<a id="setstreamingurl"></a>

##  setStreamingUrl

▸ **setStreamingUrl**(url: *`string`*): `void`

*Defined in [client/Gateway.ts:71](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L71)*

Setting streaming API URL of the instance

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL of the instance |

**Returns:** `void`

___
<a id="settoken"></a>

##  setToken

▸ **setToken**(token: *`string`*): `void`

*Defined in [client/Gateway.ts:79](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L79)*

Setting token of authenticated user

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Token of the user |

**Returns:** `void`

___
<a id="seturl"></a>

##  setUrl

▸ **setUrl**(url: *`string`*): `void`

*Defined in [client/Gateway.ts:63](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L63)*

Setting rest API URL of the instance

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  URL of the instance |

**Returns:** `void`

___
<a id="stream"></a>

## `<Protected>` stream

▸ **stream**(url: *`string`*, params: *`object`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Gateway.ts:232](https://github.com/lagunehq/core/blob/daa242c/src/client/Gateway.ts#L232)*

Start streaming

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| params | `object` |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___

