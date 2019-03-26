[@lagunehq/core](../README.md) > ["client/mastodon"](../modules/_client_mastodon_.md) > [Mastodon](../classes/_client_mastodon_.mastodon.md)

# Class: Mastodon

Mastodon API client

## Hierarchy

 [Gateway](_client_gateway_.gateway.md)

**↳ Mastodon**

## Index

### Accessors

* [accessToken](_client_mastodon_.mastodon.md#accesstoken)
* [streamingApiUrl](_client_mastodon_.mastodon.md#streamingapiurl)
* [uri](_client_mastodon_.mastodon.md#uri)
* [version](_client_mastodon_.mastodon.md#version)

### Methods

* [addAccountToList](_client_mastodon_.mastodon.md#addaccounttolist)
* [addPushSubscription](_client_mastodon_.mastodon.md#addpushsubscription)
* [authorizeFollowRequest](_client_mastodon_.mastodon.md#authorizefollowrequest)
* [blockAccount](_client_mastodon_.mastodon.md#blockaccount)
* [blockDomain](_client_mastodon_.mastodon.md#blockdomain)
* [clearNotifications](_client_mastodon_.mastodon.md#clearnotifications)
* [createAccount](_client_mastodon_.mastodon.md#createaccount)
* [createApp](_client_mastodon_.mastodon.md#createapp)
* [createFiler](_client_mastodon_.mastodon.md#createfiler)
* [createList](_client_mastodon_.mastodon.md#createlist)
* [createStatus](_client_mastodon_.mastodon.md#createstatus)
* [dissmissNotification](_client_mastodon_.mastodon.md#dissmissnotification)
* [favouriteStatus](_client_mastodon_.mastodon.md#favouritestatus)
* [fetchAccessToken](_client_mastodon_.mastodon.md#fetchaccesstoken)
* [fetchAccount](_client_mastodon_.mastodon.md#fetchaccount)
* [fetchAccountFollowers](_client_mastodon_.mastodon.md#fetchaccountfollowers)
* [fetchAccountFollowing](_client_mastodon_.mastodon.md#fetchaccountfollowing)
* [fetchAccountLists](_client_mastodon_.mastodon.md#fetchaccountlists)
* [fetchAccountRelationships](_client_mastodon_.mastodon.md#fetchaccountrelationships)
* [fetchAccountStatuses](_client_mastodon_.mastodon.md#fetchaccountstatuses)
* [fetchBlocks](_client_mastodon_.mastodon.md#fetchblocks)
* [fetchCommunityTimeline](_client_mastodon_.mastodon.md#fetchcommunitytimeline)
* [fetchConversations](_client_mastodon_.mastodon.md#fetchconversations)
* [fetchCustomEmojis](_client_mastodon_.mastodon.md#fetchcustomemojis)
* [fetchDirectTimeline](_client_mastodon_.mastodon.md#fetchdirecttimeline)
* [fetchDomainBlocks](_client_mastodon_.mastodon.md#fetchdomainblocks)
* [fetchEndorsements](_client_mastodon_.mastodon.md#fetchendorsements)
* [fetchFavourites](_client_mastodon_.mastodon.md#fetchfavourites)
* [fetchFilter](_client_mastodon_.mastodon.md#fetchfilter)
* [fetchFilters](_client_mastodon_.mastodon.md#fetchfilters)
* [fetchFollowRequests](_client_mastodon_.mastodon.md#fetchfollowrequests)
* [fetchHomeTimeline](_client_mastodon_.mastodon.md#fetchhometimeline)
* [fetchInstance](_client_mastodon_.mastodon.md#fetchinstance)
* [fetchInstanceActivity](_client_mastodon_.mastodon.md#fetchinstanceactivity)
* [fetchList](_client_mastodon_.mastodon.md#fetchlist)
* [fetchListAccounts](_client_mastodon_.mastodon.md#fetchlistaccounts)
* [fetchListTimeline](_client_mastodon_.mastodon.md#fetchlisttimeline)
* [fetchLists](_client_mastodon_.mastodon.md#fetchlists)
* [fetchMutes](_client_mastodon_.mastodon.md#fetchmutes)
* [fetchNotification](_client_mastodon_.mastodon.md#fetchnotification)
* [fetchNotifications](_client_mastodon_.mastodon.md#fetchnotifications)
* [fetchPeerInstances](_client_mastodon_.mastodon.md#fetchpeerinstances)
* [fetchPublicTimeline](_client_mastodon_.mastodon.md#fetchpublictimeline)
* [fetchPushSubscription](_client_mastodon_.mastodon.md#fetchpushsubscription)
* [fetchStatus](_client_mastodon_.mastodon.md#fetchstatus)
* [fetchStatusCard](_client_mastodon_.mastodon.md#fetchstatuscard)
* [fetchStatusContext](_client_mastodon_.mastodon.md#fetchstatuscontext)
* [fetchStatusFavouritedBy](_client_mastodon_.mastodon.md#fetchstatusfavouritedby)
* [fetchStatusRebloggedBy](_client_mastodon_.mastodon.md#fetchstatusrebloggedby)
* [fetchSuggestions](_client_mastodon_.mastodon.md#fetchsuggestions)
* [fetchTagTimeline](_client_mastodon_.mastodon.md#fetchtagtimeline)
* [followAccount](_client_mastodon_.mastodon.md#followaccount)
* [followAccountByUsername](_client_mastodon_.mastodon.md#followaccountbyusername)
* [muteAccount](_client_mastodon_.mastodon.md#muteaccount)
* [muteStatus](_client_mastodon_.mastodon.md#mutestatus)
* [pinAccount](_client_mastodon_.mastodon.md#pinaccount)
* [pinStatus](_client_mastodon_.mastodon.md#pinstatus)
* [reblogStatus](_client_mastodon_.mastodon.md#reblogstatus)
* [rejectFollowRequest](_client_mastodon_.mastodon.md#rejectfollowrequest)
* [removeAccountFromList](_client_mastodon_.mastodon.md#removeaccountfromlist)
* [removeFilter](_client_mastodon_.mastodon.md#removefilter)
* [removeList](_client_mastodon_.mastodon.md#removelist)
* [removePushSubscription](_client_mastodon_.mastodon.md#removepushsubscription)
* [removeStatus](_client_mastodon_.mastodon.md#removestatus)
* [removeSuggestion](_client_mastodon_.mastodon.md#removesuggestion)
* [reportAccount](_client_mastodon_.mastodon.md#reportaccount)
* [revokeAccessToken](_client_mastodon_.mastodon.md#revokeaccesstoken)
* [search](_client_mastodon_.mastodon.md#search)
* [searchAccounts](_client_mastodon_.mastodon.md#searchaccounts)
* [streamCommunityTimeline](_client_mastodon_.mastodon.md#streamcommunitytimeline)
* [streamDirectTimeline](_client_mastodon_.mastodon.md#streamdirecttimeline)
* [streamListTimeline](_client_mastodon_.mastodon.md#streamlisttimeline)
* [streamLocalTagTimeline](_client_mastodon_.mastodon.md#streamlocaltagtimeline)
* [streamPublicTimeline](_client_mastodon_.mastodon.md#streampublictimeline)
* [streamTagTimeline](_client_mastodon_.mastodon.md#streamtagtimeline)
* [streamUser](_client_mastodon_.mastodon.md#streamuser)
* [unblockAccount](_client_mastodon_.mastodon.md#unblockaccount)
* [unblockDomain](_client_mastodon_.mastodon.md#unblockdomain)
* [unfavouriteStatus](_client_mastodon_.mastodon.md#unfavouritestatus)
* [unfollowAccount](_client_mastodon_.mastodon.md#unfollowaccount)
* [unmuteAccount](_client_mastodon_.mastodon.md#unmuteaccount)
* [unmuteStatus](_client_mastodon_.mastodon.md#unmutestatus)
* [unpinAccount](_client_mastodon_.mastodon.md#unpinaccount)
* [unpinStatus](_client_mastodon_.mastodon.md#unpinstatus)
* [unreblogStatus](_client_mastodon_.mastodon.md#unreblogstatus)
* [updateCredentials](_client_mastodon_.mastodon.md#updatecredentials)
* [updateFilter](_client_mastodon_.mastodon.md#updatefilter)
* [updateList](_client_mastodon_.mastodon.md#updatelist)
* [updateMediaAttachment](_client_mastodon_.mastodon.md#updatemediaattachment)
* [updatePushSubscription](_client_mastodon_.mastodon.md#updatepushsubscription)
* [uploadMediaAttachment](_client_mastodon_.mastodon.md#uploadmediaattachment)
* [verifyAppCredentials](_client_mastodon_.mastodon.md#verifyappcredentials)
* [verifyCredentials](_client_mastodon_.mastodon.md#verifycredentials)
* [login](_client_mastodon_.mastodon.md#login)

---

## Accessors

<a id="accesstoken"></a>

###  accessToken

**get accessToken**(): `string`

**set accessToken**(newAccessToken: *`string`*): `void`

*Inherited from [Gateway](_client_gateway_.gateway.md).[accessToken](_client_gateway_.gateway.md#accesstoken)*

*Defined in [client/gateway.ts:94](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L94)*

Getter for this.\_accessToken

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[accessToken](_client_gateway_.gateway.md#accesstoken)*

*Defined in [client/gateway.ts:99](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L99)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)*

*Defined in [client/gateway.ts:84](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L84)*

Getter for this.\_streamingApiUrl

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)*

*Defined in [client/gateway.ts:89](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L89)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[uri](_client_gateway_.gateway.md#uri)*

*Defined in [client/gateway.ts:64](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L64)*

Getter for this.\_uri

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[uri](_client_gateway_.gateway.md#uri)*

*Defined in [client/gateway.ts:69](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L69)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[version](_client_gateway_.gateway.md#version)*

*Defined in [client/gateway.ts:74](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L74)*

Getter for this.\_version

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[version](_client_gateway_.gateway.md#version)*

*Defined in [client/gateway.ts:79](https://github.com/lagunehq/core/blob/35e3f58/src/client/gateway.ts#L79)*

Setter for this.\_version

**Parameters:**

| Name | Type |
| ------ | ------ |
| newVersion | `string` |

**Returns:** `void`

___

## Methods

<a id="addaccounttolist"></a>

###  addAccountToList

▸ **addAccountToList**(id: *`string`*, params: *[ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md)*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:795](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L795)*

Add accounts to a list.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| params | [ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md) |  Parameter |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="addpushsubscription"></a>

###  addPushSubscription

▸ **addPushSubscription**(params: *[AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md)*): `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>

*Defined in [client/mastodon.ts:979](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L979)*

Add a Web Push API subscription to receive notifications. See also: Web Push API

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>
Returns Push Subscription

___
<a id="authorizefollowrequest"></a>

###  authorizeFollowRequest

▸ **authorizeFollowRequest**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:616](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L616)*

Allow the account to follow the user.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize](https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="blockaccount"></a>

###  blockAccount

▸ **blockAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:380](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L380)*

Block an account with id

*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block](https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="blockdomain"></a>

###  blockDomain

▸ **blockDomain**(domain: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:429](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L429)*

Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.

*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| domain | `string` |  Domain to block |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="clearnotifications"></a>

###  clearNotifications

▸ **clearNotifications**(): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:951](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L951)*

Delete all notifications from the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear](https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear)

**Returns:** `Promise`<`AxiosResponse`<`void`>>
Returns an empty object.

___
<a id="createaccount"></a>

###  createAccount

▸ **createAccount**(params: *[CreateAccountParams](../interfaces/_client_params_.createaccountparams.md)*): `Promise`<`AxiosResponse`<[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)>>

*Defined in [client/mastodon.ts:192](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L192)*

Create an account with given profile

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [CreateAccountParams](../interfaces/_client_params_.createaccountparams.md) |  Data of the user to create |

**Returns:** `Promise`<`AxiosResponse`<[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)>>
Access token

___
<a id="createapp"></a>

###  createApp

▸ **createApp**(params: *[CreateAppParams](../interfaces/_client_params_.createappparams.md)*): `Promise`<`AxiosResponse`<[OAuthClient](../interfaces/_entities_oauth_.oauthclient.md)>>

*Defined in [client/mastodon.ts:343](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L343)*

Create a new application to obtain OAuth2 credentials.

*__see__*: [https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps](https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [CreateAppParams](../interfaces/_client_params_.createappparams.md) |  Parameters |

**Returns:** `Promise`<`AxiosResponse`<[OAuthClient](../interfaces/_entities_oauth_.oauthclient.md)>>
Returns App with client_id and client_secret

___
<a id="createfiler"></a>

###  createFiler

▸ **createFiler**(params?: *[ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)*): `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>

*Defined in [client/mastodon.ts:560](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L560)*

Create a new filter.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters](https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md) |  Parameters |

**Returns:** `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>
Returns Filter

___
<a id="createlist"></a>

###  createList

▸ **createList**(params: *[ModifyListParams](../interfaces/_client_params_.modifylistparams.md)*): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>

*Defined in [client/mastodon.ts:754](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L754)*

Create a new list.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists](https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [ModifyListParams](../interfaces/_client_params_.modifylistparams.md) |  Options |

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>
Returns List

___
<a id="createstatus"></a>

###  createStatus

▸ **createStatus**(params?: *[CreateStatusParams](../modules/_client_params_.md#createstatusparams)*, idempotencyKey?: *`undefined` \| `string`*): `Promise`<`AxiosResponse`<`Object`>>

*Defined in [client/mastodon.ts:1128](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1128)*

Publish a new status.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [CreateStatusParams](../modules/_client_params_.md#createstatusparams) |  Parameters |
| `Optional` idempotencyKey | `undefined` \| `string` |  The Idempotency-Key of request header |

**Returns:** `Promise`<`AxiosResponse`<`Object`>>
Returns Status

___
<a id="dissmissnotification"></a>

###  dissmissNotification

▸ **dissmissNotification**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:964](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L964)*

Delete a single notification from the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss](https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Notification ID |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
Returns an empty object.

___
<a id="favouritestatus"></a>

###  favouriteStatus

▸ **favouriteStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:509](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L509)*

Favourite a status with id

*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite](https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="fetchaccesstoken"></a>

###  fetchAccessToken

▸ **fetchAccessToken**(params: *[FetchAccessTokenParams](../modules/_client_params_.md#fetchaccesstokenparams)*): `Promise`<`AxiosResponse`<[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)>>

*Defined in [client/mastodon.ts:161](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L161)*

Fetch access token from authorization code

*__see__*: [https://docs.joinmastodon.org/api/authentication/#post-oauth-token](https://docs.joinmastodon.org/api/authentication/#post-oauth-token)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [FetchAccessTokenParams](../modules/_client_params_.md#fetchaccesstokenparams) |  Parameters |

**Returns:** `Promise`<`AxiosResponse`<[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)>>
OauthToken

___
<a id="fetchaccount"></a>

###  fetchAccount

▸ **fetchAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)>>

*Defined in [client/mastodon.ts:181](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L181)*

Fetching an account

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the account |

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)>>
Returns Account

___
<a id="fetchaccountfollowers"></a>

###  fetchAccountFollowers

▸ **fetchAccountFollowers**(id: *`string`*, params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:236](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L236)*

Accounts which follow the given account.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameters |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchaccountfollowing"></a>

###  fetchAccountFollowing

▸ **fetchAccountFollowing**(id: *`string`*, params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:252](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L252)*

Accounts which the given account is following.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchaccountlists"></a>

###  fetchAccountLists

▸ **fetchAccountLists**(id: *`string`*): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)[]>>

*Defined in [client/mastodon.ts:711](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L711)*

User’s lists that a given account is part of.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)[]>>
Returns array of List

___
<a id="fetchaccountrelationships"></a>

###  fetchAccountRelationships

▸ **fetchAccountRelationships**(id: *`string`[]*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>>

*Defined in [client/mastodon.ts:316](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L316)*

Relationship of the user to the given accounts in regards to following, blocking, muting, etc.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string`[] |  Array of account IDs |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)[]>>
Returns array of Relationship

___
<a id="fetchaccountstatuses"></a>

###  fetchAccountStatuses

▸ **fetchAccountStatuses**(id: *`string`*, params?: *[FetchAccountStatusesParams](../interfaces/_client_params_.fetchaccountstatusesparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:268](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L268)*

An account’s statuses.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` params | [FetchAccountStatusesParams](../interfaces/_client_params_.fetchaccountstatusesparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
Returns array of Status

___
<a id="fetchblocks"></a>

###  fetchBlocks

▸ **fetchBlocks**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:367](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L367)*

Accounts the user has blocked.

*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks](https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchcommunitytimeline"></a>

###  fetchCommunityTimeline

▸ **fetchCommunityTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1226](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1226)*

Retrieving the community timeline (aka "Local timeline" in the UI)

*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An iterable of Statuses, most recent ones first.

___
<a id="fetchconversations"></a>

###  fetchConversations

▸ **fetchConversations**(): `Promise`<`AxiosResponse`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>>

*Defined in [client/mastodon.ts:1300](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1300)*

Retrieving a conversation timeline

**Returns:** `Promise`<`AxiosResponse`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>>
An array of Conversation

___
<a id="fetchcustomemojis"></a>

###  fetchCustomEmojis

▸ **fetchCustomEmojis**(): `Promise`<`AxiosResponse`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>>

*Defined in [client/mastodon.ts:403](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L403)*

Custom emojis that are available on the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis](https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis)

**Returns:** `Promise`<`AxiosResponse`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>>
Returns array of Emoji

___
<a id="fetchdirecttimeline"></a>

###  fetchDirectTimeline

▸ **fetchDirectTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1286](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1286)*

Retrieving a direct timeline

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An iterable of Statuses, most recent ones first.

___
<a id="fetchdomainblocks"></a>

###  fetchDomainBlocks

▸ **fetchDomainBlocks**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<`string`[]>>

*Defined in [client/mastodon.ts:416](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L416)*

Domains the user has blocked.

*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<`string`[]>>
Returns array of string.

___
<a id="fetchendorsements"></a>

###  fetchEndorsements

▸ **fetchEndorsements**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:458](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L458)*

Accounts the user chose to endorse.

*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements](https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchfavourites"></a>

###  fetchFavourites

▸ **fetchFavourites**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:497](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L497)*

Statuses the user has favourited.

*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites](https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
Returns array of Status

___
<a id="fetchfilter"></a>

###  fetchFilter

▸ **fetchFilter**(id: *`string`*): `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>

*Defined in [client/mastodon.ts:547](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L547)*

A text filter.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |

**Returns:** `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>
Returns Filter

___
<a id="fetchfilters"></a>

###  fetchFilters

▸ **fetchFilters**(): `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)[]>>

*Defined in [client/mastodon.ts:534](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L534)*

Text filters the user has configured that potentially must be applied client-side.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters](https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters)

**Returns:** `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)[]>>
An array of Filters

___
<a id="fetchfollowrequests"></a>

###  fetchFollowRequests

▸ **fetchFollowRequests**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:600](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L600)*

Accounts that have requested to follow the user.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests](https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchhometimeline"></a>

###  fetchHomeTimeline

▸ **fetchHomeTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1215](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1215)*

Retrieving the home timeline

*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An array of Statuses, most recent ones first.

___
<a id="fetchinstance"></a>

###  fetchInstance

▸ **fetchInstance**(): `Promise`<`AxiosResponse`<[Instance](../interfaces/_entities_instance_.instance.md)>>

*Defined in [client/mastodon.ts:666](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L666)*

Information about the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance](https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance)

**Returns:** `Promise`<`AxiosResponse`<[Instance](../interfaces/_entities_instance_.instance.md)>>
Returns Instance

___
<a id="fetchinstanceactivity"></a>

###  fetchInstanceActivity

▸ **fetchInstanceActivity**(): `Promise`<`AxiosResponse`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>>

*Defined in [client/mastodon.ts:686](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L686)*

Fetching activities of current instance

*__see__*: [https://github.com/tootsuite/mastodon/pull/6125](https://github.com/tootsuite/mastodon/pull/6125)

**Returns:** `Promise`<`AxiosResponse`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>>
An array of InstanceActivity

___
<a id="fetchlist"></a>

###  fetchList

▸ **fetchList**(id: *`string`*): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>

*Defined in [client/mastodon.ts:741](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L741)*

Fetch a list with id

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the targtet list |

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>
Returns List

___
<a id="fetchlistaccounts"></a>

###  fetchListAccounts

▸ **fetchListAccounts**(id: *`string`*, params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:725](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L725)*

Accounts that are in a given list.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Optional params |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchlisttimeline"></a>

###  fetchListTimeline

▸ **fetchListTimeline**(id: *`string`*, params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1272](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1272)*

Retrieving a list timeline

*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An iterable of Statuses, most recent ones first.

___
<a id="fetchlists"></a>

###  fetchLists

▸ **fetchLists**(): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)[]>>

*Defined in [client/mastodon.ts:698](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L698)*

User’s lists.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists)

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)[]>>
Returns array of List

___
<a id="fetchmutes"></a>

###  fetchMutes

▸ **fetchMutes**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:857](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L857)*

Accounts the user has muted.

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes](https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchnotification"></a>

###  fetchNotification

▸ **fetchNotification**(id: *`string`*): `Promise`<`AxiosResponse`<[Notification](../interfaces/_entities_notification_.notification.md)>>

*Defined in [client/mastodon.ts:939](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L939)*

Getting a single notification

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  Notification ID |

**Returns:** `Promise`<`AxiosResponse`<[Notification](../interfaces/_entities_notification_.notification.md)>>
Returns Notification

___
<a id="fetchnotifications"></a>

###  fetchNotifications

▸ **fetchNotifications**(params?: *[FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md)*): `Promise`<`AxiosResponse`<[Notification](../interfaces/_entities_notification_.notification.md)[]>>

*Defined in [client/mastodon.ts:926](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L926)*

Notifications concerning the user.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md) |  Query parameter |

**Returns:** `Promise`<`AxiosResponse`<[Notification](../interfaces/_entities_notification_.notification.md)[]>>
Returns array of Notification

___
<a id="fetchpeerinstances"></a>

###  fetchPeerInstances

▸ **fetchPeerInstances**(): `Promise`<`AxiosResponse`<`string`[]>>

*Defined in [client/mastodon.ts:676](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L676)*

Fetching peer instances

*__see__*: [https://github.com/tootsuite/mastodon/pull/6125](https://github.com/tootsuite/mastodon/pull/6125)

**Returns:** `Promise`<`AxiosResponse`<`string`[]>>
An array of peer instance's domain

___
<a id="fetchpublictimeline"></a>

###  fetchPublicTimeline

▸ **fetchPublicTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1240](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1240)*

Retrieving the public timeline (aka "Federated timeline" in the UI)

*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An iterable of Statuses, most recent ones first.

___
<a id="fetchpushsubscription"></a>

###  fetchPushSubscription

▸ **fetchPushSubscription**(): `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>

*Defined in [client/mastodon.ts:994](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L994)*

Fetch Push Subscription for notifications

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription)

**Returns:** `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>
Returns Push Subscription

___
<a id="fetchstatus"></a>

###  fetchStatus

▸ **fetchStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:1063](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1063)*

Fetch a status with id

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="fetchstatuscard"></a>

###  fetchStatusCard

▸ **fetchStatusCard**(id: *`string`*): `Promise`<`AxiosResponse`<[Card](../interfaces/_entities_card_.card.md)>>

*Defined in [client/mastodon.ts:1084](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1084)*

Link preview card for a status, if available.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card)

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`AxiosResponse`<[Card](../interfaces/_entities_card_.card.md)>>
Returns Card

___
<a id="fetchstatuscontext"></a>

###  fetchStatusContext

▸ **fetchStatusContext**(id: *`string`*): `Promise`<`AxiosResponse`<[Context](../interfaces/_entities_context_.context.md)>>

*Defined in [client/mastodon.ts:1074](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1074)*

What the status replies to, and replies to it.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Context](../interfaces/_entities_context_.context.md)>>
Returns Context

___
<a id="fetchstatusfavouritedby"></a>

###  fetchStatusFavouritedBy

▸ **fetchStatusFavouritedBy**(id: *`string`*, params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:1111](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1111)*

Accounts that favourited the status.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchstatusrebloggedby"></a>

###  fetchStatusRebloggedBy

▸ **fetchStatusRebloggedBy**(id: *`string`*, params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:1096](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1096)*

Accounts that reblogged the status.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by](https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of target status |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="fetchsuggestions"></a>

###  fetchSuggestions

▸ **fetchSuggestions**(): `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:643](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L643)*

Accounts the user had past positive interactions with, but is not following yet.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions](https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions)

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
An array of Accounts

___
<a id="fetchtagtimeline"></a>

###  fetchTagTimeline

▸ **fetchTagTimeline**(id: *`string`*, params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/mastodon.ts:1255](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1255)*

Retrieving a tag timeline

*__see__*: [https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag](https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the hashtag |
| `Optional` params | [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md) |  Query parameter |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>
An iterable of Statuses, most recent ones first.

___
<a id="followaccount"></a>

###  followAccount

▸ **followAccount**(id: *`string`*, params?: *[FollowAccountParams](../interfaces/_client_params_.followaccountparams.md)*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:285](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L285)*

Follow an account by id

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow](https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| `Optional` params | [FollowAccountParams](../interfaces/_client_params_.followaccountparams.md) |  Options |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="followaccountbyusername"></a>

###  followAccountByUsername

▸ **followAccountByUsername**(uri: *`string`*): `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)>>

*Defined in [client/mastodon.ts:1312](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1312)*

Following a remote user

*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  \`username@domain\` of the person you want to follow |

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)>>
The local representation of the followed account, as an Account.

___
<a id="muteaccount"></a>

###  muteAccount

▸ **muteAccount**(id: *`string`*, params: *[MuteAccountParams](../interfaces/_client_params_.muteaccountparams.md)*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:871](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L871)*

Mute an account with id

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |
| params | [MuteAccountParams](../interfaces/_client_params_.muteaccountparams.md) |  Options |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="mutestatus"></a>

###  muteStatus

▸ **muteStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:900](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L900)*

Mute the conversation the status is part of, to no longer be notified about it.

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="pinaccount"></a>

###  pinAccount

▸ **pinAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:471](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L471)*

Endorse an account, i.e. choose to feature the account on the user’s public profile.

*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin](https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="pinstatus"></a>

###  pinStatus

▸ **pinStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:1189](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1189)*

Pin user’s own status to user’s profile.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="reblogstatus"></a>

###  reblogStatus

▸ **reblogStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:1163](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1163)*

Reblog a status with id.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="rejectfollowrequest"></a>

###  rejectFollowRequest

▸ **rejectFollowRequest**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:631](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L631)*

Do not allow the account to follow the user.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject](https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removeaccountfromlist"></a>

###  removeAccountFromList

▸ **removeAccountFromList**(id: *`string`*, params: *[ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md)*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:809](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L809)*

Remove accounts from a list.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts](https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| params | [ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md) |  Parameter |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removefilter"></a>

###  removeFilter

▸ **removeFilter**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:587](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L587)*

Delete a text filter.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removelist"></a>

###  removeList

▸ **removeList**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:781](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L781)*

Remove a list with id

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removepushsubscription"></a>

###  removePushSubscription

▸ **removePushSubscription**(): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:1022](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1022)*

Remove the current Web Push API subscription.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription)

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removestatus"></a>

###  removeStatus

▸ **removeStatus**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:1150](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1150)*

Remove a status. The status may still be available a short while after the call.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id](https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removesuggestion"></a>

###  removeSuggestion

▸ **removeSuggestion**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:656](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L656)*

Remove account from suggestions.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id](https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An array of Accounts

___
<a id="reportaccount"></a>

###  reportAccount

▸ **reportAccount**(params: *[ReportAccountParams](../interfaces/_client_params_.reportaccountparams.md)*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:1035](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1035)*

Report an account to moderators/administrators

*__see__*: [https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports](https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [ReportAccountParams](../interfaces/_client_params_.reportaccountparams.md) |  Parameters |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="revokeaccesstoken"></a>

###  revokeAccessToken

▸ **revokeAccessToken**(params: *[OAuthClient](../interfaces/_entities_oauth_.oauthclient.md)*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:170](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L170)*

Revoke access token parmanently

*__see__*: [https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke](https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [OAuthClient](../interfaces/_entities_oauth_.oauthclient.md) |  Client credentials |

**Returns:** `Promise`<`AxiosResponse`<`void`>>

___
<a id="search"></a>

###  search

▸ **search**<`V`>(params: *[SearchParams](../interfaces/_client_params_.searchparams.md)*, version?: *`V`*): `Promise`<`AxiosResponse`<[Results](../interfaces/_entities_results_.results.md)<`V`>>>

*Defined in [client/mastodon.ts:1049](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1049)*

Search for content in accounts, statuses and hashtags.

*__see__*: [https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search](https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search)

**Type parameters:**

#### V :  "v1" \| "v2"
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | [SearchParams](../interfaces/_client_params_.searchparams.md) | - |  Parameters |
| `Default value` version | `V` |  &#x27;v2&#x27; as V |  Version of Mastodon API (default: \`'v2'\`) |

**Returns:** `Promise`<`AxiosResponse`<[Results](../interfaces/_entities_results_.results.md)<`V`>>>
Returns Results

___
<a id="searchaccounts"></a>

###  searchAccounts

▸ **searchAccounts**(params?: *[SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md)*): `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/mastodon.ts:332](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L332)*

Search for matching accounts by username, domain and display name.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md) |  Query parameter |

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="streamcommunitytimeline"></a>

###  streamCommunityTimeline

▸ **streamCommunityTimeline**(): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:93](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L93)*

Starting local timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local)

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streamdirecttimeline"></a>

###  streamDirectTimeline

▸ **streamDirectTimeline**(): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:149](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L149)*

Starting direct timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct)

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streamlisttimeline"></a>

###  streamListTimeline

▸ **streamListTimeline**(id: *`string`*): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:134](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L134)*

Starting list timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streamlocaltagtimeline"></a>

###  streamLocalTagTimeline

▸ **streamLocalTagTimeline**(id: *`string`*): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:120](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L120)*

Starting local tag timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streampublictimeline"></a>

###  streamPublicTimeline

▸ **streamPublicTimeline**(): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:81](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L81)*

Starting federated timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public)

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streamtagtimeline"></a>

###  streamTagTimeline

▸ **streamTagTimeline**(id: *`string`*): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:106](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L106)*

Starting tag timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="streamuser"></a>

###  streamUser

▸ **streamUser**(): `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>

*Defined in [client/mastodon.ts:69](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L69)*

Starting home timeline and notification streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user)

**Returns:** `Promise`<[StreamingHandler](_client_streaming_handler_.streaminghandler.md)>
Instance of EventEmitter

___
<a id="unblockaccount"></a>

###  unblockAccount

▸ **unblockAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:393](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L393)*

Unblock an account with id

*__see__*: [https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock](https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="unblockdomain"></a>

###  unblockDomain

▸ **unblockDomain**(domain: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/mastodon.ts:444](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L444)*

Remove a domain block.

*__see__*: [https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks](https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| domain | `string` |  Domain to unblock |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="unfavouritestatus"></a>

###  unfavouriteStatus

▸ **unfavouriteStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:522](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L522)*

Undo the favourite of a status.

*__see__*: [https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite](https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="unfollowaccount"></a>

###  unfollowAccount

▸ **unfollowAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:301](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L301)*

Unfollow an account by id

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow](https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="unmuteaccount"></a>

###  unmuteAccount

▸ **unmuteAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:887](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L887)*

Unmute an account with id

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="unmutestatus"></a>

###  unmuteStatus

▸ **unmuteStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:913](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L913)*

Unmute the conversation the status is part of.

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="unpinaccount"></a>

###  unpinAccount

▸ **unpinAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/mastodon.ts:484](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L484)*

Unpin an account with id

*__see__*: [https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin](https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>
Returns Relationship

___
<a id="unpinstatus"></a>

###  unpinStatus

▸ **unpinStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:1202](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1202)*

Remove pinned status from user’s profile.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="unreblogstatus"></a>

###  unreblogStatus

▸ **unreblogStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/mastodon.ts:1176](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1176)*

Undo the reblog of a status.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="updatecredentials"></a>

###  updateCredentials

▸ **updateCredentials**(params?: *[UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md)*): `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>

*Defined in [client/mastodon.ts:219](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L219)*

Update user’s own account.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials](https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>
Returns Account

___
<a id="updatefilter"></a>

###  updateFilter

▸ **updateFilter**(id: *`string`*, params?: *[ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)*): `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>

*Defined in [client/mastodon.ts:574](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L574)*

Update a text filter.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id](https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the filter |
| `Optional` params | [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md) |  Optinal parameter |

**Returns:** `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)>>
Returns Filter

___
<a id="updatelist"></a>

###  updateList

▸ **updateList**(id: *`string`*, params: *[ModifyListParams](../interfaces/_client_params_.modifylistparams.md)*): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>

*Defined in [client/mastodon.ts:768](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L768)*

Update a list with title and id

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id](https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target list |
| params | [ModifyListParams](../interfaces/_client_params_.modifylistparams.md) |  Options |

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>
Returns List

___
<a id="updatemediaattachment"></a>

###  updateMediaAttachment

▸ **updateMediaAttachment**(id: *`string`*, params: *[ModifyMediaAttachmentParams](../interfaces/_client_params_.modifymediaattachmentparams.md)*): `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>

*Defined in [client/mastodon.ts:841](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L841)*

Update a media attachment. Can only be done before the media is attached to a status.

*__see__*: [https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id](https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target attachment |
| params | [ModifyMediaAttachmentParams](../interfaces/_client_params_.modifymediaattachmentparams.md) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>
Returns Returns Attachment

___
<a id="updatepushsubscription"></a>

###  updatePushSubscription

▸ **updatePushSubscription**(params: *[UpdatePushSubscriptionParams](../modules/_client_params_.md#updatepushsubscriptionparams)*): `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>

*Defined in [client/mastodon.ts:1007](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L1007)*

Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [UpdatePushSubscriptionParams](../modules/_client_params_.md#updatepushsubscriptionparams) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>
Returns Push Subscription

___
<a id="uploadmediaattachment"></a>

###  uploadMediaAttachment

▸ **uploadMediaAttachment**(params: *[ModifyMediaAttachmentParams](../interfaces/_client_params_.modifymediaattachmentparams.md)*): `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>

*Defined in [client/mastodon.ts:825](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L825)*

Upload a media attachment that can be used with a new status.

*__see__*: [https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media](https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [ModifyMediaAttachmentParams](../interfaces/_client_params_.modifymediaattachmentparams.md) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>
Returns Attachment

___
<a id="verifyappcredentials"></a>

###  verifyAppCredentials

▸ **verifyAppCredentials**(): `Promise`<`AxiosResponse`<[Application](../interfaces/_entities_application_.application.md)>>

*Defined in [client/mastodon.ts:354](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L354)*

Confirm that the app’s OAuth2 credentials work.

*__see__*: [https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials](https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials)

**Returns:** `Promise`<`AxiosResponse`<[Application](../interfaces/_entities_application_.application.md)>>
Returns App

___
<a id="verifycredentials"></a>

###  verifyCredentials

▸ **verifyCredentials**(): `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>

*Defined in [client/mastodon.ts:204](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L204)*

User’s own account.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials)

**Returns:** `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>
Returns Account with an extra source attribute.

___
<a id="login"></a>

### `<Static>` login

▸ **login**(params: *[LoginParams](../interfaces/_client_params_.loginparams.md)*): `Promise`<[Mastodon](_client_mastodon_.mastodon.md)>

*Defined in [client/mastodon.ts:52](https://github.com/lagunehq/core/blob/35e3f58/src/client/mastodon.ts#L52)*

Login to Mastodon

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [LoginParams](../interfaces/_client_params_.loginparams.md) |  Paramters |

**Returns:** `Promise`<[Mastodon](_client_mastodon_.mastodon.md)>
Instance of Mastodon class

___

