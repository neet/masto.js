

# Hierarchy

 [Gateway](_client_gateway_.gateway.md)

**↳ Mastodon**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Mastodon**(options: *`object`*): [Mastodon](_client_mastodon_.mastodon.md)

*Inherited from [Gateway](_client_gateway_.gateway.md).[constructor](_client_gateway_.gateway.md#constructor)*

*Defined in [client/Gateway.ts:19](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L19)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `object` |  Optional params |

**Returns:** [Mastodon](_client_mastodon_.mastodon.md)

___

# Properties

<a id="streamingurl"></a>

## `<Protected>` streamingUrl

**● streamingUrl**: *`string`* = ""

*Inherited from [Gateway](_client_gateway_.gateway.md).[streamingUrl](_client_gateway_.gateway.md#streamingurl)*

*Defined in [client/Gateway.ts:16](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L16)*

Streaming API URL of the instance

___
<a id="token"></a>

## `<Protected>``<Optional>` token

**● token**: * `undefined` &#124; `string`
*

*Inherited from [Gateway](_client_gateway_.gateway.md).[token](_client_gateway_.gateway.md#token)*

*Defined in [client/Gateway.ts:19](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L19)*

API token of the user

___
<a id="url"></a>

## `<Protected>` url

**● url**: *`string`* = ""

*Inherited from [Gateway](_client_gateway_.gateway.md).[url](_client_gateway_.gateway.md#url)*

*Defined in [client/Gateway.ts:13](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L13)*

Rest API URL of the instance

___

# Methods

<a id="addaccounttolist"></a>

##  addAccountToList

▸ **addAccountToList**(id: *`string`*, account_ids: *`string`[]*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:587](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L587)*

Add accounts to a list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| account_ids | `string`[] |  Array of account IDs |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="addpushsubscription"></a>

##  addPushSubscription

▸ **addPushSubscription**(options: *[AddPushSubscription](../interfaces/_client_options_.addpushsubscription.md)*): `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>

*Defined in [client/Mastodon.ts:720](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L720)*

Add a Web Push API subscription to receive notifications. See also: Web Push API
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [AddPushSubscription](../interfaces/_client_options_.addpushsubscription.md) |  Form data |

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns Push Subscription

___
<a id="authorizefollowrequest"></a>

##  authorizeFollowRequest

▸ **authorizeFollowRequest**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:451](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L451)*

Allow the account to follow the user.
*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize](https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="blockaccount"></a>

##  blockAccount

▸ **blockAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:271](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L271)*

Block an account
*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block](https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="blockdomain"></a>

##  blockDomain

▸ **blockDomain**(domain: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:310](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L310)*

Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| domain | `string` |  Domain to block |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="clearnotifications"></a>

##  clearNotifications

▸ **clearNotifications**(): `Promise`<`void`>

*Defined in [client/Mastodon.ts:700](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L700)*

Delete all notifications from the server.
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear](https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear)

**Returns:** `Promise`<`void`>
Returns an empty object.

___
<a id="createapp"></a>

##  createApp

▸ **createApp**(client_name: *`string`*, redirect_uris: *`string`*, scopes: *`string`*, website?: * `undefined` &#124; `string`*): `Promise`<[OAuth](../interfaces/_entities_application_.oauth.md)>

*Defined in [client/Mastodon.ts:242](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L242)*

Create a new application to obtain OAuth2 credentials.
*__see__*: [https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps](https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| client_name | `string` |  Name of your application |
| redirect_uris | `string` |  Where the user should be redirected after authorization |
| scopes | `string` |  Space separated list of scopes |
| `Optional` website |  `undefined` &#124; `string`|  URL to the homepage of your app |

**Returns:** `Promise`<[OAuth](../interfaces/_entities_application_.oauth.md)>
Returns App with client_id and client_secret

___
<a id="createfiler"></a>

##  createFiler

▸ **createFiler**(phrase: *`string`*, context: *[FilterContext](../modules/_entities_filter_.md#filtercontext)*, options?: *`Options.CreateFilter`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:400](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L400)*

Create a new filter.
*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters](https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| phrase | `string` |  Keyword or phrase to filter |
| context | [FilterContext](../modules/_entities_filter_.md#filtercontext) |  Array of strings that means filtering context. each string is one of \`home\`, \`notifications\`, \`public\`, \`thread\`. At least one context must be specified |
| `Optional` options | `Options.CreateFilter` |  Optional parameters |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
Returns Filter

___
<a id="createlist"></a>

##  createList

▸ **createList**(title: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:555](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L555)*

Create a new list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists](https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  The title of the list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
Returns List

___
<a id="createstatus"></a>

##  createStatus

▸ **createStatus**(status: *`string`*, options?: *`Options.CreateStatus`*, idempotencyKey?: * `undefined` &#124; `string`*): `Promise`<`Object`>

*Defined in [client/Mastodon.ts:835](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L835)*

Publish a new status.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| status | `string` |  The text of the status |
| `Optional` options | `Options.CreateStatus` |  Optional parameter |
| `Optional` idempotencyKey |  `undefined` &#124; `string`|  The Idempotency-Key of request header |

**Returns:** `Promise`<`Object`>
Returns Status

___
<a id="delete"></a>

## `<Protected>` delete

▸ **delete**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[delete](_client_gateway_.gateway.md#delete)*

*Defined in [client/Gateway.ts:181](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L181)*

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
<a id="dissmissnotification"></a>

##  dissmissNotification

▸ **dissmissNotification**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:710](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L710)*

Delete a single notification from the server.
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss](https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Notification ID |

**Returns:** `Promise`<`void`>
Returns an empty object.

___
<a id="favouritestatus"></a>

##  favouriteStatus

▸ **favouriteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:369](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L369)*

Favourite a status.
*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite](https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="fetchaccesstoken"></a>

##  fetchAccessToken

▸ **fetchAccessToken**(code: *`string`*, client_id: *`string`*, client_secret: *`string`*, redirect_uri: *`string`*, grant_type?: *`string`*): `Promise`<`object`>

*Defined in [client/Mastodon.ts:125](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L125)*

Fetch access token from authorization code
*__see__*: [https://docs.joinmastodon.org/api/permissions/](https://docs.joinmastodon.org/api/permissions/)

*__see__*: [https://docs.joinmastodon.org/api/authentication/](https://docs.joinmastodon.org/api/authentication/)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| code | `string` | - |  code |
| client_id | `string` | - |  client\_id of your app |
| client_secret | `string` | - |  client\_secret of your app |
| redirect_uri | `string` | - |  redirect\_uri of your app |
| `Default value` grant_type | `string` | &quot;authorization_code&quot; |  grant\_type |

**Returns:** `Promise`<`object`>

___
<a id="fetchaccount"></a>

##  fetchAccount

▸ **fetchAccount**(id: *`string`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)>

*Defined in [client/Mastodon.ts:135](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L135)*

Fetching an account
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the account |

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)>
Returns Account

___
<a id="fetchaccountfollowers"></a>

##  fetchAccountFollowers

▸ **fetchAccountFollowers**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`< `string`[] &#124; `object`[]>

*Defined in [client/Mastodon.ts:165](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L165)*

Accounts which follow the given account.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.Pagination` |  Query paramerters |

**Returns:** `AsyncIterableIterator`< `string`[] &#124; `object`[]>
Returns array of Account

___
<a id="fetchaccountfollowing"></a>

##  fetchAccountFollowing

▸ **fetchAccountFollowing**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`< `string`[] &#124; `object`[]>

*Defined in [client/Mastodon.ts:176](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L176)*

Accounts which the given account is following.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`< `string`[] &#124; `object`[]>
Returns array of Account

___
<a id="fetchaccountrelationships"></a>

##  fetchAccountRelationships

▸ **fetchAccountRelationships**(id: *`string`[]*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>

*Defined in [client/Mastodon.ts:218](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L218)*

Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`[] |  Array of account IDs |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>
Returns array of Relationship

___
<a id="fetchaccountstatuses"></a>

##  fetchAccountStatuses

▸ **fetchAccountStatuses**(id: *`string`*, options?: *`Options.FetchAccountStatuses`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:187](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L187)*

An account’s statuses.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.FetchAccountStatuses` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
Returns array of Status

___
<a id="fetchblocks"></a>

##  fetchBlocks

▸ **fetchBlocks**(options?: *`Options.Pagination`*): `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/Mastodon.ts:261](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L261)*

Accounts the user has blocked.
*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks](https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchcommunitytimeline"></a>

##  fetchCommunityTimeline

▸ **fetchCommunityTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:908](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L908)*

Retrieving the community timeline (aka "Local timeline" in the UI)
*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="fetchconversations"></a>

##  fetchConversations

▸ **fetchConversations**(): `Promise`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>

*Defined in [client/Mastodon.ts:958](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L958)*

Retrieving a conversation timeline

**Returns:** `Promise`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>
An array of Conversation

___
<a id="fetchcustomemojis"></a>

##  fetchCustomEmojis

▸ **fetchCustomEmojis**(): `Promise`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>

*Defined in [client/Mastodon.ts:290](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L290)*

Custom emojis that are available on the server.
*__see__*: [https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis](https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis)

**Returns:** `Promise`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>
Returns array of Emoji

___
<a id="fetchdirecttimeline"></a>

##  fetchDirectTimeline

▸ **fetchDirectTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:948](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L948)*

Retrieving a direct timeline

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` options | `Options.FetchTimeline` |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="fetchdomainblocks"></a>

##  fetchDomainBlocks

▸ **fetchDomainBlocks**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<`string`[]>

*Defined in [client/Mastodon.ts:300](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L300)*

Domains the user has blocked.
*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<`string`[]>
Returns array of string.

___
<a id="fetchendorsements"></a>

##  fetchEndorsements

▸ **fetchEndorsements**(options?: *`Options.Pagination`*): `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/Mastodon.ts:329](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L329)*

