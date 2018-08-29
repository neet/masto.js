

# Hierarchy

 [Gateway](_client_gateway_.gateway.md)

**↳ Mastodon**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Mastodon**(options: *`object`*): [Mastodon](_client_mastodon_.mastodon.md)

*Inherited from [Gateway](_client_gateway_.gateway.md).[constructor](_client_gateway_.gateway.md#constructor)*

*Defined in [client/Gateway.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L20)*

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

*Defined in [client/Gateway.ts:17](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L17)*

Streaming API URL of the instance

___
<a id="token"></a>

## `<Protected>``<Optional>` token

**● token**: * `undefined` &#124; `string`
*

*Inherited from [Gateway](_client_gateway_.gateway.md).[token](_client_gateway_.gateway.md#token)*

*Defined in [client/Gateway.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L20)*

API token of the user

___
<a id="url"></a>

## `<Protected>` url

**● url**: *`string`* = ""

*Inherited from [Gateway](_client_gateway_.gateway.md).[url](_client_gateway_.gateway.md#url)*

*Defined in [client/Gateway.ts:14](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L14)*

Rest API URL of the instance

___

# Methods

<a id="addaccounttolist"></a>

##  addAccountToList

▸ **addAccountToList**(id: *`string`*, account_ids: *`string`[]*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:508](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L508)*

Adding accounts to a list

*   Note: Only accounts already followed by the authenticated user can be added to a list.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)

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

*Defined in [client/Mastodon.ts:611](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L611)*

Adding push subscription

*   Each access token can have one push subscription. If you post new subscription. the old subscription is deleted.
*   The endpoint URL is called when notification event is happen, and its payload is encrypted according to The Web Push Protocol.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#adding-push-subscription](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#adding-push-subscription)

*__see__*: [https://developers.google.com/web/updates/2016/03/web-push-encryption](https://developers.google.com/web/updates/2016/03/web-push-encryption)

*__see__*: [https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol](https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [AddPushSubscription](../interfaces/_client_options_.addpushsubscription.md) |  Form data |

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns the Push Subscription

___
<a id="authorizefollowrequest"></a>

##  authorizeFollowRequest

▸ **authorizeFollowRequest**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:366](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L366)*

Authorizing follow requests
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)

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

*Defined in [client/Mastodon.ts:202](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L202)*

Blocking an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="blockdomain"></a>

##  blockDomain

▸ **blockDomain**(domain: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:324](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L324)*

Blocking a domain
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)

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

*Defined in [client/Mastodon.ts:586](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L586)*

Clearing notifications

*   Deletes all notifications from the Mastodon server for the authenticated user.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)

**Returns:** `Promise`<`void`>
Returns an empty object.

___
<a id="createapp"></a>

##  createApp

