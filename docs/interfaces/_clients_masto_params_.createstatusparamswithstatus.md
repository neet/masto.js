> **[masto](../README.md)**

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [CreateStatusParamsWithStatus](_clients_masto_params_.createstatusparamswithstatus.md) /

# Interface: CreateStatusParamsWithStatus

## Hierarchy

* [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md)

  * **CreateStatusParamsWithStatus**

### Index

#### Properties

* [in_reply_to_id](_clients_masto_params_.createstatusparamswithstatus.md#optional-in_reply_to_id)
* [language](_clients_masto_params_.createstatusparamswithstatus.md#optional-language)
* [media_ids](_clients_masto_params_.createstatusparamswithstatus.md#optional-media_ids)
* [poll](_clients_masto_params_.createstatusparamswithstatus.md#optional-poll)
* [scheduled_at](_clients_masto_params_.createstatusparamswithstatus.md#optional-scheduled_at)
* [sensitive](_clients_masto_params_.createstatusparamswithstatus.md#optional-sensitive)
* [spoiler_text](_clients_masto_params_.createstatusparamswithstatus.md#optional-spoiler_text)
* [status](_clients_masto_params_.createstatusparamswithstatus.md#status)
* [visibility](_clients_masto_params_.createstatusparamswithstatus.md#optional-visibility)

## Properties

### `Optional` in_reply_to_id

• **in_reply_to_id**? : *string | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[in_reply_to_id](_clients_masto_params_.createstatusparamsbase.md#optional-in_reply_to_id)*

*Defined in [clients/masto/params.ts:220](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L220)*

local ID of the status you want to reply to

___

### `Optional` language

• **language**? : *string | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[language](_clients_masto_params_.createstatusparamsbase.md#optional-language)*

*Defined in [clients/masto/params.ts:230](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L230)*

ISO 639-2 language code of the toot, to skip automatic detection

___

### `Optional` media_ids

• **media_ids**? : *string[] | null*

*Defined in [clients/masto/params.ts:237](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L237)*

Array of media IDs to attach to the status (maximum 4)

___

### `Optional` poll

• **poll**? : *[CreateStatusPollParam](_clients_masto_params_.createstatuspollparam.md) | null*

*Defined in [clients/masto/params.ts:239](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L239)*

Nested parameters to attach a poll to the status

___

### `Optional` scheduled_at

• **scheduled_at**? : *string | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[scheduled_at](_clients_masto_params_.createstatusparamsbase.md#optional-scheduled_at)*

*Defined in [clients/masto/params.ts:228](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L228)*

Timestamp string to schedule posting of status (ISO 8601)

___

### `Optional` sensitive

• **sensitive**? : *boolean | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[sensitive](_clients_masto_params_.createstatusparamsbase.md#optional-sensitive)*

*Defined in [clients/masto/params.ts:222](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L222)*

Set this to mark the media of the status as NSFW

___

### `Optional` spoiler_text

• **spoiler_text**? : *string | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[spoiler_text](_clients_masto_params_.createstatusparamsbase.md#optional-spoiler_text)*

*Defined in [clients/masto/params.ts:224](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L224)*

Text to be shown as a warning before the actual content

___

###  status

• **status**: *string*

*Defined in [clients/masto/params.ts:235](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L235)*

Text of the status

___

### `Optional` visibility

• **visibility**? : *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) | null*

*Inherited from [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md).[visibility](_clients_masto_params_.createstatusparamsbase.md#optional-visibility)*

*Defined in [clients/masto/params.ts:226](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L226)*

Either "direct", "private", "unlisted" or "public"