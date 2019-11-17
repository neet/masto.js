[masto](../README.md) › [Globals](../globals.md) › ["clients/masto/params"](_clients_masto_params_.md)

# External module: "clients/masto/params"

## Index

### Interfaces

* [AddPushSubscriptionParams](../interfaces/_clients_masto_params_.addpushsubscriptionparams.md)
* [CreateAccountParams](../interfaces/_clients_masto_params_.createaccountparams.md)
* [CreateAppParams](../interfaces/_clients_masto_params_.createappparams.md)
* [CreateFeaturedTagParams](../interfaces/_clients_masto_params_.createfeaturedtagparams.md)
* [CreateStatusParamsBase](../interfaces/_clients_masto_params_.createstatusparamsbase.md)
* [CreateStatusParamsWithMediaIds](../interfaces/_clients_masto_params_.createstatusparamswithmediaids.md)
* [CreateStatusParamsWithStatus](../interfaces/_clients_masto_params_.createstatusparamswithstatus.md)
* [CreateStatusPollParam](../interfaces/_clients_masto_params_.createstatuspollparam.md)
* [FetchAccessTokenParamsBase](../interfaces/_clients_masto_params_.fetchaccesstokenparamsbase.md)
* [FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithauthorizationcode.md)
* [FetchAccessTokenParamsWithPassword](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithpassword.md)
* [FetchAccountStatusesParams](../interfaces/_clients_masto_params_.fetchaccountstatusesparams.md)
* [FetchDirectoryParams](../interfaces/_clients_masto_params_.fetchdirectoryparams.md)
* [FetchMarkersParams](../interfaces/_clients_masto_params_.fetchmarkersparams.md)
* [FetchNotificationsParams](../interfaces/_clients_masto_params_.fetchnotificationsparams.md)
* [FetchTimelineParams](../interfaces/_clients_masto_params_.fetchtimelineparams.md)
* [FollowAccountParams](../interfaces/_clients_masto_params_.followaccountparams.md)
* [ModifyFilterParams](../interfaces/_clients_masto_params_.modifyfilterparams.md)
* [ModifyListAccountsParams](../interfaces/_clients_masto_params_.modifylistaccountsparams.md)
* [ModifyListParams](../interfaces/_clients_masto_params_.modifylistparams.md)
* [MuteAccountParams](../interfaces/_clients_masto_params_.muteaccountparams.md)
* [PaginationParams](../interfaces/_clients_masto_params_.paginationparams.md)
* [ReblogStatusParams](../interfaces/_clients_masto_params_.reblogstatusparams.md)
* [ReportAccountParams](../interfaces/_clients_masto_params_.reportaccountparams.md)
* [RevokeAccessTokenParams](../interfaces/_clients_masto_params_.revokeaccesstokenparams.md)
* [SearchAccountsParams](../interfaces/_clients_masto_params_.searchaccountsparams.md)
* [SearchParams](../interfaces/_clients_masto_params_.searchparams.md)
* [UpdateCredentialsParams](../interfaces/_clients_masto_params_.updatecredentialsparams.md)
* [UpdateScheduledStatusParams](../interfaces/_clients_masto_params_.updatescheduledstatusparams.md)
* [UploadMediaAttachmentParams](../interfaces/_clients_masto_params_.uploadmediaattachmentparams.md)
* [VotePollParams](../interfaces/_clients_masto_params_.votepollparams.md)

### Type aliases

* [CreateMarkersParams](_clients_masto_params_.md#createmarkersparams)
* [CreateStatusParams](_clients_masto_params_.md#createstatusparams)
* [DirectoryOrderType](_clients_masto_params_.md#directoryordertype)
* [FetchAccessTokenParams](_clients_masto_params_.md#fetchaccesstokenparams)
* [GrantType](_clients_masto_params_.md#granttype)
* [UpdateMediaAttachmentParams](_clients_masto_params_.md#updatemediaattachmentparams)
* [UpdatePushSubscriptionParams](_clients_masto_params_.md#updatepushsubscriptionparams)

## Type aliases

###  CreateMarkersParams

Ƭ **CreateMarkersParams**: *object*

*Defined in [src/clients/masto/params.ts:294](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L294)*

#### Type declaration:

___

###  CreateStatusParams

Ƭ **CreateStatusParams**: *[CreateStatusParamsWithStatus](../interfaces/_clients_masto_params_.createstatusparamswithstatus.md) | [CreateStatusParamsWithMediaIds](../interfaces/_clients_masto_params_.createstatusparamswithmediaids.md)*

*Defined in [src/clients/masto/params.ts:255](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L255)*

___

###  DirectoryOrderType

Ƭ **DirectoryOrderType**: *"active" | "new"*

*Defined in [src/clients/masto/params.ts:302](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L302)*

___

###  FetchAccessTokenParams

Ƭ **FetchAccessTokenParams**: *[FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithauthorizationcode.md) | [FetchAccessTokenParamsWithPassword](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithpassword.md)*

*Defined in [src/clients/masto/params.ts:106](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L106)*

___

###  GrantType

Ƭ **GrantType**: *"authorization_code" | "password"*

*Defined in [src/clients/masto/params.ts:77](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L77)*

___

###  UpdateMediaAttachmentParams

Ƭ **UpdateMediaAttachmentParams**: *Omit‹[UploadMediaAttachmentParams](../interfaces/_clients_masto_params_.uploadmediaattachmentparams.md), "file"›*

*Defined in [src/clients/masto/params.ts:126](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L126)*

___

###  UpdatePushSubscriptionParams

Ƭ **UpdatePushSubscriptionParams**: *Pick‹[AddPushSubscriptionParams](../interfaces/_clients_masto_params_.addpushsubscriptionparams.md), "data"›*

*Defined in [src/clients/masto/params.ts:178](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L178)*