Accounts the user chose to endorse.
*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements](https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements)

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` options | `Options.Pagination` |

**Returns:** `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchfavouritedstatuses"></a>

##  fetchFavouritedStatuses

▸ **fetchFavouritedStatuses**(options?: *`Options.Pagination`*): `Promise`<`AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/Mastodon.ts:359](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L359)*

Statuses the user has favourited.
*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites](https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `Promise`<`AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>>
Returns array of Status

___
<a id="fetchfilter"></a>

##  fetchFilter

▸ **fetchFilter**(id: *`string`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:410](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L410)*

A text filter.
*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
Returns Filter

___
<a id="fetchfilters"></a>

##  fetchFilters

▸ **fetchFilters**(): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)[]>

*Defined in [client/Mastodon.ts:388](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L388)*

Text filters the user has configured that potentially must be applied client-side.
*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters](https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters)

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)[]>
An array of Filters

___
<a id="fetchfollowrequests"></a>

##  fetchFollowRequests

▸ **fetchFollowRequests**(options?: *`Options.Pagination`*): `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/Mastodon.ts:441](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L441)*

Accounts that have requested to follow the user.
*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests](https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `Promise`<`AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchhometimeline"></a>

##  fetchHomeTimeline

▸ **fetchHomeTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:898](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L898)*