▸ **createApp**(client_name: *`string`*, redirect_uris: *`string`*, scopes: *`string`*, website?: * `undefined` &#124; `string`*): `Promise`<[OAuth](../interfaces/_entities_oauth_.oauth.md)>

*Defined in [client/Mastodon.ts:292](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L292)*

Registering an application

*   These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| client_name | `string` |  Name of your application |
| redirect_uris | `string` |  Where the user should be redirected after authorization (for no redirect, use \`urn:ietf:wg:oauth:2.0:oob\`) |
| scopes | `string` |  This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do) |
| `Optional` website |  `undefined` &#124; `string`|  URL to the homepage of your app |

**Returns:** `Promise`<[OAuth](../interfaces/_entities_oauth_.oauth.md)>
Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.

___
<a id="createfiler"></a>

##  createFiler

▸ **createFiler**(phrase: *`string`*, context: *[FilterContext](../modules/_entities_filter_.md#filtercontext)*, options?: *`Options.CreateFilter`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:955](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L955)*

Creating a filter

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| phrase | `string` |  String that contains keyword or phrase |
| context | [FilterContext](../modules/_entities_filter_.md#filtercontext) |  Array of strings that means filtering context. each string is one of \`home\`, \`notifications\`, \`public\`, \`thread\`. At least one context must be specified |
| `Optional` options | `Options.CreateFilter` |  Optional parameters |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
A filter

___
<a id="createlist"></a>

##  createList

▸ **createList**(title: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:475](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L475)*

Creating a list
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  The title of the list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
A new List.

___
<a id="createstatus"></a>

##  createStatus

▸ **createStatus**(status: *`string`*, options?: *`Options.CreateStatus`*, idempotencyKey?: * `undefined` &#124; `string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:747](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L747)*

Posting a new status

*   Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See [https://stripe.com/blog/idempotency](https://stripe.com/blog/idempotency) for more on idempotency and idempotency keys.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| status | `string` |  The text of the status |
| `Optional` options | `Options.CreateStatus` |  Form data |
| `Optional` idempotencyKey |  `undefined` &#124; `string`|  The Idempotency-Key of request header |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The new Status

___
<a id="delete"></a>

## `<Protected>` delete

▸ **delete**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[delete](_client_gateway_.gateway.md#delete)*

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
<a id="dissmissnotification"></a>

##  dissmissNotification

▸ **dissmissNotification**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:597](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L597)*

Dismissing a single notification

*   Deletes a single notification from the Mastodon server for the authenticated user.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the notification |

**Returns:** `Promise`<`void`>
Returns an empty object.

___
<a id="favouritestatus"></a>

##  favouriteStatus

▸ **favouriteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:790](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L790)*

Favouriting status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target status

___
<a id="fetchaccesstoken"></a>

##  fetchAccessToken

▸ **fetchAccessToken**(code: *`string`*, client_id: *`string`*, client_secret: *`string`*, redirect_uri: *`string`*, grant_type?: *`string`*): `Promise`<`object`>

*Defined in [client/Mastodon.ts:107](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L107)*

Fetch access token from authorization code
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/OAuth-details.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/OAuth-details.md)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| code | `string` | - |  code |
| client_id | `string` | - |  client_id of your app |
| client_secret | `string` | - |  client_secret of your app |
| redirect_uri | `string` | - |  redirect_uri of your app |
| `Default value` grant_type | `string` | &quot;authorization_code&quot; |  grant_type |

**Returns:** `Promise`<`object`>

___
<a id="fetchaccount"></a>

##  fetchAccount

▸ **fetchAccount**(id: *`string`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)>

*Defined in [client/Mastodon.ts:117](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L117)*

Fetching an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the account |

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)>
An account

___
<a id="fetchaccountfollowers"></a>

##  fetchAccountFollowers

▸ **fetchAccountFollowers**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`< `string`[] &#124; `object`[]>

*Defined in [client/Mastodon.ts:148](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L148)*

Getting an account's followers

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.Pagination` |  Query paramerters |

**Returns:** `AsyncIterableIterator`< `string`[] &#124; `object`[]>
An array of accounts

___
<a id="fetchaccountfollowing"></a>

##  fetchAccountFollowing

▸ **fetchAccountFollowing**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`< `string`[] &#124; `object`[]>

*Defined in [client/Mastodon.ts:160](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L160)*

Getting who account is following

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`< `string`[] &#124; `object`[]>
An array of accounts

___
<a id="fetchaccountrelationships"></a>

##  fetchAccountRelationships

▸ **fetchAccountRelationships**(id: * `string` &#124; `string`[]*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>

*Defined in [client/Mastodon.ts:266](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L266)*

Getting an account's relationships
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id |  `string` &#124; `string`[]|  Account IDs (can be an array) |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>
An array of Relationships of the current user to a list of given accounts.

___
<a id="fetchaccountstatuses"></a>

##  fetchAccountStatuses

▸ **fetchAccountStatuses**(id: *`string`*, options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:172](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L172)*

Getting an account's statuses

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An array of statuses

___
<a id="fetchblocks"></a>

##  fetchBlocks

▸ **fetchBlocks**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:303](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L303)*

Fetching a user's blocks

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of accounts blocked by the atuhenticated user

___
<a id="fetchcommunitytimeline"></a>

##  fetchCommunityTimeline

▸ **fetchCommunityTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:881](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L881)*

