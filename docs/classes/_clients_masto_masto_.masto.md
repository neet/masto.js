[masto](../README.md) › [Globals](../globals.md) › ["clients/masto/masto"](../modules/_clients_masto_masto_.md) › [Masto](_clients_masto_masto_.masto.md)

# Class: Masto

Mastodon API client

## Hierarchy

* [Gateway](_gateway_gateway_.gateway.md)

  ↳ **Masto**

## Index

### Constructors

* [constructor](_clients_masto_masto_.masto.md#constructor)

### Properties

* [accessToken](_clients_masto_masto_.masto.md#optional-accesstoken)
* [version](_clients_masto_masto_.masto.md#version)

### Accessors

* [streamingApiUrl](_clients_masto_masto_.masto.md#streamingapiurl)
* [uri](_clients_masto_masto_.masto.md#uri)

### Methods

* [addAccountToList](_clients_masto_masto_.masto.md#addaccounttolist)
* [addPushSubscription](_clients_masto_masto_.masto.md#addpushsubscription)
* [authorizeFollowRequest](_clients_masto_masto_.masto.md#authorizefollowrequest)
* [blockAccount](_clients_masto_masto_.masto.md#blockaccount)
* [blockDomain](_clients_masto_masto_.masto.md#blockdomain)
* [clearNotifications](_clients_masto_masto_.masto.md#clearnotifications)
* [createAccount](_clients_masto_masto_.masto.md#createaccount)
* [createApp](_clients_masto_masto_.masto.md#createapp)
* [createFeaturedTag](_clients_masto_masto_.masto.md#createfeaturedtag)
* [createFiler](_clients_masto_masto_.masto.md#createfiler)
* [createList](_clients_masto_masto_.masto.md#createlist)
* [createMarkers](_clients_masto_masto_.masto.md#createmarkers)
* [createStatus](_clients_masto_masto_.masto.md#createstatus)
* [delete](_clients_masto_masto_.masto.md#delete)
* [dismissNotification](_clients_masto_masto_.masto.md#dismissnotification)
* [favouriteStatus](_clients_masto_masto_.masto.md#favouritestatus)
* [fetchAccessToken](_clients_masto_masto_.masto.md#fetchaccesstoken)
* [fetchAccount](_clients_masto_masto_.masto.md#fetchaccount)
* [fetchAccountFollowers](_clients_masto_masto_.masto.md#fetchaccountfollowers)
* [fetchAccountFollowing](_clients_masto_masto_.masto.md#fetchaccountfollowing)
* [fetchAccountIdentityProofs](_clients_masto_masto_.masto.md#fetchaccountidentityproofs)
* [fetchAccountLists](_clients_masto_masto_.masto.md#fetchaccountlists)
* [fetchAccountRelationships](_clients_masto_masto_.masto.md#fetchaccountrelationships)
* [fetchAccountStatuses](_clients_masto_masto_.masto.md#fetchaccountstatuses)
* [fetchBlocks](_clients_masto_masto_.masto.md#fetchblocks)
* [fetchCommunityTimeline](_clients_masto_masto_.masto.md#fetchcommunitytimeline)
* [fetchConversations](_clients_masto_masto_.masto.md#fetchconversations)
* [fetchCustomEmojis](_clients_masto_masto_.masto.md#fetchcustomemojis)
* [fetchDirectTimeline](_clients_masto_masto_.masto.md#fetchdirecttimeline)
* [fetchDirectory](_clients_masto_masto_.masto.md#fetchdirectory)
* [fetchDomainBlocks](_clients_masto_masto_.masto.md#fetchdomainblocks)
* [fetchEndorsements](_clients_masto_masto_.masto.md#fetchendorsements)
* [fetchFavourites](_clients_masto_masto_.masto.md#fetchfavourites)
* [fetchFeaturedTags](_clients_masto_masto_.masto.md#fetchfeaturedtags)
* [fetchFilter](_clients_masto_masto_.masto.md#fetchfilter)
* [fetchFilters](_clients_masto_masto_.masto.md#fetchfilters)
* [fetchFollowRequests](_clients_masto_masto_.masto.md#fetchfollowrequests)
* [fetchHomeTimeline](_clients_masto_masto_.masto.md#fetchhometimeline)
* [fetchInstance](_clients_masto_masto_.masto.md#fetchinstance)
* [fetchInstanceActivity](_clients_masto_masto_.masto.md#fetchinstanceactivity)
* [fetchInstancesPeers](_clients_masto_masto_.masto.md#fetchinstancespeers)
* [fetchList](_clients_masto_masto_.masto.md#fetchlist)
* [fetchListAccounts](_clients_masto_masto_.masto.md#fetchlistaccounts)
* [fetchListTimeline](_clients_masto_masto_.masto.md#fetchlisttimeline)
* [fetchLists](_clients_masto_masto_.masto.md#fetchlists)
* [fetchMarkers](_clients_masto_masto_.masto.md#fetchmarkers)
* [fetchMutes](_clients_masto_masto_.masto.md#fetchmutes)
* [fetchNotification](_clients_masto_masto_.masto.md#fetchnotification)
* [fetchNotifications](_clients_masto_masto_.masto.md#fetchnotifications)
* [fetchPoll](_clients_masto_masto_.masto.md#fetchpoll)
* [fetchPreferences](_clients_masto_masto_.masto.md#fetchpreferences)
* [fetchPublicTimeline](_clients_masto_masto_.masto.md#fetchpublictimeline)
* [fetchPushSubscription](_clients_masto_masto_.masto.md#fetchpushsubscription)
* [fetchScheduledStatus](_clients_masto_masto_.masto.md#fetchscheduledstatus)
* [fetchScheduledStatuses](_clients_masto_masto_.masto.md#fetchscheduledstatuses)
* [fetchStatus](_clients_masto_masto_.masto.md#fetchstatus)
* [fetchStatusCard](_clients_masto_masto_.masto.md#fetchstatuscard)
* [fetchStatusContext](_clients_masto_masto_.masto.md#fetchstatuscontext)
* [fetchStatusFavouritedBy](_clients_masto_masto_.masto.md#fetchstatusfavouritedby)
* [fetchStatusRebloggedBy](_clients_masto_masto_.masto.md#fetchstatusrebloggedby)
* [fetchSuggestions](_clients_masto_masto_.masto.md#fetchsuggestions)
* [fetchTagTimeline](_clients_masto_masto_.masto.md#fetchtagtimeline)
* [fetchTrends](_clients_masto_masto_.masto.md#fetchtrends)
* [followAccount](_clients_masto_masto_.masto.md#followaccount)
* [followAccountByUsername](_clients_masto_masto_.masto.md#followaccountbyusername)
* [get](_clients_masto_masto_.masto.md#get)
* [muteAccount](_clients_masto_masto_.masto.md#muteaccount)
* [muteStatus](_clients_masto_masto_.masto.md#mutestatus)
* [paginate](_clients_masto_masto_.masto.md#paginate)
* [patch](_clients_masto_masto_.masto.md#patch)
* [pinAccount](_clients_masto_masto_.masto.md#pinaccount)
* [pinStatus](_clients_masto_masto_.masto.md#pinstatus)
* [post](_clients_masto_masto_.masto.md#post)
* [put](_clients_masto_masto_.masto.md#put)
* [reblogStatus](_clients_masto_masto_.masto.md#reblogstatus)
* [rejectFollowRequest](_clients_masto_masto_.masto.md#rejectfollowrequest)
* [removeAccountFromList](_clients_masto_masto_.masto.md#removeaccountfromlist)
* [removeFeaturedTag](_clients_masto_masto_.masto.md#removefeaturedtag)
* [removeFilter](_clients_masto_masto_.masto.md#removefilter)
* [removeList](_clients_masto_masto_.masto.md#removelist)
* [removePushSubscription](_clients_masto_masto_.masto.md#removepushsubscription)
* [removeScheduledStatus](_clients_masto_masto_.masto.md#removescheduledstatus)
* [removeStatus](_clients_masto_masto_.masto.md#removestatus)
* [removeSuggestion](_clients_masto_masto_.masto.md#removesuggestion)
* [reportAccount](_clients_masto_masto_.masto.md#reportaccount)
* [revokeAccessToken](_clients_masto_masto_.masto.md#revokeaccesstoken)
* [search](_clients_masto_masto_.masto.md#search)
* [searchAccounts](_clients_masto_masto_.masto.md#searchaccounts)
* [stream](_clients_masto_masto_.masto.md#stream)
* [streamCommunityTimeline](_clients_masto_masto_.masto.md#streamcommunitytimeline)
* [streamDirectTimeline](_clients_masto_masto_.masto.md#streamdirecttimeline)
* [streamListTimeline](_clients_masto_masto_.masto.md#streamlisttimeline)
* [streamLocalTagTimeline](_clients_masto_masto_.masto.md#streamlocaltagtimeline)
* [streamPublicTimeline](_clients_masto_masto_.masto.md#streampublictimeline)
* [streamTagTimeline](_clients_masto_masto_.masto.md#streamtagtimeline)
* [streamUser](_clients_masto_masto_.masto.md#streamuser)
* [unblockAccount](_clients_masto_masto_.masto.md#unblockaccount)
* [unblockDomain](_clients_masto_masto_.masto.md#unblockdomain)
* [unfavouriteStatus](_clients_masto_masto_.masto.md#unfavouritestatus)
* [unfollowAccount](_clients_masto_masto_.masto.md#unfollowaccount)
* [unmuteAccount](_clients_masto_masto_.masto.md#unmuteaccount)
* [unmuteStatus](_clients_masto_masto_.masto.md#unmutestatus)
* [unpinAccount](_clients_masto_masto_.masto.md#unpinaccount)
* [unpinStatus](_clients_masto_masto_.masto.md#unpinstatus)
* [unreblogStatus](_clients_masto_masto_.masto.md#unreblogstatus)
* [updateCredentials](_clients_masto_masto_.masto.md#updatecredentials)
* [updateFilter](_clients_masto_masto_.masto.md#updatefilter)
* [updateList](_clients_masto_masto_.masto.md#updatelist)
* [updateMediaAttachment](_clients_masto_masto_.masto.md#updatemediaattachment)
* [updatePushSubscription](_clients_masto_masto_.masto.md#updatepushsubscription)
* [updateScheduledStatus](_clients_masto_masto_.masto.md#updatescheduledstatus)
* [uploadMediaAttachment](_clients_masto_masto_.masto.md#uploadmediaattachment)
* [verifyAppCredentials](_clients_masto_masto_.masto.md#verifyappcredentials)
* [verifyCredentials](_clients_masto_masto_.masto.md#verifycredentials)
* [votePoll](_clients_masto_masto_.masto.md#votepoll)
* [login](_clients_masto_masto_.masto.md#static-login)

## Constructors

###  constructor

\+ **new Masto**(`params`: [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md)): *[Masto](_clients_masto_masto_.masto.md)*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[constructor](_gateway_gateway_.gateway.md#constructor)*

*Defined in [src/gateway/gateway.ts:62](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L62)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md) | Parameters  |

**Returns:** *[Masto](_clients_masto_masto_.masto.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *undefined | string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[accessToken](_gateway_gateway_.gateway.md#optional-accesstoken)*

*Defined in [src/gateway/gateway.ts:62](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L62)*

API token of the user

___

###  version

• **version**: *string* = ""

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[version](_gateway_gateway_.gateway.md#version)*

*Defined in [src/gateway/gateway.ts:60](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L60)*

Version of the current instance

## Accessors

###  streamingApiUrl

• **get streamingApiUrl**(): *string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)*

*Defined in [src/gateway/gateway.ts:101](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L101)*

**Returns:** *string*

• **set streamingApiUrl**(`streamingApiUrl`: string): *void*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)*

*Defined in [src/gateway/gateway.ts:105](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`streamingApiUrl` | string |

**Returns:** *void*

___

###  uri

• **get uri**(): *string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[uri](_gateway_gateway_.gateway.md#uri)*

*Defined in [src/gateway/gateway.ts:93](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L93)*

**Returns:** *string*

• **set uri**(`uri`: string): *void*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[uri](_gateway_gateway_.gateway.md#uri)*

*Defined in [src/gateway/gateway.ts:97](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *void*

## Methods

###  addAccountToList

▸ **addAccountToList**(`id`: string, `params`: [ModifyListAccountsParams](../interfaces/_clients_masto_params_.modifylistaccountsparams.md)): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:728](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L728)*

Add accounts to a list.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |
`params` | [ModifyListAccountsParams](../interfaces/_clients_masto_params_.modifylistaccountsparams.md) | Parameter |

**Returns:** *Promise‹void›*

An empty object

___

###  addPushSubscription

▸ **addPushSubscription**(`params`: [AddPushSubscriptionParams](../interfaces/_clients_masto_params_.addpushsubscriptionparams.md)): *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

*Defined in [src/clients/masto/masto.ts:878](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L878)*

Add a Web Push API subscription to receive notifications. See also: Web Push API

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [AddPushSubscriptionParams](../interfaces/_clients_masto_params_.addpushsubscriptionparams.md) | Form data |

**Returns:** *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

Returns Push Subscription

___

###  authorizeFollowRequest

▸ **authorizeFollowRequest**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:573](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L573)*

Allow the account to follow the user.

**`see`** https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Relationship

___

###  blockAccount

▸ **blockAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:364](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L364)*

Block an account with id

**`see`** https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  blockDomain

▸ **blockDomain**(`domain`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:410](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L410)*

Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.

**`see`** https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | string | Domain to block |

**Returns:** *Promise‹void›*

An empty object

___

###  clearNotifications

▸ **clearNotifications**(): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:856](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L856)*

Delete all notifications from the server.

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear

**Returns:** *Promise‹void›*

Returns an empty object.

___

###  createAccount

▸ **createAccount**(`params`: [CreateAccountParams](../interfaces/_clients_masto_params_.createaccountparams.md)): *Promise‹[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)›*

*Defined in [src/clients/masto/masto.ts:204](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L204)*

Create an account with given profile

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [CreateAccountParams](../interfaces/_clients_masto_params_.createaccountparams.md) | Data of the user to create |

**Returns:** *Promise‹[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)›*

Access token

___

###  createApp

▸ **createApp**(`params`: [CreateAppParams](../interfaces/_clients_masto_params_.createappparams.md)): *Promise‹[OAuthClient](../interfaces/_entities_oauth_.oauthclient.md)›*

*Defined in [src/clients/masto/masto.ts:332](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L332)*

Create a new application to obtain OAuth2 credentials.

**`see`** https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [CreateAppParams](../interfaces/_clients_masto_params_.createappparams.md) | Parameters |

**Returns:** *Promise‹[OAuthClient](../interfaces/_entities_oauth_.oauthclient.md)›*

Returns App with client_id and client_secret

___

###  createFeaturedTag

▸ **createFeaturedTag**(`params`: [CreateFeaturedTagParams](../interfaces/_clients_masto_params_.createfeaturedtagparams.md)): *Promise‹[FeaturedTag](../interfaces/_entities_featured_tags_.featuredtag.md)›*

*Defined in [src/clients/masto/masto.ts:1309](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1309)*

Fetch featured tag

**`see`** https://github.com/tootsuite/mastodon/pull/11778

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CreateFeaturedTagParams](../interfaces/_clients_masto_params_.createfeaturedtagparams.md) |

**Returns:** *Promise‹[FeaturedTag](../interfaces/_entities_featured_tags_.featuredtag.md)›*

Featured tags

___

###  createFiler

▸ **createFiler**(`params?`: [ModifyFilterParams](../interfaces/_clients_masto_params_.modifyfilterparams.md)): *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

*Defined in [src/clients/masto/masto.ts:525](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L525)*

Create a new filter.

**`see`** https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [ModifyFilterParams](../interfaces/_clients_masto_params_.modifyfilterparams.md) | Parameters |

**Returns:** *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

Returns Filter

___

###  createList

▸ **createList**(`params`: [ModifyListParams](../interfaces/_clients_masto_params_.modifylistparams.md)): *Promise‹[List](../interfaces/_entities_list_.list.md)›*

*Defined in [src/clients/masto/masto.ts:693](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L693)*

Create a new list.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [ModifyListParams](../interfaces/_clients_masto_params_.modifylistparams.md) | Options |

**Returns:** *Promise‹[List](../interfaces/_entities_list_.list.md)›*

Returns List

___

###  createMarkers

▸ **createMarkers**(`params`: [CreateMarkersParams](../modules/_clients_masto_params_.md#createmarkersparams)): *Promise‹object›*

*Defined in [src/clients/masto/masto.ts:1289](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1289)*

Create new marker

**`see`** https://github.com/tootsuite/mastodon/pull/11762

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CreateMarkersParams](../modules/_clients_masto_params_.md#createmarkersparams) |

**Returns:** *Promise‹object›*

Markers

___

###  createStatus

▸ **createStatus**(`params?`: [CreateStatusParams](../modules/_clients_masto_params_.md#createstatusparams), `idempotencyKey?`: undefined | string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1080](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1080)*

Publish a new status.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [CreateStatusParams](../modules/_clients_masto_params_.md#createstatusparams) | Parameters |
`idempotencyKey?` | undefined &#124; string | The Idempotency-Key of request header |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  delete

▸ **delete**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[delete](_gateway_gateway_.gateway.md#delete)*

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

###  dismissNotification

▸ **dismissNotification**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:867](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L867)*

Delete a single notification from the server.

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Notification ID |

**Returns:** *Promise‹void›*

Returns an empty object.

___

###  favouriteStatus

▸ **favouriteStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:482](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L482)*

Favourite a status with id

**`see`** https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  fetchAccessToken

▸ **fetchAccessToken**(`params`: [FetchAccessTokenParams](../modules/_clients_masto_params_.md#fetchaccesstokenparams)): *Promise‹[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)›*

*Defined in [src/clients/masto/masto.ts:161](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L161)*

Fetch access token from authorization code

**`see`** https://docs.joinmastodon.org/api/authentication/#post-oauth-token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [FetchAccessTokenParams](../modules/_clients_masto_params_.md#fetchaccesstokenparams) | Parameters |

**Returns:** *Promise‹[OAuthToken](../interfaces/_entities_oauth_.oauthtoken.md)›*

OauthToken

___

###  fetchAccount

▸ **fetchAccount**(`id`: string): *Promise‹[Account](../interfaces/_entities_account_.account.md)›*

*Defined in [src/clients/masto/masto.ts:181](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L181)*

Fetching an account

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *Promise‹[Account](../interfaces/_entities_account_.account.md)›*

Returns Account

___

###  fetchAccountFollowers

▸ **fetchAccountFollowers**(`id`: string, `params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:241](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L241)*

Accounts which follow the given account.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameters |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchAccountFollowing

▸ **fetchAccountFollowing**(`id`: string, `params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:256](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L256)*

Accounts which the given account is following.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchAccountIdentityProofs

▸ **fetchAccountIdentityProofs**(`id`: string): *Promise‹[AccountIdentityProof](../interfaces/_entities_account_.accountidentityproof.md)[]›*

*Defined in [src/clients/masto/masto.ts:192](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L192)*

Fetch identity proofs of the account

**`see`** https://github.com/tootsuite/mastodon/pull/10297

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *Promise‹[AccountIdentityProof](../interfaces/_entities_account_.accountidentityproof.md)[]›*

Returns AccountIdentityProofs

___

###  fetchAccountLists

▸ **fetchAccountLists**(`id`: string): *Promise‹[List](../interfaces/_entities_list_.list.md)[]›*

*Defined in [src/clients/masto/masto.ts:656](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L656)*

User’s lists that a given account is part of.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |

**Returns:** *Promise‹[List](../interfaces/_entities_list_.list.md)[]›*

Returns array of List

___

###  fetchAccountRelationships

▸ **fetchAccountRelationships**(`id`: string[]): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)[]›*

*Defined in [src/clients/masto/masto.ts:308](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L308)*

Relationship of the user to the given accounts in regards to following, blocking, muting, etc.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string[] | Array of account IDs |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)[]›*

Returns array of Relationship

___

###  fetchAccountStatuses

▸ **fetchAccountStatuses**(`id`: string, `params?`: [FetchAccountStatusesParams](../interfaces/_clients_masto_params_.fetchaccountstatusesparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:271](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L271)*

An account’s statuses.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |
`params?` | [FetchAccountStatusesParams](../interfaces/_clients_masto_params_.fetchaccountstatusesparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

Returns array of Status

___

###  fetchBlocks

▸ **fetchBlocks**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:353](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L353)*

Accounts the user has blocked.

**`see`** https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchCommunityTimeline

▸ **fetchCommunityTimeline**(`params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1166](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1166)*

Retrieving the community timeline (aka "Local timeline" in the UI)

**`see`** https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An iterable of Statuses, most recent ones first.

___

###  fetchConversations

▸ **fetchConversations**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Conversation](../interfaces/_entities_conversation_.conversation.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1235](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1235)*

Retrieving a conversation timeline

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) |

**Returns:** *AsyncGenerator‹[Conversation](../interfaces/_entities_conversation_.conversation.md)[], void, object | object›*

An array of Conversation

___

###  fetchCustomEmojis

▸ **fetchCustomEmojis**(): *Promise‹[Emoji](../interfaces/_entities_emoji_.emoji.md)[]›*

*Defined in [src/clients/masto/masto.ts:385](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L385)*

Custom emojis that are available on the server.

**`see`** https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis

**Returns:** *Promise‹[Emoji](../interfaces/_entities_emoji_.emoji.md)[]›*

Returns array of Emoji

___

###  fetchDirectTimeline

▸ **fetchDirectTimeline**(`params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1223](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1223)*

Retrieving a direct timeline

**`deprecated`** Use conversations API instead

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An iterable of Statuses, most recent ones first.

___

###  fetchDirectory

▸ **fetchDirectory**(`params`: [FetchDirectoryParams](../interfaces/_clients_masto_params_.fetchdirectoryparams.md)): *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

*Defined in [src/clients/masto/masto.ts:1329](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1329)*

Fetch directory

**`see`** https://github.com/tootsuite/mastodon/pull/11688

**Parameters:**

Name | Type |
------ | ------ |
`params` | [FetchDirectoryParams](../interfaces/_clients_masto_params_.fetchdirectoryparams.md) |

**Returns:** *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

List of accounts

___

###  fetchDomainBlocks

▸ **fetchDomainBlocks**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹string[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:396](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L396)*

Domains the user has blocked.

**`see`** https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹string[], void, object | object›*

Returns array of string.

___

###  fetchEndorsements

▸ **fetchEndorsements**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:435](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L435)*

Accounts the user chose to endorse.

**`see`** https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchFavourites

▸ **fetchFavourites**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:471](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L471)*

Statuses the user has favourited.

**`see`** https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

Returns array of Status

___

###  fetchFeaturedTags

▸ **fetchFeaturedTags**(): *Promise‹[FeaturedTag](../interfaces/_entities_featured_tags_.featuredtag.md)[]›*

*Defined in [src/clients/masto/masto.ts:1299](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1299)*

Fetch featured tags

**`see`** https://github.com/tootsuite/mastodon/pull/11778

**Returns:** *Promise‹[FeaturedTag](../interfaces/_entities_featured_tags_.featuredtag.md)[]›*

Featured tags

___

###  fetchFilter

▸ **fetchFilter**(`id`: string): *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

*Defined in [src/clients/masto/masto.ts:514](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L514)*

A text filter.

**`see`** https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the filter |

**Returns:** *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

Returns Filter

___

###  fetchFilters

▸ **fetchFilters**(): *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)[]›*

*Defined in [src/clients/masto/masto.ts:503](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L503)*

Text filters the user has configured that potentially must be applied client-side.

**`see`** https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters

**Returns:** *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)[]›*

An array of Filters

___

###  fetchFollowRequests

▸ **fetchFollowRequests**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:559](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L559)*

Accounts that have requested to follow the user.

**`see`** https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchHomeTimeline

▸ **fetchHomeTimeline**(`params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1152](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1152)*

Retrieving the home timeline

**`see`** https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An array of Statuses, most recent ones first.

___

###  fetchInstance

▸ **fetchInstance**(): *Promise‹[Instance](../interfaces/_entities_instance_.instance.md)›*

*Defined in [src/clients/masto/masto.ts:615](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L615)*

Information about the server.

**`see`** https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance

**Returns:** *Promise‹[Instance](../interfaces/_entities_instance_.instance.md)›*

Returns Instance

___

###  fetchInstanceActivity

▸ **fetchInstanceActivity**(): *Promise‹[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]›*

*Defined in [src/clients/masto/masto.ts:635](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L635)*

Fetching activities of current instance

**`see`** https://github.com/tootsuite/mastodon/pull/6125

**Returns:** *Promise‹[InstanceActivity](../interfaces/_entities_instance_.instanceactivity.md)[]›*

An array of InstanceActivity

___

###  fetchInstancesPeers

▸ **fetchInstancesPeers**(): *Promise‹string[]›*

*Defined in [src/clients/masto/masto.ts:625](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L625)*

Fetching instance's peers

**`see`** https://github.com/tootsuite/mastodon/pull/6125

**Returns:** *Promise‹string[]›*

An array of peer instance's domain

___

###  fetchList

▸ **fetchList**(`id`: string): *Promise‹[List](../interfaces/_entities_list_.list.md)›*

*Defined in [src/clients/masto/masto.ts:682](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L682)*

Fetch a list with id

**`see`** https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the targtet list |

**Returns:** *Promise‹[List](../interfaces/_entities_list_.list.md)›*

Returns List

___

###  fetchListAccounts

▸ **fetchListAccounts**(`id`: string, `params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:668](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L668)*

Accounts that are in a given list.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Optional params |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchListTimeline

▸ **fetchListTimeline**(`id`: string, `params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1210](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1210)*

Retrieving a list timeline

**`see`** https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the list |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An iterable of Statuses, most recent ones first.

___

###  fetchLists

▸ **fetchLists**(): *Promise‹[List](../interfaces/_entities_list_.list.md)[]›*

*Defined in [src/clients/masto/masto.ts:645](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L645)*

User’s lists.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists

**Returns:** *Promise‹[List](../interfaces/_entities_list_.list.md)[]›*

Returns array of List

___

###  fetchMarkers

▸ **fetchMarkers**(`params`: [FetchMarkersParams](../interfaces/_clients_masto_params_.fetchmarkersparams.md)): *Promise‹object›*

*Defined in [src/clients/masto/masto.ts:1279](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1279)*

Fetch read markers

**`see`** https://github.com/tootsuite/mastodon/pull/11762

**Parameters:**

Name | Type |
------ | ------ |
`params` | [FetchMarkersParams](../interfaces/_clients_masto_params_.fetchmarkersparams.md) |

**Returns:** *Promise‹object›*

Markers

___

###  fetchMutes

▸ **fetchMutes**(`params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:776](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L776)*

Accounts the user has muted.

**`see`** https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchNotification

▸ **fetchNotification**(`id`: string): *Promise‹[Notification](../interfaces/_entities_notification_.notification.md)›*

*Defined in [src/clients/masto/masto.ts:846](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L846)*

Getting a single notification

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Notification ID |

**Returns:** *Promise‹[Notification](../interfaces/_entities_notification_.notification.md)›*

Returns Notification

___

###  fetchNotifications

▸ **fetchNotifications**(`params?`: [FetchNotificationsParams](../interfaces/_clients_masto_params_.fetchnotificationsparams.md)): *AsyncGenerator‹[Notification](../interfaces/_entities_notification_.notification.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:832](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L832)*

Notifications concerning the user.

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [FetchNotificationsParams](../interfaces/_clients_masto_params_.fetchnotificationsparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Notification](../interfaces/_entities_notification_.notification.md)[], void, object | object›*

Returns array of Notification

___

###  fetchPoll

▸ **fetchPoll**(`id`: string): *Promise‹[Poll](../interfaces/_entities_poll_.poll.md)›*

*Defined in [src/clients/masto/masto.ts:920](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L920)*

Fetch poll by its ID

**`see`** https://docs.joinmastodon.org/api/rest/polls/#get-api-v1-polls-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the poll |

**Returns:** *Promise‹[Poll](../interfaces/_entities_poll_.poll.md)›*

Poll

___

###  fetchPreferences

▸ **fetchPreferences**(): *Promise‹[Preference](../interfaces/_entities_preference_.preference.md)›*

*Defined in [src/clients/masto/masto.ts:1259](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1259)*

Fetch preferences

**`see`** https://github.com/tootsuite/mastodon/pull/10109

**Returns:** *Promise‹[Preference](../interfaces/_entities_preference_.preference.md)›*

User preferences

___

###  fetchPublicTimeline

▸ **fetchPublicTimeline**(`params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1180](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1180)*

Retrieving the public timeline (aka "Federated timeline" in the UI)

**`see`** https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An iterable of Statuses, most recent ones first.

___

###  fetchPushSubscription

▸ **fetchPushSubscription**(): *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

*Defined in [src/clients/masto/masto.ts:888](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L888)*

Fetch Push Subscription for notifications

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription

**Returns:** *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

Returns Push Subscription

___

###  fetchScheduledStatus

▸ **fetchScheduledStatus**(`id`: string): *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)›*

*Defined in [src/clients/masto/masto.ts:964](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L964)*

Get scheduled status

**`see`** https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the scheduled status |

**Returns:** *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)›*

ScheduledStatus

___

###  fetchScheduledStatuses

▸ **fetchScheduledStatuses**(): *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)[]›*

*Defined in [src/clients/masto/masto.ts:953](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L953)*

Get scheduled statuses

**`see`** https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses

**Returns:** *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)[]›*

An array of ScheduledStatus

___

###  fetchStatus

▸ **fetchStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1016](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1016)*

Fetch a status with id

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  fetchStatusCard

▸ **fetchStatusCard**(`id`: string): *Promise‹[Card](../interfaces/_entities_card_.card.md)›*

*Defined in [src/clients/masto/masto.ts:1038](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1038)*

Link preview card for a status, if available.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card

**`deprecated`** Use `card` attribute of status instead

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[Card](../interfaces/_entities_card_.card.md)›*

Returns Card

___

###  fetchStatusContext

▸ **fetchStatusContext**(`id`: string): *Promise‹[Context](../interfaces/_entities_context_.context.md)›*

*Defined in [src/clients/masto/masto.ts:1027](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1027)*

What the status replies to, and replies to it.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Context](../interfaces/_entities_context_.context.md)›*

Returns Context

___

###  fetchStatusFavouritedBy

▸ **fetchStatusFavouritedBy**(`id`: string, `params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1065](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1065)*

Accounts that favourited the status.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of target status |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchStatusRebloggedBy

▸ **fetchStatusRebloggedBy**(`id`: string, `params?`: [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)): *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1050](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1050)*

Accounts that reblogged the status.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of target status |
`params?` | [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Account](../interfaces/_entities_account_.account.md)[], void, object | object›*

Returns array of Account

___

###  fetchSuggestions

▸ **fetchSuggestions**(): *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

*Defined in [src/clients/masto/masto.ts:594](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L594)*

Accounts the user had past positive interactions with, but is not following yet.

**`see`** https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions

**Returns:** *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

An array of Accounts

___

###  fetchTagTimeline

▸ **fetchTagTimeline**(`id`: string, `params?`: [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)): *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

*Defined in [src/clients/masto/masto.ts:1195](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1195)*

Retrieving a tag timeline

**`see`** https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the hashtag |
`params?` | [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md) | Query parameter |

**Returns:** *AsyncGenerator‹[Status](../interfaces/_entities_status_.status.md)[], void, object | object›*

An iterable of Statuses, most recent ones first.

___

###  fetchTrends

▸ **fetchTrends**(): *Promise‹[Trend](../interfaces/_entities_trend_.trend.md)[]›*

*Defined in [src/clients/masto/masto.ts:1269](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1269)*

Fetch trends

**`see`** https://github.com/tootsuite/mastodon/pull/11490

**Returns:** *Promise‹[Trend](../interfaces/_entities_trend_.trend.md)[]›*

Trends

___

###  followAccount

▸ **followAccount**(`id`: string, `params?`: [FollowAccountParams](../interfaces/_clients_masto_params_.followaccountparams.md)): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:286](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L286)*

Follow an account by id

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |
`params?` | [FollowAccountParams](../interfaces/_clients_masto_params_.followaccountparams.md) | Options |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  followAccountByUsername

▸ **followAccountByUsername**(`uri`: string): *Promise‹[Account](../interfaces/_entities_account_.account.md)›*

*Defined in [src/clients/masto/masto.ts:1249](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1249)*

Following a remote user

**`see`** https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | `username@domain` of the person you want to follow |

**Returns:** *Promise‹[Account](../interfaces/_entities_account_.account.md)›*

The local representation of the followed account, as an Account.

___

###  get

▸ **get**<**T**>(`path`: string, `params`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[get](_gateway_gateway_.gateway.md#get)*

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

###  muteAccount

▸ **muteAccount**(`id`: string, `params`: [MuteAccountParams](../interfaces/_clients_masto_params_.muteaccountparams.md)): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:788](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L788)*

Mute an account with id

**`see`** https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |
`params` | [MuteAccountParams](../interfaces/_clients_masto_params_.muteaccountparams.md) | Options |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  muteStatus

▸ **muteStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:810](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L810)*

Mute the conversation the status is part of, to no longer be notified about it.

**`see`** https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  paginate

▸ **paginate**<**T**, **U**>(`initialUrl`: string, `initialParams?`: [U](undefined)): *AsyncGenerator‹T, void, [PaginateNext](../modules/_gateway_gateway_.md#paginatenext)‹U››*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[paginate](_gateway_gateway_.gateway.md#paginate)*

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

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[patch](_gateway_gateway_.gateway.md#patch)*

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

###  pinAccount

▸ **pinAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:449](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L449)*

Endorse an account, i.e. choose to feature the account on the user’s public profile.

**`see`** https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  pinStatus

▸ **pinStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1130](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1130)*

Pin user’s own status to user’s profile.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  post

▸ **post**<**T**>(`path`: string, `data`: unknown, `options?`: AxiosRequestConfig): *Promise‹T›*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[post](_gateway_gateway_.gateway.md#post)*

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

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[put](_gateway_gateway_.gateway.md#put)*

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

###  reblogStatus

▸ **reblogStatus**(`id`: string, `params?`: [ReblogStatusParams](../interfaces/_clients_masto_params_.reblogstatusparams.md)): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1108](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1108)*

Reblog a status with id.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |
`params?` | [ReblogStatusParams](../interfaces/_clients_masto_params_.reblogstatusparams.md) | - |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  rejectFollowRequest

▸ **rejectFollowRequest**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:584](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L584)*

Do not allow the account to follow the user.

**`see`** https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Relationship

___

###  removeAccountFromList

▸ **removeAccountFromList**(`id`: string, `params`: [ModifyListAccountsParams](../interfaces/_clients_masto_params_.modifylistaccountsparams.md)): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:740](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L740)*

Remove accounts from a list.

**`see`** https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |
`params` | [ModifyListAccountsParams](../interfaces/_clients_masto_params_.modifylistaccountsparams.md) | Parameter |

**Returns:** *Promise‹void›*

An empty object

___

###  removeFeaturedTag

▸ **removeFeaturedTag**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:1319](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1319)*

Remove featured tag

**`see`** https://github.com/tootsuite/mastodon/pull/11778

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

void

___

###  removeFilter

▸ **removeFilter**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:548](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L548)*

Delete a text filter.

**`see`** https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the filter |

**Returns:** *Promise‹void›*

An empty object

___

###  removeList

▸ **removeList**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:716](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L716)*

Remove a list with id

**`see`** https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |

**Returns:** *Promise‹void›*

An empty object

___

###  removePushSubscription

▸ **removePushSubscription**(): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:909](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L909)*

Remove the current Web Push API subscription.

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription

**Returns:** *Promise‹void›*

An empty object

___

###  removeScheduledStatus

▸ **removeScheduledStatus**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:990](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L990)*

Remove scheduled status

**`see`** https://docs.joinmastodon.org/api/rest/scheduled-statuses/#delete-api-v1-scheduled-statuses-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the status |

**Returns:** *Promise‹void›*

Nothing

___

###  removeStatus

▸ **removeStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1097](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1097)*

Remove a status. The status may still be available a short while after the call.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

An empty object

___

###  removeSuggestion

▸ **removeSuggestion**(`id`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:605](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L605)*

Remove account from suggestions.

**`see`** https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹void›*

An array of Accounts

___

###  reportAccount

▸ **reportAccount**(`params`: [ReportAccountParams](../interfaces/_clients_masto_params_.reportaccountparams.md)): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:943](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L943)*

Report an account to moderators/administrators

**`see`** https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [ReportAccountParams](../interfaces/_clients_masto_params_.reportaccountparams.md) | Parameters |

**Returns:** *Promise‹void›*

An empty object

___

###  revokeAccessToken

▸ **revokeAccessToken**(`params`: [RevokeAccessTokenParams](../interfaces/_clients_masto_params_.revokeaccesstokenparams.md)): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:170](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L170)*

Revoke access token parmanently

**`see`** https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [RevokeAccessTokenParams](../interfaces/_clients_masto_params_.revokeaccesstokenparams.md) | Client credentials |

**Returns:** *Promise‹void›*

___

###  search

▸ **search**<**V**>(`params`: [SearchParams](../interfaces/_clients_masto_params_.searchparams.md), `version`: V): *AsyncGenerator‹V extends "v2" ? Results : ResultsV1, void, object | object›*

*Defined in [src/clients/masto/masto.ts:1002](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1002)*

Search for content in accounts, statuses and hashtags.

**`see`** https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search

**Type parameters:**

▪ **V**: *"v1" | "v2"*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`params` | [SearchParams](../interfaces/_clients_masto_params_.searchparams.md) | - | Parameters |
`version` | V |  'v2' as V | Version of Mastodon API (default: `'v2'`) |

**Returns:** *AsyncGenerator‹V extends "v2" ? Results : ResultsV1, void, object | object›*

Returns Results

___

###  searchAccounts

▸ **searchAccounts**(`params?`: [SearchAccountsParams](../interfaces/_clients_masto_params_.searchaccountsparams.md)): *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

*Defined in [src/clients/masto/masto.ts:321](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L321)*

Search for matching accounts by username, domain and display name.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [SearchAccountsParams](../interfaces/_clients_masto_params_.searchaccountsparams.md) | Query parameter |

**Returns:** *Promise‹[Account](../interfaces/_entities_account_.account.md)[]›*

Returns array of Account

___

###  stream

▸ **stream**(`path`: string, `params`: ParsedUrlQueryInput): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[stream](_gateway_gateway_.gateway.md#stream)*

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

###  streamCommunityTimeline

▸ **streamCommunityTimeline**(): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:95](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L95)*

Starting local timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamDirectTimeline

▸ **streamDirectTimeline**(): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:149](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L149)*

Starting direct timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamListTimeline

▸ **streamListTimeline**(`id`: string): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:136](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L136)*

Starting list timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the list |

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamLocalTagTimeline

▸ **streamLocalTagTimeline**(`id`: string): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:122](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L122)*

Starting local tag timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the tag |

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamPublicTimeline

▸ **streamPublicTimeline**(): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:83](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L83)*

Starting federated timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamTagTimeline

▸ **streamTagTimeline**(`id`: string): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:108](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L108)*

Starting tag timeline streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the tag |

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  streamUser

▸ **streamUser**(): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/clients/masto/masto.ts:71](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L71)*

Starting home timeline and notification streaming

**`see`** https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

Instance of EventEmitter

___

###  unblockAccount

▸ **unblockAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:375](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L375)*

Unblock an account with id

**`see`** https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  unblockDomain

▸ **unblockDomain**(`domain`: string): *Promise‹void›*

*Defined in [src/clients/masto/masto.ts:423](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L423)*

Remove a domain block.

**`see`** https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | string | Domain to unblock |

**Returns:** *Promise‹void›*

An empty object

___

###  unfavouriteStatus

▸ **unfavouriteStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:493](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L493)*

Undo the favourite of a status.

**`see`** https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  unfollowAccount

▸ **unfollowAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:297](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L297)*

Unfollow an account by id

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  unmuteAccount

▸ **unmuteAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:799](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L799)*

Unmute an account with id

**`see`** https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  unmuteStatus

▸ **unmuteStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:821](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L821)*

Unmute the conversation the status is part of.

**`see`** https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  unpinAccount

▸ **unpinAccount**(`id`: string): *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

*Defined in [src/clients/masto/masto.ts:460](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L460)*

Unpin an account with id

**`see`** https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target account |

**Returns:** *Promise‹[Relationship](../interfaces/_entities_relationship_.relationship.md)›*

Returns Relationship

___

###  unpinStatus

▸ **unpinStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1141](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1141)*

Remove pinned status from user’s profile.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  unreblogStatus

▸ **unreblogStatus**(`id`: string): *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

*Defined in [src/clients/masto/masto.ts:1119](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L1119)*

Undo the reblog of a status.

**`see`** https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target status |

**Returns:** *Promise‹[Status](../interfaces/_entities_status_.status.md)›*

Returns Status

___

###  updateCredentials

▸ **updateCredentials**(`params?`: [UpdateCredentialsParams](../interfaces/_clients_masto_params_.updatecredentialsparams.md)): *Promise‹[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)›*

*Defined in [src/clients/masto/masto.ts:225](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L225)*

Update user’s own account.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [UpdateCredentialsParams](../interfaces/_clients_masto_params_.updatecredentialsparams.md) | Form data |

**Returns:** *Promise‹[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)›*

Returns Account

___

###  updateFilter

▸ **updateFilter**(`id`: string, `params?`: [ModifyFilterParams](../interfaces/_clients_masto_params_.modifyfilterparams.md)): *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

*Defined in [src/clients/masto/masto.ts:537](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L537)*

Update a text filter.

**`see`** https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the filter |
`params?` | [ModifyFilterParams](../interfaces/_clients_masto_params_.modifyfilterparams.md) | Optinal parameter |

**Returns:** *Promise‹[Filter](../interfaces/_entities_filter_.filter.md)›*

Returns Filter

___

###  updateList

▸ **updateList**(`id`: string, `params`: [ModifyListParams](../interfaces/_clients_masto_params_.modifylistparams.md)): *Promise‹[List](../interfaces/_entities_list_.list.md)›*

*Defined in [src/clients/masto/masto.ts:705](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L705)*

Update a list with title and id

**`see`** https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target list |
`params` | [ModifyListParams](../interfaces/_clients_masto_params_.modifylistparams.md) | Options |

**Returns:** *Promise‹[List](../interfaces/_entities_list_.list.md)›*

Returns List

___

###  updateMediaAttachment

▸ **updateMediaAttachment**(`id`: string, `params`: [UpdateMediaAttachmentParams](../modules/_clients_masto_params_.md#updatemediaattachmentparams)): *Promise‹[Attachment](../interfaces/_entities_attachment_.attachment.md)›*

*Defined in [src/clients/masto/masto.ts:765](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L765)*

Update a media attachment. Can only be done before the media is attached to a status.

**`see`** https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the target attachment |
`params` | [UpdateMediaAttachmentParams](../modules/_clients_masto_params_.md#updatemediaattachmentparams) | Form data |

**Returns:** *Promise‹[Attachment](../interfaces/_entities_attachment_.attachment.md)›*

Returns Returns Attachment

___

###  updatePushSubscription

▸ **updatePushSubscription**(`params`: [UpdatePushSubscriptionParams](../modules/_clients_masto_params_.md#updatepushsubscriptionparams)): *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

*Defined in [src/clients/masto/masto.ts:899](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L899)*

Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.

**`see`** https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [UpdatePushSubscriptionParams](../modules/_clients_masto_params_.md#updatepushsubscriptionparams) | Form data |

**Returns:** *Promise‹[PushSubscription](../interfaces/_entities_push_subscription_.pushsubscription.md)›*

Returns Push Subscription

___

###  updateScheduledStatus

▸ **updateScheduledStatus**(`id`: string, `params`: [UpdateScheduledStatusParams](../interfaces/_clients_masto_params_.updatescheduledstatusparams.md)): *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)›*

*Defined in [src/clients/masto/masto.ts:976](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L976)*

Update Scheduled status. Only `scheduled_at` can be changed. To change the content, delete it and post a new status.

**`see`** https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the scheduled status |
`params` | [UpdateScheduledStatusParams](../interfaces/_clients_masto_params_.updatescheduledstatusparams.md) | Parameters |

**Returns:** *Promise‹[ScheduledStatus](../interfaces/_entities_scheduled_status_.scheduledstatus.md)›*

ScheduledStatus

___

###  uploadMediaAttachment

▸ **uploadMediaAttachment**(`params`: [UploadMediaAttachmentParams](../interfaces/_clients_masto_params_.uploadmediaattachmentparams.md)): *Promise‹[Attachment](../interfaces/_entities_attachment_.attachment.md)›*

*Defined in [src/clients/masto/masto.ts:751](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L751)*

Upload a media attachment that can be used with a new status.

**`see`** https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [UploadMediaAttachmentParams](../interfaces/_clients_masto_params_.uploadmediaattachmentparams.md) | Form data |

**Returns:** *Promise‹[Attachment](../interfaces/_entities_attachment_.attachment.md)›*

Returns Attachment

___

###  verifyAppCredentials

▸ **verifyAppCredentials**(): *Promise‹[Application](../interfaces/_entities_application_.application.md)›*

*Defined in [src/clients/masto/masto.ts:342](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L342)*

Confirm that the app’s OAuth2 credentials work.

**`see`** https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials

**Returns:** *Promise‹[Application](../interfaces/_entities_application_.application.md)›*

Returns App

___

###  verifyCredentials

▸ **verifyCredentials**(): *Promise‹[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)›*

*Defined in [src/clients/masto/masto.ts:214](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L214)*

User’s own account.

**`see`** https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials

**Returns:** *Promise‹[AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)›*

Returns Account with an extra source attribute.

___

###  votePoll

▸ **votePoll**(`id`: string, `params`: [VotePollParams](../interfaces/_clients_masto_params_.votepollparams.md)): *Promise‹[Poll](../interfaces/_entities_poll_.poll.md)›*

*Defined in [src/clients/masto/masto.ts:932](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/masto.ts#L932)*

Vote on a poll

**`see`** https://docs.joinmastodon.org/api/rest/polls/#post-api-v1-polls-id-votes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the poll |
`params` | [VotePollParams](../interfaces/_clients_masto_params_.votepollparams.md) | - |

**Returns:** *Promise‹[Poll](../interfaces/_entities_poll_.poll.md)›*

Poll

___

### `Static` login

▸ **login**<**T**>(`this`: T, `params`: [LoginParams](../modules/_gateway_gateway_.md#loginparams)): *Promise‹InstanceType<T>›*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[login](_gateway_gateway_.gateway.md#static-login)*

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
