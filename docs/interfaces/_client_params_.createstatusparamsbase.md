[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [CreateStatusParamsBase](../interfaces/_client_params_.createstatusparamsbase.md)

# Interface: CreateStatusParamsBase

## Hierarchy

**CreateStatusParamsBase**

↳  [CreateStatusParamsWithStatus](_client_params_.createstatusparamswithstatus.md)

↳  [CreateStatusParamsWithMediaIds](_client_params_.createstatusparamswithmediaids.md)

## Index

### Properties

* [in_reply_to_id](_client_params_.createstatusparamsbase.md#in_reply_to_id)
* [language](_client_params_.createstatusparamsbase.md#language)
* [scheduled_at](_client_params_.createstatusparamsbase.md#scheduled_at)
* [sensitive](_client_params_.createstatusparamsbase.md#sensitive)
* [spoiler_text](_client_params_.createstatusparamsbase.md#spoiler_text)
* [visibility](_client_params_.createstatusparamsbase.md#visibility)

---

## Properties

<a id="in_reply_to_id"></a>

### `<Optional>` in_reply_to_id

**● in_reply_to_id**: *`string` \| `null`*

*Defined in [client/params.ts:228](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L228)*

local ID of the status you want to reply to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Defined in [client/params.ts:238](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L238)*

ISO 639-2 language code of the toot, to skip automatic detection

___
<a id="scheduled_at"></a>

### `<Optional>` scheduled_at

**● scheduled_at**: *`string` \| `null`*

*Defined in [client/params.ts:236](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L236)*

Timestamp string to schedule posting of status (ISO 8601)

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Defined in [client/params.ts:230](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L230)*

Set this to mark the media of the status as NSFW

___
<a id="spoiler_text"></a>

### `<Optional>` spoiler_text

**● spoiler_text**: *`string` \| `null`*

*Defined in [client/params.ts:232](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L232)*

Text to be shown as a warning before the actual content

___
<a id="visibility"></a>

### `<Optional>` visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Defined in [client/params.ts:234](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L234)*

Either "direct", "private", "unlisted" or "public"

___