Retrieving the community timeline (aka "Local timeline" in the UI)

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchTimeline` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
An iterable of Statuses, most recent ones first.

___
<a id="fetchcustomemojis"></a>

##  fetchCustomEmojis

▸ **fetchCustomEmojis**(): `Promise`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>

*Defined in [client/Mastodon.ts:424](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L424)*

Fetching current instance's custom emojis

*   Does not require authentication
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)

**Returns:** `Promise`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>
A list of Emoji

___
<a id="fetchdirecttimeline"></a>

##  fetchDirectTimeline

▸ **fetchDirectTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:927](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L927)*

Retrieving a direct timeline
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

*Defined in [client/Mastodon.ts:314](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L314)*

Fetching a user's blocked domains

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<`string`[]>
An array of strings

___
<a id="fetchendorsements"></a>

##  fetchEndorsements

▸ **fetchEndorsements**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:990](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L990)*

Fetching endorsements

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` options | `Options.Pagination` |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts

___
<a id="fetchfavouritedstatuses"></a>

##  fetchFavouritedStatuses

▸ **fetchFavouritedStatuses**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:345](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L345)*

Fetching a user's favourites

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>
Return an array of Statuses favourited by the authenticated user

___
<a id="fetchfavourites"></a>

##  fetchFavourites

▸ **fetchFavourites**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:734](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L734)*

Getting who favourited a status

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*   Does not require authentication
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts

___
<a id="fetchfilter"></a>

##  fetchFilter

▸ **fetchFilter**(id: *`string`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:944](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L944)*

Fethcing a filter by id

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
A filter

___
<a id="fetchfilters"></a>

##  fetchFilters

▸ **fetchFilters**(): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)[]>

*Defined in [client/Mastodon.ts:935](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L935)*

Fetching filters

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)[]>
An array of Filters

___
<a id="fetchfollowrequests"></a>

##  fetchFollowRequests

▸ **fetchFollowRequests**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:356](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L356)*

Fetching a list of follow requests

*   Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns an array of Accounts which have requested to follow the authenticated user.

___
<a id="fetchhometimeline"></a>

##  fetchHomeTimeline

▸ **fetchHomeTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:869](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L869)*

Retrieving the home timeline

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

*Defined in [client/Mastodon.ts:396](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L396)*

Fetching current instance information

*   Does not require authentication
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)

**Returns:** `Promise`<[Instance](../interfaces/_entities_instance_.instance.md)>
The current instance.

___
<a id="fetchinstanceactivity"></a>

##  fetchInstanceActivity

▸ **fetchInstanceActivity**(): `Promise`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>

*Defined in [client/Mastodon.ts:414](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L414)*

Fetching activities of current instance

*   Does not require authentication

**Returns:** `Promise`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>
An array of Activities

___
<a id="fetchlist"></a>

##  fetchList

▸ **fetchList**(id: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:465](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L465)*

Retrieving a list
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the targtet list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
The specified List.

___
<a id="fetchlistaccounts"></a>

##  fetchListAccounts

▸ **fetchListAccounts**(id: *`string`*, options: *[Pagination](../interfaces/_client_options_.pagination.md)*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:455](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L455)*

Retrieving accounts in a list

*   If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| options | [Pagination](../interfaces/_client_options_.pagination.md) |  Optional params |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Returns Accounts in the list.

___
<a id="fetchlistbymembership"></a>

##  fetchListByMembership

▸ **fetchListByMembership**(id: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)[]>

*Defined in [client/Mastodon.ts:442](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L442)*

Retrieving lists by membership
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)[]>
At most 50 Lists without pagination

___
<a id="fetchlisttimeline"></a>

##  fetchListTimeline

▸ **fetchListTimeline**(id: *`string`*, options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:918](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L918)*

Retrieving a list timeline

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

*Defined in [client/Mastodon.ts:433](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L433)*

Retrieving lists
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)[]>
At most 50 Lists without pagination

___
<a id="fetchmutes"></a>

##  fetchMutes

▸ **fetchMutes**(options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:555](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L555)*

Fetching a user's mutes

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts muted by the authenticated user.

___
<a id="fetchnotification"></a>

##  fetchNotification

▸ **fetchNotification**(id: *`string`*): `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)>

*Defined in [client/Mastodon.ts:576](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L576)*

Getting a single notification
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target user |

**Returns:** `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)>
The Notification.

