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

*Defined in [client/params.ts:227](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L227)*

local ID of the status you want to reply to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Defined in [client/params.ts:237](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L237)*

ISO 639-2 language code of the toot, to skip automatic detection

___
<a id="scheduled_at"></a>

### `<Optional>` scheduled_at

**● scheduled_at**: *`string` \| `null`*

*Defined in [client/params.ts:235](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L235)*

Timestamp string to schedule posting of status (ISO 8601)

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Defined in [client/params.ts:229](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L229)*

Set this to mark the media of the status as NSFW

___
<a id="spoiler_text"></a>

### `<Optional>` spoiler_text

**● spoiler_text**: *`string` \| `null`*

*Defined in [client/params.ts:231](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L231)*

Text to be shown as a warning before the actual content

___
<a id="visibility"></a>

### `<Optional>` visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Defined in [client/params.ts:233](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L233)*

Either "direct", "private", "unlisted" or "public"

___

