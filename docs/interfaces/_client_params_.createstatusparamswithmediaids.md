[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [CreateStatusParamsWithMediaIds](../interfaces/_client_params_.createstatusparamswithmediaids.md)

# Interface: CreateStatusParamsWithMediaIds

## Hierarchy

 [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md)

**↳ CreateStatusParamsWithMediaIds**

## Index

### Properties

* [in_reply_to_id](_client_params_.createstatusparamswithmediaids.md#in_reply_to_id)
* [language](_client_params_.createstatusparamswithmediaids.md#language)
* [media_ids](_client_params_.createstatusparamswithmediaids.md#media_ids)
* [poll](_client_params_.createstatusparamswithmediaids.md#poll)
* [scheduled_at](_client_params_.createstatusparamswithmediaids.md#scheduled_at)
* [sensitive](_client_params_.createstatusparamswithmediaids.md#sensitive)
* [spoiler_text](_client_params_.createstatusparamswithmediaids.md#spoiler_text)
* [status](_client_params_.createstatusparamswithmediaids.md#status)
* [visibility](_client_params_.createstatusparamswithmediaids.md#visibility)

---

## Properties

<a id="in_reply_to_id"></a>

### `<Optional>` in_reply_to_id

**● in_reply_to_id**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[in_reply_to_id](_client_params_.createstatusparamsbase.md#in_reply_to_id)*

*Defined in [client/params.ts:230](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L230)*

local ID of the status you want to reply to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[language](_client_params_.createstatusparamsbase.md#language)*

*Defined in [client/params.ts:240](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L240)*

ISO 639-2 language code of the toot, to skip automatic detection

___
<a id="media_ids"></a>

###  media_ids

**● media_ids**: *`string`[] \| `null`*

*Defined in [client/params.ts:256](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L256)*

Array of media IDs to attach to the status (maximum 4)

___
<a id="poll"></a>

### `<Optional>` poll

**● poll**: *`undefined`*

*Defined in [client/params.ts:258](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L258)*

Poll cannot be combined with media ids

___
<a id="scheduled_at"></a>

### `<Optional>` scheduled_at

**● scheduled_at**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[scheduled_at](_client_params_.createstatusparamsbase.md#scheduled_at)*

*Defined in [client/params.ts:238](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L238)*

Timestamp string to schedule posting of status (ISO 8601)

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[sensitive](_client_params_.createstatusparamsbase.md#sensitive)*

*Defined in [client/params.ts:232](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L232)*

Set this to mark the media of the status as NSFW

___
<a id="spoiler_text"></a>

### `<Optional>` spoiler_text

**● spoiler_text**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[spoiler_text](_client_params_.createstatusparamsbase.md#spoiler_text)*

*Defined in [client/params.ts:234](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L234)*

Text to be shown as a warning before the actual content

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`string` \| `null`*

*Defined in [client/params.ts:254](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L254)*

Text of the status

___
<a id="visibility"></a>

### `<Optional>` visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[visibility](_client_params_.createstatusparamsbase.md#visibility)*

*Defined in [client/params.ts:236](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L236)*

Either "direct", "private", "unlisted" or "public"

___

