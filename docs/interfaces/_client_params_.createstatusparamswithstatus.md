[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [CreateStatusParamsWithStatus](../interfaces/_client_params_.createstatusparamswithstatus.md)

# Interface: CreateStatusParamsWithStatus

## Hierarchy

 [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md)

**↳ CreateStatusParamsWithStatus**

## Index

### Properties

* [in_reply_to_id](_client_params_.createstatusparamswithstatus.md#in_reply_to_id)
* [language](_client_params_.createstatusparamswithstatus.md#language)
* [media_ids](_client_params_.createstatusparamswithstatus.md#media_ids)
* [poll](_client_params_.createstatusparamswithstatus.md#poll)
* [scheduled_at](_client_params_.createstatusparamswithstatus.md#scheduled_at)
* [sensitive](_client_params_.createstatusparamswithstatus.md#sensitive)
* [spoiler_text](_client_params_.createstatusparamswithstatus.md#spoiler_text)
* [status](_client_params_.createstatusparamswithstatus.md#status)
* [visibility](_client_params_.createstatusparamswithstatus.md#visibility)

---

## Properties

<a id="in_reply_to_id"></a>

### `<Optional>` in_reply_to_id

**● in_reply_to_id**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[in_reply_to_id](_client_params_.createstatusparamsbase.md#in_reply_to_id)*

*Defined in [client/params.ts:227](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L227)*

local ID of the status you want to reply to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[language](_client_params_.createstatusparamsbase.md#language)*

*Defined in [client/params.ts:237](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L237)*

ISO 639-2 language code of the toot, to skip automatic detection

___
<a id="media_ids"></a>

### `<Optional>` media_ids

**● media_ids**: *`string`[] \| `null`*

*Defined in [client/params.ts:244](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L244)*

Array of media IDs to attach to the status (maximum 4)

___
<a id="poll"></a>

### `<Optional>` poll

**● poll**: *[CreateStatusPollParam](_client_params_.createstatuspollparam.md) \| `null`*

*Defined in [client/params.ts:246](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L246)*

Nested parameters to attach a poll to the status

___
<a id="scheduled_at"></a>

### `<Optional>` scheduled_at

**● scheduled_at**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[scheduled_at](_client_params_.createstatusparamsbase.md#scheduled_at)*

*Defined in [client/params.ts:235](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L235)*

Timestamp string to schedule posting of status (ISO 8601)

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[sensitive](_client_params_.createstatusparamsbase.md#sensitive)*

*Defined in [client/params.ts:229](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L229)*

Set this to mark the media of the status as NSFW

___
<a id="spoiler_text"></a>

### `<Optional>` spoiler_text

**● spoiler_text**: *`string` \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[spoiler_text](_client_params_.createstatusparamsbase.md#spoiler_text)*

*Defined in [client/params.ts:231](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L231)*

Text to be shown as a warning before the actual content

___
<a id="status"></a>

###  status

**● status**: *`string`*

*Defined in [client/params.ts:242](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L242)*

Text of the status

___
<a id="visibility"></a>

### `<Optional>` visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Inherited from [CreateStatusParamsBase](_client_params_.createstatusparamsbase.md).[visibility](_client_params_.createstatusparamsbase.md#visibility)*

*Defined in [client/params.ts:233](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L233)*

Either "direct", "private", "unlisted" or "public"

___