Retrieving the home timeline
*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An array of Statuses, most recent ones first.

___
<a id="fetchinstance"></a>

##  fetchInstance

▸ **fetchInstance**(): `Promise`<[Instance](../interfaces/_entities_instance_.instance.md)>

*Defined in [client/Mastodon.ts:489](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L489)*

Information about the server.
*__see__*: [https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance](https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance)

**Returns:** `Promise`<[Instance](../interfaces/_entities_instance_.instance.md)>
Returns Instance

___
<a id="fetchinstanceactivity"></a>

##  fetchInstanceActivity

▸ **fetchInstanceActivity**(): `Promise`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>

*Defined in [client/Mastodon.ts:505](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L505)*

Fetching activities of current instance

**Returns:** `Promise`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>
An array of InstanceActivity

___
<a id="fetchlist"></a>

##  fetchList

▸ **fetchList**(id: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:545](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L545)*

A list
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the targtet list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
Returns List

___
<a id="fetchlistaccounts"></a>

##  fetchListAccounts

▸ **fetchListAccounts**(id: *`string`*, options: *[Pagination](../interfaces/_client_options_.pagination.md)*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:535](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L535)*

Accounts that are in a given list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| options | [Pagination](../interfaces/_client_options_.pagination.md) |  Optional params |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns array of Account

___
<a id="fetchlistbymembership"></a>

##  fetchListByMembership

