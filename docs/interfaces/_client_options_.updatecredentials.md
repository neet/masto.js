

# Hierarchy

**UpdateCredentials**

# Properties

<a id="avatar"></a>

## `<Optional>` avatar

**● avatar**: * `File` &#124; `null`
*

*Defined in [client/options.ts:29](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L29)*

Avatar encoded using `multipart/form-data`

___
<a id="display_name"></a>

## `<Optional>` display_name

**● display_name**: * `string` &#124; `null`
*

*Defined in [client/options.ts:23](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L23)*

Display name

___
<a id="fields_attributes"></a>

## `<Optional>` fields_attributes

**● fields_attributes**: * [[AccountField](_entities_account_.accountfield.md)] &#124; [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] &#124; [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] &#124; [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] &#124; `null`
*

*Defined in [client/options.ts:45](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L45)*

Profile metadata (max. 4)

___
<a id="header"></a>

## `<Optional>` header

**● header**: * `File` &#124; `null`
*

*Defined in [client/options.ts:32](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L32)*

Header image encoded using `multipart/form-data`

___
<a id="locked"></a>

## `<Optional>` locked

**● locked**: * `boolean` &#124; `null`
*

*Defined in [client/options.ts:35](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L35)*

Enable follow requests

___
<a id="note"></a>

## `<Optional>` note

**● note**: * `string` &#124; `null`
*

*Defined in [client/options.ts:26](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L26)*

Biography

___
<a id="source"></a>

## `<Optional>` source

**● source**: * `Pick`<[AccountCredentialsSource](_entities_account_.accountcredentialssource.md),  "privacy" &#124; "sensitive" &#124; "language"> &#124; `null`
*

*Defined in [client/options.ts:42](https://github.com/lagunehq/core/blob/5d4ee10/src/client/options.ts#L42)*

privacy: Default post privacy preference sensitive: Whether to mark statuses as sensitive by default language: Override language on statuses by default (ISO6391)

___