___
<a id="fetchnotifications"></a>

##  fetchNotifications

▸ **fetchNotifications**(options?: *`Options.FetchNotifications`*): `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)[]>

*Defined in [client/Mastodon.ts:566](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L566)*

Fetching a user's notifications

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.FetchNotifications` |  Query parameters |

**Returns:** `Promise`<[Notification](../interfaces/_entities_notification_.notification.md)[]>
A list of Notifications for the authenticated user.

___
<a id="fetchpeerinstances"></a>

##  fetchPeerInstances

▸ **fetchPeerInstances**(): `Promise`<`string`[]>

*Defined in [client/Mastodon.ts:405](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L405)*

Fetching peer instances

*   Does not require authentication

**Returns:** `Promise`<`string`[]>
An array of peer instance's domain

___
<a id="fetchpublictimeline"></a>

##  fetchPublicTimeline

▸ **fetchPublicTimeline**(options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:893](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L893)*

Retrieving the public timeline (aka "Federated timeline" in the UI)

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

*Defined in [client/Mastodon.ts:620](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L620)*

Get current push subscription status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#get-current-push-subscription-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#get-current-push-subscription-status)

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns the Push Subscription

___
<a id="fetchreblogs"></a>

##  fetchReblogs

▸ **fetchReblogs**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:721](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L721)*

Getting who reblogged a status

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
*   Does not require authentication
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` options | `Options.Pagination` |  Query parameters |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts

___
<a id="fetchreports"></a>

##  fetchReports

▸ **fetchReports**(): `Promise`<[Report](../interfaces/_entities_report_.report.md)[]>

*Defined in [client/Mastodon.ts:651](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L651)*

Fetching a user's reports

*   This method is not entirely implemented and contains no useful information at this point
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)

**Returns:** `Promise`<[Report](../interfaces/_entities_report_.report.md)[]>
Returns a list of Reports made by the authenticated user.

___
<a id="fetchstatus"></a>

##  fetchStatus

▸ **fetchStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:687](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L687)*

Fetching a status

*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
A status

___
<a id="fetchstatuscard"></a>

##  fetchStatusCard

▸ **fetchStatusCard**(id: *`string`*): `Promise`<[Card](../interfaces/_entities_card_.card.md)>

*Defined in [client/Mastodon.ts:708](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L708)*

Getting a card associated with a status

*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[Card](../interfaces/_entities_card_.card.md)>
A Card.

___
<a id="fetchstatuscontext"></a>

##  fetchStatusContext

▸ **fetchStatusContext**(id: *`string`*): `Promise`<[Context](../interfaces/_entities_context_.context.md)>

*Defined in [client/Mastodon.ts:698](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L698)*

Getting status context

*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Context](../interfaces/_entities_context_.context.md)>
A Context.

___
<a id="fetchstatusfavouritedby"></a>

##  fetchStatusFavouritedBy

▸ **fetchStatusFavouritedBy**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:858](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L858)*

Fetching accounts who reblogged the status

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the status |
| `Optional` options | `Options.Pagination` |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Array of accounts

___
<a id="fetchstatusrebloggedby"></a>

##  fetchStatusRebloggedBy

▸ **fetchStatusRebloggedBy**(id: *`string`*, options?: *`Options.Pagination`*): `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:849](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L849)*

Fetching accounts who reblogged the status

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the status |
| `Optional` options | `Options.Pagination` |

**Returns:** `AsyncIterableIterator`<[Account](../interfaces/_entities_account_.account.md)[]>
Array of accounts

___
<a id="fetchsuggestions"></a>

##  fetchSuggestions

