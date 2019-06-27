> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [CreateStatusParamsBase](_clients_masto_params_.createstatusparamsbase.md) /

# Interface: CreateStatusParamsBase

## Hierarchy

* **CreateStatusParamsBase**

  * [CreateStatusParamsWithStatus](_clients_masto_params_.createstatusparamswithstatus.md)

  * [CreateStatusParamsWithMediaIds](_clients_masto_params_.createstatusparamswithmediaids.md)

### Index

#### Properties

* [in_reply_to_id](_clients_masto_params_.createstatusparamsbase.md#optional-in_reply_to_id)
* [language](_clients_masto_params_.createstatusparamsbase.md#optional-language)
* [scheduled_at](_clients_masto_params_.createstatusparamsbase.md#optional-scheduled_at)
* [sensitive](_clients_masto_params_.createstatusparamsbase.md#optional-sensitive)
* [spoiler_text](_clients_masto_params_.createstatusparamsbase.md#optional-spoiler_text)
* [visibility](_clients_masto_params_.createstatusparamsbase.md#optional-visibility)

## Properties

### `Optional` in_reply_to_id

● **in_reply_to_id**? : *string | null*

*Defined in [clients/masto/params.ts:220](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L220)*

local ID of the status you want to reply to

___

### `Optional` language

● **language**? : *string | null*

*Defined in [clients/masto/params.ts:230](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L230)*

ISO 639-2 language code of the toot, to skip automatic detection

___

### `Optional` scheduled_at

● **scheduled_at**? : *string | null*

*Defined in [clients/masto/params.ts:228](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L228)*

Timestamp string to schedule posting of status (ISO 8601)

___

### `Optional` sensitive

● **sensitive**? : *boolean | null*

*Defined in [clients/masto/params.ts:222](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L222)*

Set this to mark the media of the status as NSFW

___

### `Optional` spoiler_text

● **spoiler_text**? : *string | null*

*Defined in [clients/masto/params.ts:224](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L224)*

Text to be shown as a warning before the actual content

___

### `Optional` visibility

● **visibility**? : *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) | null*

*Defined in [clients/masto/params.ts:226](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L226)*

Either "direct", "private", "unlisted" or "public"

___