▸ **fetchListByMembership**(id: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)[]>

*Defined in [client/Mastodon.ts:524](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L524)*

User’s lists that a given account is part of.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)[]>
Returns array of List

___
<a id="fetchlisttimeline"></a>

##  fetchListTimeline

▸ **fetchListTimeline**(id: *`string`*, options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:940](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L940)*

Retrieving a list timeline
*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="fetchlists"></a>

##  fetchLists

▸ **fetchLists**(): `Promise`<[List](../interfaces/_entities_list_.list.md)[]>

*Defined in [client/Mastodon.ts:514](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L514)*

User’s lists.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists)

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)[]>
Returns array of List

___
<a id="fetchmutes"></a>

##  fetchMutes

▸ **fetchMutes**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:630](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L630)*

Accounts the user has muted.
*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes](https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns array of Account

___
<a id="fetchnotification"></a>

##  fetchNotification

▸ **fetchNotification**(id: *`string`*): `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)>

*Defined in [client/Mastodon.ts:691](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L691)*

Getting a single notification
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Notification ID |

**Returns:** `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)>
Returns Notification

___
<a id="fetchnotifications"></a>

##  fetchNotifications

▸ **fetchNotifications**(options?: *`Options.FetchNotifications`*): `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)[]>

*Defined in [client/Mastodon.ts:681](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L681)*

Notifications concerning the user.
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchNotifications` |  Query parameters |

**Returns:** `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)[]>
Returns array of Notification

___
<a id="fetchpeerinstances"></a>

##  fetchPeerInstances

▸ **fetchPeerInstances**(): `Promise`<`string`[]>

*Defined in [client/Mastodon.ts:497](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L497)*

Fetching peer instances

**Returns:** `Promise`<`string`[]>
An array of peer instance's domain

___
<a id="fetchpublictimeline"></a>

##  fetchPublicTimeline

▸ **fetchPublicTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:918](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L918)*

Retrieving the public timeline (aka "Federated timeline" in the UI)
*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="fetchpushsubscription"></a>

##  fetchPushSubscription

▸ **fetchPushSubscription**(): `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>

*Defined in [client/Mastodon.ts:729](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L729)*

Push Subscription
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription)

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns Push Subscription

___
<a id="fetchstatus"></a>

##  fetchStatus

▸ **fetchStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:782](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L782)*

Status
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="fetchstatuscard"></a>

##  fetchStatusCard

▸ **fetchStatusCard**(id: *`string`*): `Promise`<[Card](../interfaces/_entities_card_.card.md)>

*Defined in [client/Mastodon.ts:801](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L801)*

Link preview card for a status, if available.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card)

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[Card](../interfaces/_entities_card_.card.md)>
Returns Card

___
<a id="fetchstatuscontext"></a>

##  fetchStatusContext

▸ **fetchStatusContext**(id: *`string`*): `Promise`<[Context](../interfaces/_entities_context_.context.md)>

*Defined in [client/Mastodon.ts:792](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L792)*

What the status replies to, and replies to it.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Context](../interfaces/_entities_context_.context.md)>
Returns Context

___
<a id="fetchstatusfavouritedby"></a>

##  fetchStatusFavouritedBy

▸ **fetchStatusFavouritedBy**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:823](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L823)*

Accounts that favourited the status.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns array of Account

___
<a id="fetchstatusrebloggedby"></a>

##  fetchStatusRebloggedBy

▸ **fetchStatusRebloggedBy**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:812](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L812)*

Accounts that reblogged the status.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns array of Account

___
<a id="fetchsuggestions"></a>

##  fetchSuggestions

▸ **fetchSuggestions**(): `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:470](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L470)*

Accounts the user had past positive interactions with, but is not following yet.
*__see__*: [https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions](https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions)

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts

___
<a id="fetchtagtimeline"></a>

##  fetchTagTimeline

▸ **fetchTagTimeline**(id: *`string`*, options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:929](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L929)*

Retrieving a tag timeline
*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the hashtag |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="followaccount"></a>

##  followAccount

▸ **followAccount**(id: *`string`*, reblogs?: * `undefined` &#124; `false` &#124; `true`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:198](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L198)*

Follow an account.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow](https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` reblogs |  `undefined` &#124; `false` &#124; `true`|  Whether the followed account’s reblogs will show up in the home timeline |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="followaccountbyusername"></a>

