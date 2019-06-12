[masto](../README.md) > ["client/params"](../modules/_client_params_.md)

# External module: "client/params"

## Index

### Interfaces

* [AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md)
* [CreateAccountParams](../interfaces/_client_params_.createaccountparams.md)
* [CreateAppParams](../interfaces/_client_params_.createappparams.md)
* [CreateStatusParamsBase](../interfaces/_client_params_.createstatusparamsbase.md)
* [CreateStatusParamsWithMediaIds](../interfaces/_client_params_.createstatusparamswithmediaids.md)
* [CreateStatusParamsWithStatus](../interfaces/_client_params_.createstatusparamswithstatus.md)
* [CreateStatusPollParam](../interfaces/_client_params_.createstatuspollparam.md)
* [FetchAccessTokenParamsBase](../interfaces/_client_params_.fetchaccesstokenparamsbase.md)
* [FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_client_params_.fetchaccesstokenparamswithauthorizationcode.md)
* [FetchAccessTokenParamsWithPassword](../interfaces/_client_params_.fetchaccesstokenparamswithpassword.md)
* [FetchAccountStatusesParams](../interfaces/_client_params_.fetchaccountstatusesparams.md)
* [FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md)
* [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)
* [FollowAccountParams](../interfaces/_client_params_.followaccountparams.md)
* [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)
* [ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md)
* [ModifyListParams](../interfaces/_client_params_.modifylistparams.md)
* [MuteAccountParams](../interfaces/_client_params_.muteaccountparams.md)
* [PaginationParams](../interfaces/_client_params_.paginationparams.md)
* [ReblogStatusParams](../interfaces/_client_params_.reblogstatusparams.md)
* [ReportAccountParams](../interfaces/_client_params_.reportaccountparams.md)
* [RevokeAccessTokenParams](../interfaces/_client_params_.revokeaccesstokenparams.md)
* [SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md)
* [SearchParams](../interfaces/_client_params_.searchparams.md)
* [UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md)
* [UpdateScheduledStatusParams](../interfaces/_client_params_.updatescheduledstatusparams.md)
* [UploadMediaAttachmentParams](../interfaces/_client_params_.uploadmediaattachmentparams.md)
* [VotePollParams](../interfaces/_client_params_.votepollparams.md)

### Type aliases

* [CreateStatusParams](_client_params_.md#createstatusparams)
* [FetchAccessTokenParams](_client_params_.md#fetchaccesstokenparams)
* [GrantType](_client_params_.md#granttype)
* [IsomorphicFormDataValue](_client_params_.md#isomorphicformdatavalue)
* [LoginParams](_client_params_.md#loginparams)
* [UpdateMediaAttachmentParams](_client_params_.md#updatemediaattachmentparams)
* [UpdatePushSubscriptionParams](_client_params_.md#updatepushsubscriptionparams)

---

## Type aliases

<a id="createstatusparams"></a>

###  CreateStatusParams

**Ƭ CreateStatusParams**: *[CreateStatusParamsWithStatus](../interfaces/_client_params_.createstatusparamswithstatus.md) \| [CreateStatusParamsWithMediaIds](../interfaces/_client_params_.createstatusparamswithmediaids.md)*

*Defined in [client/params.ts:261](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L261)*

___
<a id="fetchaccesstokenparams"></a>

###  FetchAccessTokenParams

**Ƭ FetchAccessTokenParams**: *[FetchAccessTokenParamsWithAuthorizationCode](../interfaces/_client_params_.fetchaccesstokenparamswithauthorizationcode.md) \| [FetchAccessTokenParamsWithPassword](../interfaces/_client_params_.fetchaccesstokenparamswithpassword.md)*

*Defined in [client/params.ts:114](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L114)*

___
<a id="granttype"></a>

###  GrantType

**Ƭ GrantType**: *"authorization_code" \| "password"*

*Defined in [client/params.ts:87](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L87)*

___
<a id="isomorphicformdatavalue"></a>

###  IsomorphicFormDataValue

**Ƭ IsomorphicFormDataValue**: *`string` \| `Blob` \| `Buffer` \| `ReadStream`*

*Defined in [client/params.ts:11](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L11)*

Union of acceptable values of form-data for browser and node

___
<a id="loginparams"></a>

###  LoginParams

**Ƭ LoginParams**: *`Pick`<[GatewayConstructor](../interfaces/_client_gateway_.gatewayconstructor.md), "uri" \| "accessToken">*

*Defined in [client/params.ts:13](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L13)*

___
<a id="updatemediaattachmentparams"></a>

###  UpdateMediaAttachmentParams

**Ƭ UpdateMediaAttachmentParams**: *`Omit`<[UploadMediaAttachmentParams](../interfaces/_client_params_.uploadmediaattachmentparams.md), "file">*

*Defined in [client/params.ts:134](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L134)*

___
<a id="updatepushsubscriptionparams"></a>

###  UpdatePushSubscriptionParams

**Ƭ UpdatePushSubscriptionParams**: *`Pick`<[AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md), "data">*

*Defined in [client/params.ts:186](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L186)*

___

