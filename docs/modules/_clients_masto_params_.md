> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](_clients_masto_params_.md) /

# External module: "clients/masto/params"

### Index

#### Interfaces

* [AddPushSubscriptionParams](../interfaces/_clients_masto_params_.addpushsubscriptionparams.md)
* [CreateAccountParams](../interfaces/_clients_masto_params_.createaccountparams.md)
* [CreateAppParams](../interfaces/_clients_masto_params_.createappparams.md)
* [CreateStatusParamsBase](../interfaces/_clients_masto_params_.createstatusparamsbase.md)
* [CreateStatusParamsWithMediaIds](../interfaces/_clients_masto_params_.createstatusparamswithmediaids.md)
* [CreateStatusParamsWithStatus](../interfaces/_clients_masto_params_.createstatusparamswithstatus.md)
* [CreateStatusPollParam](../interfaces/_clients_masto_params_.createstatuspollparam.md)
* [FetchAccessTokenParamsBase](../interfaces/_clients_masto_params_.fetchaccesstokenparamsbase.md)
* [FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithauthorizationcode.md)
* [FetchAccessTokenParamsWithPassword](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithpassword.md)
* [FetchAccountStatusesParams](../interfaces/_clients_masto_params_.fetchaccountstatusesparams.md)
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

#### Type aliases

* [CreateStatusParams](_clients_masto_params_.md#createstatusparams)
* [FetchAccessTokenParams](_clients_masto_params_.md#fetchaccesstokenparams)
* [GrantType](_clients_masto_params_.md#granttype)
* [UpdateMediaAttachmentParams](_clients_masto_params_.md#updatemediaattachmentparams)
* [UpdatePushSubscriptionParams](_clients_masto_params_.md#updatepushsubscriptionparams)

## Type aliases

###  CreateStatusParams

Ƭ **CreateStatusParams**: *[CreateStatusParamsWithStatus](../interfaces/_clients_masto_params_.createstatusparamswithstatus.md) | [CreateStatusParamsWithMediaIds](../interfaces/_clients_masto_params_.createstatusparamswithmediaids.md)*

*Defined in [clients/masto/params.ts:251](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L251)*

___

###  FetchAccessTokenParams

Ƭ **FetchAccessTokenParams**: *[FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithauthorizationcode.md) | [FetchAccessTokenParamsWithPassword](../interfaces/_clients_masto_params_.fetchaccesstokenparamswithpassword.md)*

*Defined in [clients/masto/params.ts:104](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L104)*

___

###  GrantType

Ƭ **GrantType**: *"authorization_code" | "password"*

*Defined in [clients/masto/params.ts:75](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L75)*

___

###  UpdateMediaAttachmentParams

Ƭ **UpdateMediaAttachmentParams**: *`Omit<UploadMediaAttachmentParams, "file">`*

*Defined in [clients/masto/params.ts:124](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L124)*

___

###  UpdatePushSubscriptionParams

Ƭ **UpdatePushSubscriptionParams**: *`Pick<AddPushSubscriptionParams, "data">`*

*Defined in [clients/masto/params.ts:176](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L176)*

___