##  followAccountByUsername

▸ **followAccountByUsername**(uri: *`string`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)>

*Defined in [client/Mastodon.ts:968](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L968)*

Following a remote user
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  \`username@domain\` of the person you want to follow |

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)>
The local representation of the followed account, as an Account.

___
<a id="get"></a>

## `<Protected>` get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[get](_client_gateway_.gateway.md#get)*

*Defined in [client/Gateway.ts:134](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L134)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[getStreamingUrl](_client_gateway_.gateway.md#getstreamingurl)*

*Defined in [client/Gateway.ts:48](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L48)*

Getting streaming API URL of the instance

**Returns:** `string`
Streaming API URL

___
<a id="gettoken"></a>

##  getToken

▸ **getToken**():  `undefined` &#124; `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[getToken](_client_gateway_.gateway.md#gettoken)*

*Defined in [client/Gateway.ts:54](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L54)*

Getting token of authenticated user

**Returns:**  `undefined` &#124; `string`

The token

___
<a id="geturl"></a>

##  getUrl

▸ **getUrl**(): `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[getUrl](_client_gateway_.gateway.md#geturl)*

*Defined in [client/Gateway.ts:42](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L42)*

Getting rest API URL of the instance

**Returns:** `string`
Rest API URL

___
<a id="muteaccount"></a>

##  muteAccount

▸ **muteAccount**(id: *`string`*, notifications?: *`boolean`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:641](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L641)*

Mute an account.
*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| id | `string` | - |  ID of the target account |
| `Default value` notifications | `boolean` | true |  Whether the mute will mute notifications or not |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="mutestatus"></a>

##  muteStatus

▸ **muteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:661](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L661)*

Mute the conversation the status is part of, to no longer be notified about it.
*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="paginationgenerator"></a>

## `<Protected>` paginationGenerator

▸ **paginationGenerator**<`T`>(path: *`string`*, params?: *`any`*): `AsyncIterableIterator`<`T`>

*Defined in [client/Mastodon.ts:30](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L30)*

Generate an iterable of the pagination

**Type parameters:**

#### T :   `string`[] &#124; `object`[]

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string` |
| `Optional` params | `any` |  Query parameters |

**Returns:** `AsyncIterableIterator`<`T`>
An async iterable of statuses, most recent ones first.

___
<a id="patch"></a>

## `<Protected>` patch

▸ **patch**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[patch](_client_gateway_.gateway.md#patch)*

*Defined in [client/Gateway.ts:197](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L197)*

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
<a id="pinaccount"></a>

##  pinAccount

▸ **pinAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:339](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L339)*

Endorse an account, i.e. choose to feature the account on the user’s public profile.
*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin](https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="pinstatus"></a>

##  pinStatus

▸ **pinStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:878](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L878)*

Pin user’s own status to user’s profile.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="post"></a>

## `<Protected>` post

▸ **post**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[post](_client_gateway_.gateway.md#post)*

*Defined in [client/Gateway.ts:149](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L149)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[put](_client_gateway_.gateway.md#put)*

*Defined in [client/Gateway.ts:165](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L165)*

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
<a id="reblogstatus"></a>

##  reblogStatus

▸ **reblogStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:858](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L858)*

Reblog a status.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="rejectfollowrequest"></a>

##  rejectFollowRequest

▸ **rejectFollowRequest**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:461](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L461)*

Do not allow the account to follow the user.
*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject](https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removeaccountfromlist"></a>

##  removeAccountFromList

▸ **removeAccountFromList**(id: *`string`*, account_ids: *`string`[]*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:598](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L598)*

Remove accounts from a list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| account_ids | `string`[] |  Array of account IDs |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removefilter"></a>

##  removeFilter

▸ **removeFilter**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:431](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L431)*

Delete a text filter.
*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removelist"></a>

##  removeList

▸ **removeList**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:576](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L576)*

Remove a list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removepushsubscription"></a>

##  removePushSubscription

▸ **removePushSubscription**(): `Promise`<`void`>

*Defined in [client/Mastodon.ts:748](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L748)*

Remove the current Web Push API subscription.
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription)

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removestatus"></a>

