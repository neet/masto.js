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

*Defined in [client/params.ts:222](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L222)*

local ID of the status you want to reply to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[language](_client_params_.createstatusparamsbase.md#language)*

*Defined in [client/params.ts:232](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L232)*

ISO 639-2 language code of the toot, to skip automatic detection

___
<a id="media_ids"></a>

###  media_ids

**● media_ids**: *`string`[] \| `null`*

*Defined in [client/params.ts:248](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L248)*

Array of media IDs to attach to the status (maximum 4)

___
<a id="poll"></a>

### `<Optional>` poll

**● poll**: *`undefined`*

*Defined in [client/params.ts:250](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L250)*

Poll cannot be combined with media ids

___
<a id="scheduled_at"></a>

### `<Optional>` scheduled_at

**● scheduled_at**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[scheduled_at](_client_params_.createstatusparamsbase.md#scheduled_at)*

*Defined in [client/params.ts:230](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L230)*

Timestamp string to schedule posting of status (ISO 8601)

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[sensitive](_client_params_.createstatusparamsbase.md#sensitive)*

*Defined in [client/params.ts:224](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L224)*

Set this to mark the media of the status as NSFW

___
<a id="spoiler_text"></a>

### `<Optional>` spoiler_text

**● spoiler_text**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[spoiler_text](_client_params_.createstatusparamsbase.md#spoiler_text)*

*Defined in [client/params.ts:226](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L226)*

Text to be shown as a warning before the actual content

___
<a id="status"></a>

### `<Optional>` status

**● status**: *`string` \| `null`*

*Defined in [client/params.ts:246](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L246)*

Text of the status

___
<a id="visibility"></a>

### `<Optional>` visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[visibility](_client_params_.createstatusparamsbase.md#visibility)*

*Defined in [client/params.ts:228](https://github.com/neet/masto.js/blob/390e749/src/client/params.ts#L228)*

Either "direct", "private", "unlisted" or "public"

___

