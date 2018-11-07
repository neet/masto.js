

# Hierarchy

**Status**

# Properties

<a id="account"></a>

##  account

**● account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/Status.ts:20](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L20)*

The Account which posted the status

___
<a id="application"></a>

## `<Optional>` application

**● application**: * [Application](_entities_application_.application.md) &#124; `null`
*

*Defined in [entities/Status.ts:80](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L80)*

Application from which the status was posted

___
<a id="card"></a>

## `<Optional>` card

**● card**: *[Card](_entities_card_.card.md)*

*Defined in [entities/Status.ts:32](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L32)*

Embeded card

___
<a id="content"></a>

##  content

**● content**: *`string`*

*Defined in [entities/Status.ts:35](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L35)*

Body of the status; this will contain HTML (remote HTML already sanitized)

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Defined in [entities/Status.ts:38](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L38)*

The time the status was created

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/Status.ts:41](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L41)*

An array of Emoji

___
<a id="favourited"></a>

## `<Optional>` favourited

**● favourited**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:56](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L56)*

Whether the authenticated user has favourited the status

___
<a id="favourites_count"></a>

##  favourites_count

**● favourites_count**: *`number`*

*Defined in [entities/Status.ts:50](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L50)*

The number of favourites for the status

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Defined in [entities/Status.ts:11](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L11)*

The ID of the status

___
<a id="in_reply_to_account_id"></a>

## `<Optional>` in_reply_to_account_id

**● in_reply_to_account_id**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:26](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L26)*

`null` or the ID of the account it replies to

___
<a id="in_reply_to_id"></a>

## `<Optional>` in_reply_to_id

**● in_reply_to_id**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:23](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L23)*

`null` or the ID of the status it replies to

___
<a id="language"></a>

## `<Optional>` language

**● language**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:83](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L83)*

The detected language for the status, if detected

___
<a id="media_attachments"></a>

##  media_attachments

**● media_attachments**: *[Attachment](_entities_attachment_.attachment.md)[]*

*Defined in [entities/Status.ts:71](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L71)*

An array of Attachments

___
<a id="mentions"></a>

##  mentions

**● mentions**: *[Mention](_entities_mention_.mention.md)[]*

*Defined in [entities/Status.ts:74](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L74)*

An array of Mentions

___
<a id="muted"></a>

## `<Optional>` muted

**● muted**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:59](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L59)*

Whether the authenticated user has muted the conversation this status from

___
<a id="pinned"></a>

## `<Optional>` pinned

**● pinned**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:86](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L86)*

Whether this is the pinned status for the account that posted it

___
<a id="reblog"></a>

## `<Optional>` reblog

**● reblog**: * [Status](_entities_status_.status.md) &#124; `null`
*

*Defined in [entities/Status.ts:29](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L29)*

`null` or the reblogged Status

___
<a id="reblogged"></a>

## `<Optional>` reblogged

**● reblogged**: * `boolean` &#124; `null`
*

*Defined in [entities/Status.ts:53](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L53)*

Whether the authenticated user has reblogged the status

___
<a id="reblogs_count"></a>

##  reblogs_count

**● reblogs_count**: *`number`*

*Defined in [entities/Status.ts:47](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L47)*

The number of reblogs for the status

___
<a id="replies_count"></a>

##  replies_count

**● replies_count**: *`number`*

*Defined in [entities/Status.ts:44](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L44)*

The number of replies for the status

___
<a id="sensitive"></a>

##  sensitive

**● sensitive**: *`boolean`*

*Defined in [entities/Status.ts:62](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L62)*

Whether media attachments should be hidden by default

___
<a id="spoiler_text"></a>

##  spoiler_text

**● spoiler_text**: *`string`*

*Defined in [entities/Status.ts:65](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L65)*

If not empty, warning text that should be displayed before the actual content

___
<a id="tags"></a>

##  tags

**● tags**: *[Tag](_entities_tag_.tag.md)[]*

*Defined in [entities/Status.ts:77](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L77)*

An array of Tags

___
<a id="uri"></a>

##  uri

**● uri**: *`string`*

*Defined in [entities/Status.ts:14](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L14)*

A Fediverse-unique resource ID

___
<a id="url"></a>

## `<Optional>` url

**● url**: * `string` &#124; `null`
*

*Defined in [entities/Status.ts:17](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L17)*

URL to the status page (can be remote)

___
<a id="visibility"></a>

##  visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility)*

*Defined in [entities/Status.ts:68](https://github.com/lagunehq/core/blob/e57dc9c/src/entities/Status.ts#L68)*

One of: `public`, `unlisted`, `private`, `direct`

___