▸ **fetchSuggestions**(): `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:982](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L982)*

Fething user recommendation

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of Accounts

___
<a id="fetchtagtimeline"></a>

##  fetchTagTimeline

▸ **fetchTagTimeline**(id: *`string`*, options?: *`Options.FetchTimeline`*): `AsyncIterableIterator`<[Status](../interfaces/_entities_status_.status.md)[]>

*Defined in [client/Mastodon.ts:906](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L906)*

Retrieving a tag timeline

*   Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
*   Does not require authentication.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

▸ **followAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:182](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L182)*

Following an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="followaccountbyusername"></a>

##  followAccountByUsername

▸ **followAccountByUsername**(uri: *`string`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)>

*Defined in [client/Mastodon.ts:386](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L386)*

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

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[get](_client_gateway_.gateway.md#get)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[getStreamingUrl](_client_gateway_.gateway.md#getstreamingurl)*

*Defined in [client/Gateway.ts:49](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L49)*

Getting streaming API URL of the instance

**Returns:** `string`
Streaming API URL

___
<a id="gettoken"></a>

##  getToken

▸ **getToken**():  `undefined` &#124; `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[getToken](_client_gateway_.gateway.md#gettoken)*

*Defined in [client/Gateway.ts:55](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L55)*

Getting token of authenticated user

**Returns:**  `undefined` &#124; `string`

The token

___
<a id="geturl"></a>

##  getUrl

▸ **getUrl**(): `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[getUrl](_client_gateway_.gateway.md#geturl)*

*Defined in [client/Gateway.ts:43](https://github.com/lagunehq/core/blob/31cfc86/src/client/Gateway.ts#L43)*

Getting rest API URL of the instance

**Returns:** `string`
Rest API URL

___
<a id="muteaccount"></a>

##  muteAccount

▸ **muteAccount**(id: *`string`*, notifications?: *`boolean`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:223](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L223)*

Muting an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| id | `string` | - |  ID of the target account |
| `Default value` notifications | `boolean` | true |  Determines whether the mute will mute notifications or not. Default(true) |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="mutestatus"></a>

##  muteStatus

▸ **muteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:830](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L830)*

Muting a conversation of a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target Status.

___
<a id="paginationgenerator"></a>

## `<Protected>` paginationGenerator

▸ **paginationGenerator**<`T`>(path: *`string`*, params?: *`any`*): `AsyncIterableIterator`<`T`>

*Defined in [client/Mastodon.ts:31](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L31)*

Generate an iterable of the pagination
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)

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

▸ **patch**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[patch](_client_gateway_.gateway.md#patch)*

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
<a id="pinaccount"></a>

##  pinAccount

▸ **pinAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:245](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L245)*

Pin an account to profile
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="pinstatus"></a>

##  pinStatus

▸ **pinStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:810](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L810)*

Pinning a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target Status.

___
<a id="post"></a>

## `<Protected>` post

▸ **post**<`T`>(url: *`string`*, body?: *`object`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`T`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[post](_client_gateway_.gateway.md#post)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[put](_client_gateway_.gateway.md#put)*

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
<a id="reblogstatus"></a>

##  reblogStatus

▸ **reblogStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:770](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L770)*

Reblogging a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The reblog Status.

___
<a id="rejectfollowrequest"></a>

##  rejectFollowRequest

▸ **rejectFollowRequest**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:376](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L376)*

Rejecting follow requests
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)

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

*Defined in [client/Mastodon.ts:520](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L520)*

Removing accounts from a list

*   Note: Only accounts already followed by the authenticated user can be added to a list.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)

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

*Defined in [client/Mastodon.ts:974](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L974)*

Removing filter by id

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

*Defined in [client/Mastodon.ts:496](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L496)*

Removing a list
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)

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

*Defined in [client/Mastodon.ts:641](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L641)*

Removing push subscription

*   This API removes push subscription that bind to access token.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#removing-push-subscription](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#removing-push-subscription)

**Returns:** `Promise`<`void`>
An empty object

___
<a id="removestatus"></a>

##  removeStatus

▸ **removeStatus**(id: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:760](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L760)*

Removing a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`void`>
An empty object

___
<a id="reportuser"></a>

##  reportUser

▸ **reportUser**(account_id: *`string`*, status_ids: * `string` &#124; `string`[]*, comment: *`string`*): `Promise`<[Report](../interfaces/_entities_report_.report.md)>

*Defined in [client/Mastodon.ts:663](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L663)*

Reporting a user
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| account_id | `string` |  The ID of the account to report |
| status_ids |  `string` &#124; `string`[]|  The IDs of statuses to report (can be an array) |
| comment | `string` |  A comment to associate with the report (up to 1000 characters) |

**Returns:** `Promise`<[Report](../interfaces/_entities_report_.report.md)>
The finished Report

___
<a id="request"></a>

## `<Protected>` request

▸ **request**(url: *`string`*, options?: *`object`*, parse?: *`boolean`*): `Promise`<`any`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[request](_client_gateway_.gateway.md#request)*

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
<a id="search"></a>

##  search

▸ **search**<`V`>(q: *`string`*, resolve?: *`boolean`*, version?: *[V]()*): `Promise`<[Results](../interfaces/_entities_results_.results.md)<`V`>>

*Defined in [client/Mastodon.ts:676](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L676)*

Searching for content

*   If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)

**Type parameters:**

#### V :   "v1" &#124; "v2"

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| q | `string` | - |  The search query |
| `Default value` resolve | `boolean` | false |  Whether to resolve non-local accounts (default: don't resolve) |
| `Optional` version | [V]() | - |  Version of Mastodon API (default: v2) |

**Returns:** `Promise`<[Results](../interfaces/_entities_results_.results.md)<`V`>>
Results

___
<a id="searchaccounts"></a>

##  searchAccounts

▸ **searchAccounts**(q: *`string`*, options?: *`Options.SearchAccounts`*): `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>

*Defined in [client/Mastodon.ts:278](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L278)*

Searching for accounts

*   Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| q | `string` |  What to search for |
| `Optional` options | `Options.SearchAccounts` |  Query parameters |

**Returns:** `Promise`<[Account](../interfaces/_entities_account_.account.md)[]>
An array of matching accounts

___
<a id="setstreamingurl"></a>

##  setStreamingUrl

▸ **setStreamingUrl**(url: *`string`*): `void`

*Inherited from [Gateway](_client_gateway_.gateway.md).[setStreamingUrl](_client_gateway_.gateway.md#setstreamingurl)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[setToken](_client_gateway_.gateway.md#settoken)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[setUrl](_client_gateway_.gateway.md#seturl)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[stream](_client_gateway_.gateway.md#stream)*

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
<a id="streamcommunitytimeline"></a>

##  streamCommunityTimeline

▸ **streamCommunityTimeline**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:65](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L65)*

Starting local timeline streaming
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamlisttimeline"></a>

##  streamListTimeline

▸ **streamListTimeline**(id: *`string`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:94](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L94)*

Starting list timeline streaming
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streampublictimeline"></a>

##  streamPublicTimeline

▸ **streamPublicTimeline**(): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:74](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L74)*

