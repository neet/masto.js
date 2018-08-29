

# Hierarchy

**Gateway**

↳  [Mastodon](_client_mastodon_.mastodon.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Gateway**(options: *`object`*): [Gateway](_client_gateway_.gateway.md)

*Defined in [client/Gateway.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L20)*

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

*Defined in [client/Gateway.ts:17](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L17)*

Streaming API URL of the instance

___
<a id="token"></a>

## `<Protected>``<Optional>` token

**● token**: * `undefined` &#124; `string`
*

*Defined in [client/Gateway.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L20)*

API token of the user

___
<a id="url"></a>

## `<Protected>` url

**● url**: *`string`* = ""

*Defined in [client/Gateway.ts:14](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L14)*

Rest API URL of the instance

___

# Methods

<a id="delete"></a>

## `<Protected>` delete

▸ **delete**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Defined in [client/Gateway.ts:159](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L159)*

HTTP DELETE

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`T`>

___
<a id="get"></a>

## `<Protected>` get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Defined in [client/Gateway.ts:126](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L126)*

HTTP GET

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` params | `object` |  {} |  Query strings |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`T`>

___
<a id="getstreamingurl"></a>

##  getStreamingUrl

▸ **getStreamingUrl**(): `string`

*Defined in [client/Gateway.ts:49](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L49)*

Getting streaming API URL of the instance

**Returns:** `string`
Streaming API URL

___
<a id="gettoken"></a>

##  getToken

▸ **getToken**():  `undefined` &#124; `string`

*Defined in [client/Gateway.ts:55](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L55)*

Getting token of authenticated user

**Returns:**  `undefined` &#124; `string`

The token

___
<a id="geturl"></a>

##  getUrl

▸ **getUrl**(): `string`

*Defined in [client/Gateway.ts:43](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L43)*

Getting rest API URL of the instance

**Returns:** `string`
Rest API URL

___
<a id="patch"></a>

## `<Protected>` patch

▸ **patch**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Defined in [client/Gateway.ts:170](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L170)*

HTTP PATCH

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`T`>

___
<a id="post"></a>

## `<Protected>` post

▸ **post**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Defined in [client/Gateway.ts:137](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L137)*

HTTP POST

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`T`>

___
<a id="put"></a>

## `<Protected>` put

▸ **put**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Defined in [client/Gateway.ts:148](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L148)*

HTTP PUT

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` body | `object` |  {} |  Payload |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`T`>

___
<a id="request"></a>

## `<Protected>` request

▸ **request**(url: *`string`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`any`>

*Defined in [client/Gateway.ts:82](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L82)*

Fetch API wrapper function

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | - |  URL to request |
| `Default value` options | `object` |  {} |  Fetch API options |
| `Default value` parse | `boolean` | true |  Whether parse response before return |

**Returns:** `Promise`<`any`>
Parsed response object

___
<a id="setstreamingurl"></a>

##  setStreamingUrl

▸ **setStreamingUrl**(url: *`string`*): `void`

*Defined in [client/Gateway.ts:67](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L67)*

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

*Defined in [client/Gateway.ts:73](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L73)*

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

*Defined in [client/Gateway.ts:61](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L61)*

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

*Defined in [client/Gateway.ts:179](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L179)*

Start streaming

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |
| params | `object` |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___

