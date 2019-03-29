[masto](../README.md) > ["client/masto"](../modules/_client_masto_.md) > [Masto](../classes/_client_masto_.masto.md)

# Class: Masto

Mastodon API client

## Hierarchy

 [Gateway](_client_gateway_.gateway.md)

**↳ Masto**

## Index

### Constructors

* [constructor](_client_masto_.masto.md#constructor)

### Accessors

* [accessToken](_client_masto_.masto.md#accesstoken)
* [streamingApiUrl](_client_masto_.masto.md#streamingapiurl)
* [uri](_client_masto_.masto.md#uri)
* [version](_client_masto_.masto.md#version)

### Methods

* [addAccountToList](_client_masto_.masto.md#addaccounttolist)
* [addPushSubscription](_client_masto_.masto.md#addpushsubscription)
* [authorizeFollowRequest](_client_masto_.masto.md#authorizefollowrequest)
* [blockAccount](_client_masto_.masto.md#blockaccount)
* [blockDomain](_client_masto_.masto.md#blockdomain)
* [clearNotifications](_client_masto_.masto.md#clearnotifications)
* [createAccount](_client_masto_.masto.md#createaccount)
* [createApp](_client_masto_.masto.md#createapp)
* [createFiler](_client_masto_.masto.md#createfiler)
* [createList](_client_masto_.masto.md#createlist)
* [createStatus](_client_masto_.masto.md#createstatus)
* [delete](_client_masto_.masto.md#delete)
* [dissmissNotification](_client_masto_.masto.md#dissmissnotification)
* [favouriteStatus](_client_masto_.masto.md#favouritestatus)
* [fetchAccessToken](_client_masto_.masto.md#fetchaccesstoken)
* [fetchAccount](_client_masto_.masto.md#fetchaccount)
* [fetchAccountFollowers](_client_masto_.masto.md#fetchaccountfollowers)
* [fetchAccountFollowing](_client_masto_.masto.md#fetchaccountfollowing)
* [fetchAccountLists](_client_masto_.masto.md#fetchaccountlists)
* [fetchAccountRelationships](_client_masto_.masto.md#fetchaccountrelationships)
* [fetchAccountStatuses](_client_masto_.masto.md#fetchaccountstatuses)
* [fetchBlocks](_client_masto_.masto.md#fetchblocks)
* [fetchCommunityTimeline](_client_masto_.masto.md#fetchcommunitytimeline)
* [fetchConversations](_client_masto_.masto.md#fetchconversations)
* [fetchCustomEmojis](_client_masto_.masto.md#fetchcustomemojis)
* [fetchDirectTimeline](_client_masto_.masto.md#fetchdirecttimeline)
* [fetchDomainBlocks](_client_masto_.masto.md#fetchdomainblocks)
* [fetchEndorsements](_client_masto_.masto.md#fetchendorsements)
* [fetchFavourites](_client_masto_.masto.md#fetchfavourites)
* [fetchFilter](_client_masto_.masto.md#fetchfilter)
* [fetchFilters](_client_masto_.masto.md#fetchfilters)
* [fetchFollowRequests](_client_masto_.masto.md#fetchfollowrequests)
* [fetchHomeTimeline](_client_masto_.masto.md#fetchhometimeline)
* [fetchInstance](_client_masto_.masto.md#fetchinstance)
* [fetchInstanceActivity](_client_masto_.masto.md#fetchinstanceactivity)
* [fetchInstancesPeers](_client_masto_.masto.md#fetchinstancespeers)
* [fetchList](_client_masto_.masto.md#fetchlist)
* [fetchListAccounts](_client_masto_.masto.md#fetchlistaccounts)
* [fetchListTimeline](_client_masto_.masto.md#fetchlisttimeline)
* [fetchLists](_client_masto_.masto.md#fetchlists)
* [fetchMutes](_client_masto_.masto.md#fetchmutes)
* [fetchNotification](_client_masto_.masto.md#fetchnotification)
* [fetchNotifications](_client_masto_.masto.md#fetchnotifications)
* [fetchPoll](_client_masto_.masto.md#fetchpoll)
* [fetchPublicTimeline](_client_masto_.masto.md#fetchpublictimeline)
* [fetchPushSubscription](_client_masto_.masto.md#fetchpushsubscription)
* [fetchScheduledStatus](_client_masto_.masto.md#fetchscheduledstatus)
* [fetchScheduledStatuses](_client_masto_.masto.md#fetchscheduledstatuses)
* [fetchStatus](_client_masto_.masto.md#fetchstatus)
* [fetchStatusCard](_client_masto_.masto.md#fetchstatuscard)
* [fetchStatusContext](_client_masto_.masto.md#fetchstatuscontext)
* [fetchStatusFavouritedBy](_client_masto_.masto.md#fetchstatusfavouritedby)
* [fetchStatusRebloggedBy](_client_masto_.masto.md#fetchstatusrebloggedby)
* [fetchSuggestions](_client_masto_.masto.md#fetchsuggestions)
* [fetchTagTimeline](_client_masto_.masto.md#fetchtagtimeline)
* [followAccount](_client_masto_.masto.md#followaccount)
* [followAccountByUsername](_client_masto_.masto.md#followaccountbyusername)
* [get](_client_masto_.masto.md#get)
* [muteAccount](_client_masto_.masto.md#muteaccount)
* [muteStatus](_client_masto_.masto.md#mutestatus)
* [paginate](_client_masto_.masto.md#paginate)
* [patch](_client_masto_.masto.md#patch)
* [pinAccount](_client_masto_.masto.md#pinaccount)
* [pinStatus](_client_masto_.masto.md#pinstatus)
* [post](_client_masto_.masto.md#post)
* [put](_client_masto_.masto.md#put)
* [reblogStatus](_client_masto_.masto.md#reblogstatus)
* [rejectFollowRequest](_client_masto_.masto.md#rejectfollowrequest)
* [removeAccountFromList](_client_masto_.masto.md#removeaccountfromlist)
* [removeFilter](_client_masto_.masto.md#removefilter)
* [removeList](_client_masto_.masto.md#removelist)
* [removePushSubscription](_client_masto_.masto.md#removepushsubscription)
* [removeScheduledStatus](_client_masto_.masto.md#removescheduledstatus)
* [removeStatus](_client_masto_.masto.md#removestatus)
* [removeSuggestion](_client_masto_.masto.md#removesuggestion)
* [reportAccount](_client_masto_.masto.md#reportaccount)
* [revokeAccessToken](_client_masto_.masto.md#revokeaccesstoken)
* [search](_client_masto_.masto.md#search)
* [searchAccounts](_client_masto_.masto.md#searchaccounts)
* [stream](_client_masto_.masto.md#stream)
* [streamCommunityTimeline](_client_masto_.masto.md#streamcommunitytimeline)
* [streamDirectTimeline](_client_masto_.masto.md#streamdirecttimeline)
* [streamListTimeline](_client_masto_.masto.md#streamlisttimeline)
* [streamLocalTagTimeline](_client_masto_.masto.md#streamlocaltagtimeline)
* [streamPublicTimeline](_client_masto_.masto.md#streampublictimeline)
* [streamTagTimeline](_client_masto_.masto.md#streamtagtimeline)
* [streamUser](_client_masto_.masto.md#streamuser)
* [unblockAccount](_client_masto_.masto.md#unblockaccount)
* [unblockDomain](_client_masto_.masto.md#unblockdomain)
* [unfavouriteStatus](_client_masto_.masto.md#unfavouritestatus)
* [unfollowAccount](_client_masto_.masto.md#unfollowaccount)
* [unmuteAccount](_client_masto_.masto.md#unmuteaccount)
* [unmuteStatus](_client_masto_.masto.md#unmutestatus)
* [unpinAccount](_client_masto_.masto.md#unpinaccount)
* [unpinStatus](_client_masto_.masto.md#unpinstatus)
* [unreblogStatus](_client_masto_.masto.md#unreblogstatus)
* [updateCredentials](_client_masto_.masto.md#updatecredentials)
* [updateFilter](_client_masto_.masto.md#updatefilter)
* [updateList](_client_masto_.masto.md#updatelist)
* [updateMediaAttachment](_client_masto_.masto.md#updatemediaattachment)
* [updatePushSubscription](_client_masto_.masto.md#updatepushsubscription)
* [updateScheduledStatus](_client_masto_.masto.md#updatescheduledstatus)
* [uploadMediaAttachment](_client_masto_.masto.md#uploadmediaattachment)
* [verifyAppCredentials](_client_masto_.masto.md#verifyappcredentials)
* [verifyCredentials](_client_masto_.masto.md#verifycredentials)
* [votePoll](_client_masto_.masto.md#votepoll)
* [login](_client_masto_.masto.md#login)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Masto**(params: *[GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md)*): [Masto](_client_masto_.masto.md)

*Inherited from [Gateway](_client_gateway_.gateway.md).[constructor](_client_gateway_.gateway.md#constructor)*

*Defined in [client/gateway.ts:44](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| params | [GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md) |

**Returns:** [Masto](_client_masto_.masto.md)

___

## Accessors

<a id="accesstoken"></a>

###  accessToken

**get accessToken**(): `string`

**set accessToken**(newAccessToken: *`string`*): `void`

*Inherited from [Gateway](_client_gateway_.gateway.md).[accessToken](_client_gateway_.gateway.md#accesstoken)*

*Defined in [client/gateway.ts:93](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L93)*

Getter for this.\_accessToken

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[accessToken](_client_gateway_.gateway.md#accesstoken)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)*

*Defined in [client/gateway.ts:83](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L83)*

Getter for this.\_streamingApiUrl

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[streamingApiUrl](_client_gateway_.gateway.md#streamingapiurl)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[uri](_client_gateway_.gateway.md#uri)*

*Defined in [client/gateway.ts:63](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L63)*

Getter for this.\_uri

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[uri](_client_gateway_.gateway.md#uri)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[version](_client_gateway_.gateway.md#version)*

*Defined in [client/gateway.ts:73](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L73)*

Getter for this.\_version

**Returns:** `string`

*Inherited from [Gateway](_client_gateway_.gateway.md).[version](_client_gateway_.gateway.md#version)*

*Defined in [client/gateway.ts:78](https://github.com/neet/masto.js/blob/390e749/src/client/gateway.ts#L78)*

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

*Defined in [client/masto.ts:802](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L802)*

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

*Defined in [client/masto.ts:983](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L983)*

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

*Defined in [client/masto.ts:623](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L623)*

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

*Defined in [client/masto.ts:387](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L387)*

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

*Defined in [client/masto.ts:436](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L436)*

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

*Defined in [client/masto.ts:955](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L955)*

Delete all notifications from the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear](https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear)

**Returns:** `Promise`<`AxiosResponse`<`void`>>
Returns an empty object.

___
<a id="createaccount"></a>

###  createAccount

▸ **createAccount**(params: *[CreateAccountParams](../interfaces/_client_params_.createaccountparams.md)*): `Promise`<`AxiosResponse`<[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)>>

*Defined in [client/masto.ts:199](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L199)*

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

*Defined in [client/masto.ts:350](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L350)*

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

*Defined in [client/masto.ts:567](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L567)*

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

*Defined in [client/masto.ts:761](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L761)*

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

*Defined in [client/masto.ts:1220](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1220)*

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
<a id="delete"></a>

###  delete

▸ **delete**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[delete](_client_gateway_.gateway.md#delete)*

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
<a id="dissmissnotification"></a>

###  dissmissNotification

▸ **dissmissNotification**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/masto.ts:968](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L968)*

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

*Defined in [client/masto.ts:516](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L516)*

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

*Defined in [client/masto.ts:168](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L168)*

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

*Defined in [client/masto.ts:188](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L188)*

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

*Defined in [client/masto.ts:243](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L243)*

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

*Defined in [client/masto.ts:259](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L259)*

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

*Defined in [client/masto.ts:718](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L718)*

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

*Defined in [client/masto.ts:323](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L323)*

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

*Defined in [client/masto.ts:275](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L275)*

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

*Defined in [client/masto.ts:374](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L374)*

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

*Defined in [client/masto.ts:1315](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1315)*

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

▸ **fetchConversations**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>>

*Defined in [client/masto.ts:1389](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1389)*

Retrieving a conversation timeline

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` params | [PaginationParams](../interfaces/_client_params_.paginationparams.md) |

**Returns:** `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Conversation](../interfaces/_entities_conversation_.conversation.md)[]>>
An array of Conversation

___
<a id="fetchcustomemojis"></a>

###  fetchCustomEmojis

▸ **fetchCustomEmojis**(): `Promise`<`AxiosResponse`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>>

*Defined in [client/masto.ts:410](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L410)*

Custom emojis that are available on the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis](https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis)

**Returns:** `Promise`<`AxiosResponse`<[Emoji](../interfaces/_entities_emoji_.emoji.md)[]>>
Returns array of Emoji

___
<a id="fetchdirecttimeline"></a>

###  fetchDirectTimeline

▸ **fetchDirectTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/masto.ts:1375](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1375)*

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

*Defined in [client/masto.ts:423](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L423)*

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

*Defined in [client/masto.ts:465](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L465)*

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

*Defined in [client/masto.ts:504](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L504)*

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

*Defined in [client/masto.ts:554](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L554)*

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

*Defined in [client/masto.ts:541](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L541)*

Text filters the user has configured that potentially must be applied client-side.

*__see__*: [https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters](https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters)

**Returns:** `Promise`<`AxiosResponse`<[Filter](../interfaces/_entities_filter_.filter.md)[]>>
An array of Filters

___
<a id="fetchfollowrequests"></a>

###  fetchFollowRequests

▸ **fetchFollowRequests**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/masto.ts:607](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L607)*

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

*Defined in [client/masto.ts:1304](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1304)*

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

*Defined in [client/masto.ts:673](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L673)*

Information about the server.

*__see__*: [https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance](https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance)

**Returns:** `Promise`<`AxiosResponse`<[Instance](../interfaces/_entities_instance_.instance.md)>>
Returns Instance

___
<a id="fetchinstanceactivity"></a>

###  fetchInstanceActivity

▸ **fetchInstanceActivity**(): `Promise`<`AxiosResponse`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>>

*Defined in [client/masto.ts:693](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L693)*

Fetching activities of current instance

*__see__*: [https://github.com/tootsuite/mastodon/pull/6125](https://github.com/tootsuite/mastodon/pull/6125)

**Returns:** `Promise`<`AxiosResponse`<[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]>>
An array of InstanceActivity

___
<a id="fetchinstancespeers"></a>

###  fetchInstancesPeers

▸ **fetchInstancesPeers**(): `Promise`<`AxiosResponse`<`string`[]>>

*Defined in [client/masto.ts:683](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L683)*

Fetching instance's peers

*__see__*: [https://github.com/tootsuite/mastodon/pull/6125](https://github.com/tootsuite/mastodon/pull/6125)

**Returns:** `Promise`<`AxiosResponse`<`string`[]>>
An array of peer instance's domain

___
<a id="fetchlist"></a>

###  fetchList

▸ **fetchList**(id: *`string`*): `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)>>

*Defined in [client/masto.ts:748](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L748)*

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

*Defined in [client/masto.ts:732](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L732)*

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

*Defined in [client/masto.ts:1361](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1361)*

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

*Defined in [client/masto.ts:705](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L705)*

User’s lists.

*__see__*: [https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists](https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists)

**Returns:** `Promise`<`AxiosResponse`<[List](../interfaces/_entities_list_.list.md)[]>>
Returns array of List

___
<a id="fetchmutes"></a>

###  fetchMutes

▸ **fetchMutes**(params?: *[PaginationParams](../interfaces/_client_params_.paginationparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/masto.ts:861](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L861)*

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

*Defined in [client/masto.ts:943](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L943)*

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

*Defined in [client/masto.ts:930](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L930)*

Notifications concerning the user.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md) |  Query parameter |

**Returns:** `Promise`<`AxiosResponse`<[Notification](../interfaces/_entities_notification_.notification.md)[]>>
Returns array of Notification

___
<a id="fetchpoll"></a>

###  fetchPoll

▸ **fetchPoll**(id: *`string`*): `Promise`<`AxiosResponse`<[Poll](../interfaces/_entities_poll_.poll.md)>>

*Defined in [client/masto.ts:1037](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1037)*

Fetch poll by its ID

*__see__*: [https://docs.joinmastodon.org/api/rest/polls/#get-api-v1-polls-id](https://docs.joinmastodon.org/api/rest/polls/#get-api-v1-polls-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the poll |

**Returns:** `Promise`<`AxiosResponse`<[Poll](../interfaces/_entities_poll_.poll.md)>>
Poll

___
<a id="fetchpublictimeline"></a>

###  fetchPublicTimeline

▸ **fetchPublicTimeline**(params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/masto.ts:1329](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1329)*

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

*Defined in [client/masto.ts:998](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L998)*

Fetch Push Subscription for notifications

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription)

**Returns:** `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>
Returns Push Subscription

___
<a id="fetchscheduledstatus"></a>

###  fetchScheduledStatus

▸ **fetchScheduledStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)>>

*Defined in [client/masto.ts:1089](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1089)*

Get scheduled status

*__see__*: [https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses-id](https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the scheduled status |

**Returns:** `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)>>
ScheduledStatus

___
<a id="fetchscheduledstatuses"></a>

###  fetchScheduledStatuses

▸ **fetchScheduledStatuses**(): `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)[]>>

*Defined in [client/masto.ts:1076](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1076)*

Get scheduled statuses

*__see__*: [https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses](https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses)

**Returns:** `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)[]>>
An array of ScheduledStatus

___
<a id="fetchstatus"></a>

###  fetchStatus

▸ **fetchStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/masto.ts:1155](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1155)*

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

*Defined in [client/masto.ts:1176](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1176)*

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

*Defined in [client/masto.ts:1166](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1166)*

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

*Defined in [client/masto.ts:1203](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1203)*

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

*Defined in [client/masto.ts:1188](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1188)*

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

*Defined in [client/masto.ts:650](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L650)*

Accounts the user had past positive interactions with, but is not following yet.

*__see__*: [https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions](https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions)

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
An array of Accounts

___
<a id="fetchtagtimeline"></a>

###  fetchTagTimeline

▸ **fetchTagTimeline**(id: *`string`*, params?: *[FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)*): `AsyncIterableIterator`<`undefined` \| `AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)[]>>

*Defined in [client/masto.ts:1344](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1344)*

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

*Defined in [client/masto.ts:292](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L292)*

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

*Defined in [client/masto.ts:1404](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1404)*

Following a remote user

*__see__*: [https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uri | `string` |  \`username@domain\` of the person you want to follow |

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)>>
The local representation of the followed account, as an Account.

___
<a id="get"></a>

###  get

▸ **get**<`T`>(url: *`string`*, params?: *`object`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[get](_client_gateway_.gateway.md#get)*

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
<a id="muteaccount"></a>

###  muteAccount

▸ **muteAccount**(id: *`string`*, params: *[MuteAccountParams](../interfaces/_client_params_.muteaccountparams.md)*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/masto.ts:875](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L875)*

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

*Defined in [client/masto.ts:904](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L904)*

Mute the conversation the status is part of, to no longer be notified about it.

*__see__*: [https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute](https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target account |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="paginate"></a>

###  paginate

▸ **paginate**<`Data`,`Params`>(initialUrl: *`string`*, initialParams?: *[Params]()*): `AsyncIterableIterator`<`AxiosResponse`<`Data`> \| `undefined`>

*Inherited from [Gateway](_client_gateway_.gateway.md).[paginate](_client_gateway_.gateway.md#paginate)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[patch](_client_gateway_.gateway.md#patch)*

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
<a id="pinaccount"></a>

###  pinAccount

▸ **pinAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/masto.ts:478](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L478)*

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

*Defined in [client/masto.ts:1278](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1278)*

Pin user’s own status to user’s profile.

*__see__*: [https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin](https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target status |

**Returns:** `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>
Returns Status

___
<a id="post"></a>

###  post

▸ **post**<`T`>(url: *`string`*, data?: *`any`*, options?: *`AxiosRequestConfig`*): `Promise`<`AxiosResponse`<`T`>>

*Inherited from [Gateway](_client_gateway_.gateway.md).[post](_client_gateway_.gateway.md#post)*

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

*Inherited from [Gateway](_client_gateway_.gateway.md).[put](_client_gateway_.gateway.md#put)*

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
<a id="reblogstatus"></a>

###  reblogStatus

▸ **reblogStatus**(id: *`string`*): `Promise`<`AxiosResponse`<[Status](../interfaces/_entities_status_.status.md)>>

*Defined in [client/masto.ts:1252](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1252)*

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

*Defined in [client/masto.ts:638](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L638)*

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

*Defined in [client/masto.ts:816](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L816)*

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

*Defined in [client/masto.ts:594](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L594)*

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

*Defined in [client/masto.ts:788](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L788)*

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

*Defined in [client/masto.ts:1026](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1026)*

Remove the current Web Push API subscription.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription)

**Returns:** `Promise`<`AxiosResponse`<`void`>>
An empty object

___
<a id="removescheduledstatus"></a>

###  removeScheduledStatus

▸ **removeScheduledStatus**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/masto.ts:1124](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1124)*

Remove scheduled status

*__see__*: [https://docs.joinmastodon.org/api/rest/scheduled-statuses/#delete-api-v1-scheduled-statuses-id](https://docs.joinmastodon.org/api/rest/scheduled-statuses/#delete-api-v1-scheduled-statuses-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the status |

**Returns:** `Promise`<`AxiosResponse`<`void`>>
Nothing

___
<a id="removestatus"></a>

###  removeStatus

▸ **removeStatus**(id: *`string`*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/masto.ts:1239](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1239)*

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

*Defined in [client/masto.ts:663](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L663)*

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

*Defined in [client/masto.ts:1064](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1064)*

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

▸ **revokeAccessToken**(params: *[RevokeAccessTokenParams](../interfaces/_client_params_.revokeaccesstokenparams.md)*): `Promise`<`AxiosResponse`<`void`>>

*Defined in [client/masto.ts:177](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L177)*

Revoke access token parmanently

*__see__*: [https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke](https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [RevokeAccessTokenParams](../interfaces/_client_params_.revokeaccesstokenparams.md) |  Client credentials |

**Returns:** `Promise`<`AxiosResponse`<`void`>>

___
<a id="search"></a>

###  search

▸ **search**<`V`>(params: *[SearchParams](../interfaces/_client_params_.searchparams.md)*, version?: *`V`*): `Promise`<`AxiosResponse`<`V extends "v2" ? Results : ResultsV1`>>

*Defined in [client/masto.ts:1138](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1138)*

Search for content in accounts, statuses and hashtags.

*__see__*: [https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search](https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search)

**Type parameters:**

#### V :  "v1" \| "v2"
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | [SearchParams](../interfaces/_client_params_.searchparams.md) | - |  Parameters |
| `Default value` version | `V` |  &#x27;v2&#x27; as V |  Version of Mastodon API (default: \`'v2'\`) |

**Returns:** `Promise`<`AxiosResponse`<`V extends "v2" ? Results : ResultsV1`>>
Returns Results

___
<a id="searchaccounts"></a>

###  searchAccounts

▸ **searchAccounts**(params?: *[SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md)*): `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>

*Defined in [client/masto.ts:339](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L339)*

Search for matching accounts by username, domain and display name.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` params | [SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md) |  Query parameter |

**Returns:** `Promise`<`AxiosResponse`<[Account](../interfaces/_entities_account_.account.md)[]>>
Returns array of Account

___
<a id="stream"></a>

###  stream

▸ **stream**(url: *`string`*, params?: *`object`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Inherited from [Gateway](_client_gateway_.gateway.md).[stream](_client_gateway_.gateway.md#stream)*

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
<a id="streamcommunitytimeline"></a>

###  streamCommunityTimeline

▸ **streamCommunityTimeline**(): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:100](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L100)*

Starting local timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local)

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streamdirecttimeline"></a>

###  streamDirectTimeline

▸ **streamDirectTimeline**(): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:156](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L156)*

Starting direct timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct)

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streamlisttimeline"></a>

###  streamListTimeline

▸ **streamListTimeline**(id: *`string`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:141](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L141)*

Starting list timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the list |

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streamlocaltagtimeline"></a>

###  streamLocalTagTimeline

▸ **streamLocalTagTimeline**(id: *`string`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:127](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L127)*

Starting local tag timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streampublictimeline"></a>

###  streamPublicTimeline

▸ **streamPublicTimeline**(): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:88](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L88)*

Starting federated timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public)

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streamtagtimeline"></a>

###  streamTagTimeline

▸ **streamTagTimeline**(id: *`string`*): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:113](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L113)*

Starting tag timeline streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the tag |

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="streamuser"></a>

###  streamUser

▸ **streamUser**(): `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>

*Defined in [client/masto.ts:76](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L76)*

Starting home timeline and notification streaming

*__see__*: [https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user](https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user)

**Returns:** `Promise`<[MastoEvents](_client_masto_events_.mastoevents.md)>
Instance of EventEmitter

___
<a id="unblockaccount"></a>

###  unblockAccount

▸ **unblockAccount**(id: *`string`*): `Promise`<`AxiosResponse`<[Relationship](../interfaces/_entities_relationship_.relationship.md)>>

*Defined in [client/masto.ts:400](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L400)*

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

*Defined in [client/masto.ts:451](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L451)*

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

*Defined in [client/masto.ts:529](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L529)*

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

*Defined in [client/masto.ts:308](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L308)*

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

*Defined in [client/masto.ts:891](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L891)*

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

*Defined in [client/masto.ts:917](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L917)*

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

*Defined in [client/masto.ts:491](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L491)*

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

*Defined in [client/masto.ts:1291](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1291)*

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

*Defined in [client/masto.ts:1265](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1265)*

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

*Defined in [client/masto.ts:226](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L226)*

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

*Defined in [client/masto.ts:581](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L581)*

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

*Defined in [client/masto.ts:775](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L775)*

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

▸ **updateMediaAttachment**(id: *`string`*, params: *[UpdateMediaAttachmentParams](../modules/_client_params_.md#updatemediaattachmentparams)*): `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>

*Defined in [client/masto.ts:845](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L845)*

Update a media attachment. Can only be done before the media is attached to a status.

*__see__*: [https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id](https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target attachment |
| params | [UpdateMediaAttachmentParams](../modules/_client_params_.md#updatemediaattachmentparams) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>
Returns Returns Attachment

___
<a id="updatepushsubscription"></a>

###  updatePushSubscription

▸ **updatePushSubscription**(params: *[UpdatePushSubscriptionParams](../modules/_client_params_.md#updatepushsubscriptionparams)*): `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>

*Defined in [client/masto.ts:1011](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1011)*

Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.

*__see__*: [https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription](https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [UpdatePushSubscriptionParams](../modules/_client_params_.md#updatepushsubscriptionparams) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)>>
Returns Push Subscription

___
<a id="updatescheduledstatus"></a>

###  updateScheduledStatus

▸ **updateScheduledStatus**(id: *`string`*, params: *[UpdateScheduledStatusParams](../interfaces/_client_params_.updatescheduledstatusparams.md)*): `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)>>

*Defined in [client/masto.ts:1105](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1105)*

Update Scheduled status. Only `scheduled_at` can be changed. To change the content, delete it and post a new status.

*__see__*: [https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id](https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the scheduled status |
| params | [UpdateScheduledStatusParams](../interfaces/_client_params_.updatescheduledstatusparams.md) |  Parameters |

**Returns:** `Promise`<`AxiosResponse`<[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)>>
ScheduledStatus

___
<a id="uploadmediaattachment"></a>

###  uploadMediaAttachment

▸ **uploadMediaAttachment**(params: *[UploadMediaAttachmentParams](../interfaces/_client_params_.uploadmediaattachmentparams.md)*): `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>

*Defined in [client/masto.ts:829](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L829)*

Upload a media attachment that can be used with a new status.

*__see__*: [https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media](https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [UploadMediaAttachmentParams](../interfaces/_client_params_.uploadmediaattachmentparams.md) |  Form data |

**Returns:** `Promise`<`AxiosResponse`<[Attachment](../interfaces/_entities_attachment_.attachment.md)>>
Returns Attachment

___
<a id="verifyappcredentials"></a>

###  verifyAppCredentials

▸ **verifyAppCredentials**(): `Promise`<`AxiosResponse`<[Application](../interfaces/_entities_application_.application.md)>>

*Defined in [client/masto.ts:361](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L361)*

Confirm that the app’s OAuth2 credentials work.

*__see__*: [https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials](https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials)

**Returns:** `Promise`<`AxiosResponse`<[Application](../interfaces/_entities_application_.application.md)>>
Returns App

___
<a id="verifycredentials"></a>

###  verifyCredentials

▸ **verifyCredentials**(): `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>

*Defined in [client/masto.ts:211](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L211)*

User’s own account.

*__see__*: [https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials](https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials)

**Returns:** `Promise`<`AxiosResponse`<[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)>>
Returns Account with an extra source attribute.

___
<a id="votepoll"></a>

###  votePoll

▸ **votePoll**(id: *`string`*, params: *[VotePollParams](../interfaces/_client_params_.votepollparams.md)*): `Promise`<`AxiosResponse`<[Poll](../interfaces/_entities_poll_.poll.md)>>

*Defined in [client/masto.ts:1051](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L1051)*

Vote on a poll

*__see__*: [https://docs.joinmastodon.org/api/rest/polls/#post-api-v1-polls-id-votes](https://docs.joinmastodon.org/api/rest/polls/#post-api-v1-polls-id-votes)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the poll |
| params | [VotePollParams](../interfaces/_client_params_.votepollparams.md) |

**Returns:** `Promise`<`AxiosResponse`<[Poll](../interfaces/_entities_poll_.poll.md)>>
Poll

___
<a id="login"></a>

### `<Static>` login

▸ **login**(params: *[LoginParams](../modules/_client_params_.md#loginparams)*): `Promise`<[Masto](_client_masto_.masto.md)>

*Defined in [client/masto.ts:58](https://github.com/neet/masto.js/blob/390e749/src/client/masto.ts#L58)*

Login to Mastodon

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| params | [LoginParams](../modules/_client_params_.md#loginparams) |  Paramters |

**Returns:** `Promise`<[Masto](_client_masto_.masto.md)>
Instance of Mastodon class

___