Starting federated timeline streaming
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="streamtagtimeline"></a>

##  streamTagTimeline

▸ **streamTagTimeline**(id: *`string`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/Mastodon.ts:84](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L84)*

Starting tag timeline streaming
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)

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

*Defined in [client/Mastodon.ts:56](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L56)*

Starting home timeline and notification streaming
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)
Instance of EventEmitter

___
<a id="ummuteaccount"></a>

##  ummuteAccount

▸ **ummuteAccount**(id: *`string`*, notifications?: *`boolean`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:234](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L234)*

Unmuting an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| id | `string` | - |  ID of the target account |
| `Default value` notifications | `boolean` | true |  Determines whether the mute will mute notifications or not. Default(true) |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="unblockaccount"></a>

##  unblockAccount

▸ **unblockAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:212](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L212)*

Unblocking an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="unblockdomain"></a>

##  unblockDomain

▸ **unblockDomain**(domain: *`string`*): `Promise`<`void`>

*Defined in [client/Mastodon.ts:334](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L334)*

Unblocking a domain
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)

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

*Defined in [client/Mastodon.ts:800](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L800)*

Unfavouriting status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target status

___
<a id="unfollowaccount"></a>

##  unfollowAccount

▸ **unfollowAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:192](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L192)*

Unfollowing an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="unmutestatus"></a>

##  unmuteStatus

▸ **unmuteStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:840](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L840)*

Unmuting a conversation of a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target Status.

___
<a id="unpinaccount"></a>

##  unpinAccount

