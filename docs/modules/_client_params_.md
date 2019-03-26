[@lagunehq/core](../README.md) > ["client/params"](../modules/_client_params_.md)

# External module: "client/params"

## Index

### Interfaces

* [AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md)
* [CreateAccountParams](../interfaces/_client_params_.createaccountparams.md)
* [CreateAppParams](../interfaces/_client_params_.createappparams.md)
* [CreateStatusPollParam](../interfaces/_client_params_.createstatuspollparam.md)
* [FetchAccountStatusesParams](../interfaces/_client_params_.fetchaccountstatusesparams.md)
* [FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md)
* [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)
* [FollowAccountParams](../interfaces/_client_params_.followaccountparams.md)
* [LoginParams](../interfaces/_client_params_.loginparams.md)
* [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)
* [ModifyListAccountsParams](../interfaces/_client_params_.modifylistaccountsparams.md)
* [ModifyListParams](../interfaces/_client_params_.modifylistparams.md)
* [ModifyMediaAttachmentParams](../interfaces/_client_params_.modifymediaattachmentparams.md)
* [MuteAccountParams](../interfaces/_client_params_.muteaccountparams.md)
* [PaginationParams](../interfaces/_client_params_.paginationparams.md)
* [ReportAccountParams](../interfaces/_client_params_.reportaccountparams.md)
* [SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md)
* [SearchParams](../interfaces/_client_params_.searchparams.md)
* [UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md)
* [UpdateScheduledStatusParams](../interfaces/_client_params_.updatescheduledstatusparams.md)
* [VotePollParams](../interfaces/_client_params_.votepollparams.md)

### Type aliases

* [CreateStatusParams](_client_params_.md#createstatusparams)
* [FetchAccessTokenParams](_client_params_.md#fetchaccesstokenparams)
* [GrantType](_client_params_.md#granttype)
* [UpdatePushSubscriptionParams](_client_params_.md#updatepushsubscriptionparams)

---

## Type aliases

<a id="createstatusparams"></a>

###  CreateStatusParams

**Ƭ CreateStatusParams**: *`object` & `MediaIds extends string[] ? { status?: string | null | undefined; poll?: void | undefined; } : {}`*

*Defined in [client/params.ts:204](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L204)*

___
<a id="fetchaccesstokenparams"></a>

###  FetchAccessTokenParams

**Ƭ FetchAccessTokenParams**: *`object` & `T extends "authorization_code" ? OAuthClient & { code: string; redirect_uri: string; } : T extends "password" ? { password: string; username: string; } : never`*

*Defined in [client/params.ts:87](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L87)*

___
<a id="granttype"></a>

###  GrantType

**Ƭ GrantType**: *"authorization_code" \| "password"*

*Defined in [client/params.ts:85](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L85)*

___
<a id="updatepushsubscriptionparams"></a>

###  UpdatePushSubscriptionParams

**Ƭ UpdatePushSubscriptionParams**: *`Pick`<[AddPushSubscriptionParams](../interfaces/_client_params_.addpushsubscriptionparams.md), "data">*

*Defined in [client/params.ts:164](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L164)*

___

