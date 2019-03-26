[@lagunehq/core](../README.md) > ["client/params"](../modules/_client_params_.md) > [UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md)

# Interface: UpdateCredentialsParams

## Hierarchy

**UpdateCredentialsParams**

## Index

### Properties

* [avatar](_client_params_.updatecredentialsparams.md#avatar)
* [display_name](_client_params_.updatecredentialsparams.md#display_name)
* [fields_attributes](_client_params_.updatecredentialsparams.md#fields_attributes)
* [header](_client_params_.updatecredentialsparams.md#header)
* [locked](_client_params_.updatecredentialsparams.md#locked)
* [note](_client_params_.updatecredentialsparams.md#note)
* [source](_client_params_.updatecredentialsparams.md#source)

---

## Properties

<a id="avatar"></a>

### `<Optional>` avatar

**● avatar**: *`any` \| `null`*

*Defined in [client/params.ts:32](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L32)*

Avatar encoded using `multipart/form-data`

___
<a id="display_name"></a>

### `<Optional>` display_name

**● display_name**: *`string` \| `null`*

*Defined in [client/params.ts:28](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L28)*

Display name

___
<a id="fields_attributes"></a>

### `<Optional>` fields_attributes

**● fields_attributes**: *[[AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| `null`*

*Defined in [client/params.ts:44](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L44)*

Profile metadata (max. 4)

___
<a id="header"></a>

### `<Optional>` header

**● header**: *`any` \| `null`*

*Defined in [client/params.ts:34](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L34)*

Header image encoded using `multipart/form-data`

___
<a id="locked"></a>

### `<Optional>` locked

**● locked**: *`boolean` \| `null`*

*Defined in [client/params.ts:36](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L36)*

Enable follow requests

___
<a id="note"></a>

### `<Optional>` note

**● note**: *`string` \| `null`*

*Defined in [client/params.ts:30](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L30)*

Biography

___
<a id="source"></a>

### `<Optional>` source

**● source**: *`Pick`<[AccountSource](_entities_account_.accountsource.md), "privacy" \| "sensitive" \| "language"> \| `null`*

*Defined in [client/params.ts:42](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L42)*

privacy: Default post privacy preference sensitive: Whether to mark statuses as sensitive by default language: Override language on statuses by default (ISO6391)

___