##  removeStatus

▸ **removeStatus**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:848](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L848)*

Remove a status. The status may still be available a short while after the call.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id](https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removesuggestion"></a>

##  removeSuggestion

▸ **removeSuggestion**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:480](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L480)*

Remove account from suggestions.
*__see__*: [https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id](https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`void`>
An array of Accounts

___
<a id="reportaccount"></a>

##  reportAccount

▸ **reportAccount**(account_id: *`string`*, status_ids?: * `string`[] &#124; `null`*, comment?: * `string` &#124; `null`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:760](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L760)*

Report an account.
*__see__*: [https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports](https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| account_id | `string` |  The ID of the account to report |
| `Optional` status_ids |  `string`[] &#124; `null`|  The IDs of statuses to report as array |
| `Optional` comment |  `string` &#124; `null`|  Reason for the report (up to 1,000 characters) |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="request"></a>

## `<Protected>` request

▸ **request**<`T`>(options: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[request](_client_gateway_.gateway.md#request)*

*Defined in [client/Gateway.ts:80](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L80)*

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
<a id="search"></a>

##  search

▸ **search**<`V`>(q: *`string`*, resolve?: *`boolean`*, version?: *`V`*): `Promise`<[Results](../interfaces/_entities_results_.results.md)<`V`>>

*Defined in [client/Mastodon.ts:772](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L772)*

Search for content in accounts, statuses and hashtags.
*__see__*: [https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search](https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search)

**Type parameters:**

#### V :   "v1" &#124; "v2"

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| q | `string` | - |  The search query |
| `Default value` resolve | `boolean` | false |  Attempt WebFinger look-up |
| `Default value` version | `V` |  &#x27;v2&#x27; as V |  Version of Mastodon API (default: \`'v2'\`) |

**Returns:** `Promise`<[Results](../interfaces/_entities_results_.results.md)<`V`>>
Returns Results

___
<a id="searchaccounts"></a>

##  searchAccounts

▸ **searchAccounts**(q: *`string`*, options?: *`Options.SearchAccounts`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:229](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L229)*

Search for matching accounts by username, domain and display name.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| q | `string` |  What to search for |
| `Optional` options | `Options.SearchAccounts` |  Query parameters |

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns array of Account

___
<a id="setstreamingurl"></a>

##  setStreamingUrl

▸ **setStreamingUrl**(url: *`string`*): `void`

*Inherited from [Gateway](_client_gateway_.gateway.md).[setStreamingUrl](_client_gateway_.gateway.md#setstreamingurl)*

*Defined in [client/Gateway.ts:66](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L66)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[setToken](_client_gateway_.gateway.md#settoken)*

*Defined in [client/Gateway.ts:72](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L72)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[setUrl](_client_gateway_.gateway.md#seturl)*

*Defined in [client/Gateway.ts:60](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L60)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[stream](_client_gateway_.gateway.md#stream)*

*Defined in [client/Gateway.ts:211](https://github.com/lagunehq/core/blob/8aa3625/src/client/Gateway.ts#L211)*

Start streaming

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |
| params | `object` |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamcommunitytimeline"></a>

##  streamCommunityTimeline

▸ **streamCommunityTimeline**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:72](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L72)*

Starting local timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamdirecttimeline"></a>

##  streamDirectTimeline

▸ **streamDirectTimeline**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:111](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L111)*

Starting direct timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamlisttimeline"></a>

##  streamListTimeline

▸ **streamListTimeline**(id: *`string`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:102](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L102)*

Starting list timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamlocaltagtimeline"></a>

##  streamLocalTagTimeline

▸ **streamLocalTagTimeline**(id: *`string`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:92](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L92)*

Starting local tag timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streampublictimeline"></a>

##  streamPublicTimeline

▸ **streamPublicTimeline**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:63](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L63)*

Starting federated timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamtagtimeline"></a>

##  streamTagTimeline

▸ **streamTagTimeline**(id: *`string`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:82](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L82)*

Starting tag timeline streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamuser"></a>

##  streamUser

▸ **streamUser**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:54](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L54)*

Starting home timeline and notification streaming
*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="unblockaccount"></a>

##  unblockAccount

▸ **unblockAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:281](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L281)*

Unblock an account
*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock](https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="unblockdomain"></a>

##  unblockDomain

▸ **unblockDomain**(domain: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:320](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L320)*

Remove a domain block.
*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| domain | `string` |  Domain to unblock |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="unfavouritestatus"></a>

##  unfavouriteStatus

▸ **unfavouriteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:379](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L379)*

Undo the favourite of a status.
*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite](https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="unfollowaccount"></a>

##  unfollowAccount

▸ **unfollowAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:208](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L208)*

Unfollow an account.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow](https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="unmuteaccount"></a>

##  unmuteAccount

▸ **unmuteAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:651](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L651)*

Unmute an account
*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="unmutestatus"></a>

##  unmuteStatus

▸ **unmuteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:671](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L671)*

Unmute the conversation the status is part of.
*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="unpinaccount"></a>

##  unpinAccount

▸ **unpinAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:349](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L349)*