▸ **unpinAccount**(id: *`string`*): `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>

*Defined in [client/Mastodon.ts:256](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L256)*

Unpin an account
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>
The target account's relationship

___
<a id="unpinstatus"></a>

##  unpinStatus

▸ **unpinStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:820](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L820)*

Unpinning a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target Status.

___
<a id="unreblogstatus"></a>

##  unreblogStatus

▸ **unreblogStatus**(id: *`string`*): `Promise`<[Status](../interfaces/_entities_status_.status.md)>

*Defined in [client/Mastodon.ts:780](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L780)*

Unreblogging a status
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<[Status](../interfaces/_entities_status_.status.md)>
The target Status.

___
<a id="updatecredentials"></a>

##  updateCredentials

▸ **updateCredentials**(options?: *`Options.UpdateCredentials`*): `Promise`<[Credentials](../interfaces/_entities_credentials_.credentials.md)>

*Defined in [client/Mastodon.ts:136](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L136)*

Updating the current user
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `Options.UpdateCredentials` |  Form data |

**Returns:** `Promise`<[Credentials](../interfaces/_entities_credentials_.credentials.md)>
The authenticated user's Account.

___
<a id="updatefilter"></a>

##  updateFilter

▸ **updateFilter**(id: *`string`*, options?: *`Options.UpdateFilter`*): `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>

*Defined in [client/Mastodon.ts:965](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L965)*

Updating a filter

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |
| `Optional` options | `Options.UpdateFilter` |  Optinal parameters |

**Returns:** `Promise`<[Filter](../interfaces/_entities_filter_.filter.md)>
A filter

___
<a id="updatelist"></a>

##  updateList

▸ **updateList**(id: *`string`*, title: *`string`*): `Promise`<[List](../interfaces/_entities_list_.list.md)>

*Defined in [client/Mastodon.ts:486](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L486)*

Updating a list
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| title | `string` |  The title of the list |

**Returns:** `Promise`<[List](../interfaces/_entities_list_.list.md)>
A updated List.

___
<a id="updatemediaattachment"></a>

##  updateMediaAttachment

▸ **updateMediaAttachment**(id: *`string`*, options?: *`Options.UpdateMedia`*): `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>

*Defined in [client/Mastodon.ts:544](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L544)*

Updating a media attachment

*   Can only be done before the media is attached to a status
*   Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target attachment |
| `Optional` options | `Options.UpdateMedia` |  Form data |

**Returns:** `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>
Returns an Attachment that can be used when creating a status.

___
<a id="updatepushsubscription"></a>

##  updatePushSubscription

▸ **updatePushSubscription**(options: *[UpdatePushSubscription](../interfaces/_client_options_.updatepushsubscription.md)*): `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>

*Defined in [client/Mastodon.ts:631](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L631)*

Updating push subscription

*   This API updates 'data' part of push subscription. If you want to change 'subscription', you have to use 'POST /api/api/v1/push/subscription'.
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-push-subscription](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-push-subscription)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [UpdatePushSubscription](../interfaces/_client_options_.updatepushsubscription.md) |  Form data |

**Returns:** `Promise`<[PushSubscription](../interfaces/_entities_pushsubscription_.pushsubscription.md)>
Returns the Push Subscription

___
<a id="uploadmediaattachment"></a>

##  uploadMediaAttachment

▸ **uploadMediaAttachment**(file: *`File`*, options?: *`Options.UploadMedia`*): `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>

*Defined in [client/Mastodon.ts:531](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L531)*

Uploading a media attachment
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| file | `File` |  Media to be uploaded (encoded using \`multipart/form-data\`) |
| `Optional` options | `Options.UploadMedia` |  Form data |

**Returns:** `Promise`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>
An Attachment that can be used when creating a status.

___
<a id="verfiycredentials"></a>

##  verfiyCredentials

▸ **verfiyCredentials**(): `Promise`<[Credentials](../interfaces/_entities_credentials_.credentials.md)>

*Defined in [client/Mastodon.ts:126](https://github.com/lagunehq/core/blob/31cfc86/src/client/Mastodon.ts#L126)*

Getting the current user
*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)

**Returns:** `Promise`<[Credentials](../interfaces/_entities_credentials_.credentials.md)>
The authenticated user's Account with an extra attribute source which contains these keys

___

