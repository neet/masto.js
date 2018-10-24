

# Hierarchy

**Status**

# Properties

<a id="account"></a>

##  account

**● account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/Status.ts:19](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L19)*

The Account which posted the status

___
<a id="application"></a>

## `<Optional>` application

**● application**: * [Application](_entities_application_.application.md) &#124; `null`
*

*Defined in [entities/Status.ts:76](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L76)*

Application from which the status was posted

___
<a id="content"></a>

##  content

**● content**: *`string`*

*Defined in [entities/Status.ts:31](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L31)*

Body of the status; this will contain HTML (remote HTML already sanitized)

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Defined in [entities/Status.ts:34](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L34)*

The time the status was created

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/Status.ts:37](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L37)*

An array of Emoji

___
<a id="favourited"></a>

## `<Optional>` favourited

**● favourited**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:52](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L52)*

Whether the authenticated user has favourited the status

___
<a id="favourites_count"></a>

##  favourites_count

**● favourites_count**: *`number`*

*Defined in [entities/Status.ts:46](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L46)*

The number of favourites for the status

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Defined in [entities/Status.ts:10](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L10)*

The ID of the status

___
<a id="in_reply_to_account_id"></a>

## `<Optional>` in_reply_to_account_id

**● in_reply_to_account_id**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:25](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L25)*

`null` or the ID of the account it replies to

___
<a id="in_reply_to_id"></a>

## `<Optional>` in_reply_to_id

**● in_reply_to_id**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:22](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L22)*

`null` or the ID of the status it replies to

___
<a id="language"></a>

## `<Optional>` language

**● language**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:79](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L79)*

The detected language for the status, if detected

___
<a id="media_attachments"></a>

##  media_attachments

**● media_attachments**: *[Attachment](_entities_attachment_.attachment.md)[]*

*Defined in [entities/Status.ts:67](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L67)*

An array of Attachments

___
<a id="mentions"></a>

##  mentions

**● mentions**: *[Mention](_entities_mention_.mention.md)[]*

*Defined in [entities/Status.ts:70](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L70)*

An array of Mentions

___
<a id="muted"></a>

## `<Optional>` muted

**● muted**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:55](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L55)*

Whether the authenticated user has muted the conversation this status from

___
<a id="pinned"></a>

## `<Optional>` pinned

**● pinned**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:82](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L82)*

Whether this is the pinned status for the account that posted it

___
<a id="reblog"></a>

## `<Optional>` reblog

**● reblog**: * [Status](_entities_status_.status.md) &#124; `null`
*

*Defined in [entities/Status.ts:28](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L28)*

`null` or the reblogged Status

___
<a id="reblogged"></a>

## `<Optional>` reblogged

**● reblogged**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:49](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L49)*

Whether the authenticated user has reblogged the status

___
<a id="reblogs_count"></a>

##  reblogs_count

**● reblogs_count**: *`number`*

*Defined in [entities/Status.ts:43](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L43)*

The number of reblogs for the status

___
<a id="replies_count"></a>

##  replies_count

**● replies_count**: *`number`*

*Defined in [entities/Status.ts:40](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L40)*

The number of replies for the status

___
<a id="sensitive"></a>

##  sensitive

**● sensitive**: *`boolean`*

*Defined in [entities/Status.ts:58](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L58)*

Whether media attachments should be hidden by default

___
<a id="spoiler_text"></a>

##  spoiler_text

**● spoiler_text**: *`string`*

*Defined in [entities/Status.ts:61](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L61)*

If not empty, warning text that should be displayed before the actual content

___
<a id="tags"></a>

##  tags

**● tags**: *[Tag](_entities_tag_.tag.md)[]*

*Defined in [entities/Status.ts:73](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L73)*

An array of Tags

___
<a id="uri"></a>

##  uri

**● uri**: *`string`*

*Defined in [entities/Status.ts:13](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L13)*

A Fediverse-unique resource ID

___
<a id="url"></a>

## `<Optional>` url

**● url**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:16](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L16)*

URL to the status page (can be remote)

___
<a id="visibility"></a>

##  visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility)*

*Defined in [entities/Status.ts:64](https://github.com/lagunehq/core/blob/ad87ae7/src/entities/Status.ts#L64)*

One of: `public`, `unlisted`, `private`, `direct`

___