Unpin an account
*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin](https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
Returns Relationship

___
<a id="unpinstatus"></a>

##  unpinStatus

▸ **unpinStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:888](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L888)*

Remove pinned status from user’s profile.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="unreblogstatus"></a>

##  unreblogStatus

▸ **unreblogStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:868](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L868)*

Undo the reblog of a status.
*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
Returns Status

___
<a id="updatecredentials"></a>

##  updateCredentials

▸ **updateCredentials**(options?: *`Options.UpdateCredentials`*): `Promise`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>

*Defined in [client/Mastodon.ts:154](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L154)*

Update user’s own account.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials](https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.UpdateCredentials` |  Form data |

**Returns:** `Promise`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>
Returns Account

___
<a id="updatefilter"></a>

##  updateFilter

▸ **updateFilter**(id: *`string`*, options?: *`Options.UpdateFilter`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:421](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L421)*

Update a text filter.
*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |
| `Optional` options | `Options.UpdateFilter` |  Optinal parameters |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
Returns Filter

___
<a id="updatelist"></a>

##  updateList

▸ **updateList**(id: *`string`*, title: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:566](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L566)*

Update a list.
*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| title | `string` |  The title of the list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
Returns List

___
<a id="updatemediaattachment"></a>

##  updateMediaAttachment

▸ **updateMediaAttachment**(id: *`string`*, options?: *`Options.UpdateMedia`*): `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>

*Defined in [client/Mastodon.ts:620](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L620)*

Update a media attachment. Can only be done before the media is attached to a status.
*__see__*: [https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id](https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target attachment |
| `Optional` options | `Options.UpdateMedia` |  Form data |

**Returns:** `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>
Returns Returns Attachment

___
<a id="updatepushsubscription"></a>

##  updatePushSubscription

▸ **updatePushSubscription**(options: *`Options.UpdatePushSubscription`*): `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>

*Defined in [client/Mastodon.ts:739](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L739)*

Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `Options.UpdatePushSubscription` |  Form data |

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns Push Subscription

___
<a id="uploadmediaattachment"></a>

##  uploadMediaAttachment

▸ **uploadMediaAttachment**(file: *`File`*, options?: *`Options.UploadMedia`*): `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>

*Defined in [client/Mastodon.ts:609](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L609)*

Upload a media attachment that can be used with a new status.
*__see__*: [https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media](https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| file | `File` |  Media to be uploaded (encoded using \`multipart/form-data\`) |
| `Optional` options | `Options.UploadMedia` |  Form data |

**Returns:** `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>
Returns Attachment

___
<a id="verfiycredentials"></a>

##  verfiyCredentials

▸ **verfiyCredentials**(): `Promise`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>

*Defined in [client/Mastodon.ts:144](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L144)*

User’s own account.
*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials)

**Returns:** `Promise`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>
Returns Account with an extra source attribute.

___
<a id="verifyappcredential"></a>

##  verifyAppCredential

▸ **verifyAppCredential**(): `Promise`<[Application](../interfaces/_entities_application_.application.md)>

*Defined in [client/Mastodon.ts:251](https://github.com/lagunehq/core/blob/8aa3625/src/client/Mastodon.ts#L251)*

Confirm that the app’s OAuth2 credentials work.
*__see__*: [https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials](https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials)

**Returns:** `Promise`<[Application](../interfaces/_entities_application_.application.md)>
Returns App

___

