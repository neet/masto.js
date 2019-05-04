[masto](../README.md) > ["entities/status"](../modules/_entities_status_.md) > [Status](../interfaces/_entities_status_.status.md)

# Interface: Status

## Hierarchy

**Status**

## Index

### Properties

* [account](_entities_status_.status.md#account)
* [application](_entities_status_.status.md#application)
* [card](_entities_status_.status.md#card)
* [content](_entities_status_.status.md#content)
* [created_at](_entities_status_.status.md#created_at)
* [emojis](_entities_status_.status.md#emojis)
* [favourited](_entities_status_.status.md#favourited)
* [favourites_count](_entities_status_.status.md#favourites_count)
* [id](_entities_status_.status.md#id)
* [in_reply_to_account_id](_entities_status_.status.md#in_reply_to_account_id)
* [in_reply_to_id](_entities_status_.status.md#in_reply_to_id)
* [language](_entities_status_.status.md#language)
* [media_attachments](_entities_status_.status.md#media_attachments)
* [mentions](_entities_status_.status.md#mentions)
* [muted](_entities_status_.status.md#muted)
* [pinned](_entities_status_.status.md#pinned)
* [reblog](_entities_status_.status.md#reblog)
* [reblogged](_entities_status_.status.md#reblogged)
* [reblogs_count](_entities_status_.status.md#reblogs_count)
* [replies_count](_entities_status_.status.md#replies_count)
* [sensitive](_entities_status_.status.md#sensitive)
* [spoiler_text](_entities_status_.status.md#spoiler_text)
* [tags](_entities_status_.status.md#tags)
* [uri](_entities_status_.status.md#uri)
* [url](_entities_status_.status.md#url)
* [visibility](_entities_status_.status.md#visibility)

---

## Properties

<a id="account"></a>

###  account

**● account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/status.ts:19](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L19)*

The Account which posted the status

___
<a id="application"></a>

### `<Optional>` application

**● application**: *[Application](_entities_application_.application.md) \| `null`*

*Defined in [entities/status.ts:59](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L59)*

Application from which the status was posted

___
<a id="card"></a>

### `<Optional>` card

**● card**: *[Card](_entities_card_.card.md)*

*Defined in [entities/status.ts:27](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L27)*

Embeded card

___
<a id="content"></a>

###  content

**● content**: *`string`*

*Defined in [entities/status.ts:29](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L29)*

Body of the status; this will contain HTML (remote HTML already sanitized)

___
<a id="created_at"></a>

###  created_at

**● created_at**: *`string`*

*Defined in [entities/status.ts:31](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L31)*

The time the status was created

___
<a id="emojis"></a>

###  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/status.ts:33](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L33)*

An array of Emoji

___
<a id="favourited"></a>

### `<Optional>` favourited

**● favourited**: *`boolean` \| `null`*

*Defined in [entities/status.ts:43](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L43)*

Whether the authenticated user has favourited the status

___
<a id="favourites_count"></a>

###  favourites_count

**● favourites_count**: *`number`*

*Defined in [entities/status.ts:39](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L39)*

The number of favourites for the status

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [entities/status.ts:13](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L13)*

The ID of the status

___
<a id="in_reply_to_account_id"></a>

### `<Optional>` in_reply_to_account_id

**● in_reply_to_account_id**: *`string` \| `null`*

*Defined in [entities/status.ts:23](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L23)*

`null` or the ID of the account it replies to

___
<a id="in_reply_to_id"></a>

### `<Optional>` in_reply_to_id

**● in_reply_to_id**: *`string` \| `null`*

*Defined in [entities/status.ts:21](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L21)*

`null` or the ID of the status it replies to

___
<a id="language"></a>

### `<Optional>` language

**● language**: *`string` \| `null`*

*Defined in [entities/status.ts:61](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L61)*

The detected language for the status, if detected

___
<a id="media_attachments"></a>

###  media_attachments

**● media_attachments**: *[Attachment](_entities_attachment_.attachment.md)[]*

*Defined in [entities/status.ts:53](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L53)*

An array of Attachments

___
<a id="mentions"></a>

###  mentions

**● mentions**: *[Mention](_entities_mention_.mention.md)[]*

*Defined in [entities/status.ts:55](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L55)*

An array of Mentions

___
<a id="muted"></a>

### `<Optional>` muted

**● muted**: *`boolean` \| `null`*

*Defined in [entities/status.ts:45](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L45)*

Whether the authenticated user has muted the conversation this status from

___
<a id="pinned"></a>

### `<Optional>` pinned

**● pinned**: *`boolean` \| `null`*

*Defined in [entities/status.ts:63](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L63)*

Whether this is the pinned status for the account that posted it

___
<a id="reblog"></a>

### `<Optional>` reblog

**● reblog**: *[Status](_entities_status_.status.md) \| `null`*

*Defined in [entities/status.ts:25](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L25)*

`null` or the reblogged Status

___
<a id="reblogged"></a>

### `<Optional>` reblogged

**● reblogged**: *`boolean` \| `null`*

*Defined in [entities/status.ts:41](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L41)*

Whether the authenticated user has reblogged the status

___
<a id="reblogs_count"></a>

###  reblogs_count

**● reblogs_count**: *`number`*

*Defined in [entities/status.ts:37](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L37)*

The number of reblogs for the status

___
<a id="replies_count"></a>

###  replies_count

**● replies_count**: *`number`*

*Defined in [entities/status.ts:35](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L35)*

The number of replies for the status

___
<a id="sensitive"></a>

###  sensitive

**● sensitive**: *`boolean`*

*Defined in [entities/status.ts:47](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L47)*

Whether media attachments should be hidden by default

___
<a id="spoiler_text"></a>

###  spoiler_text

**● spoiler_text**: *`string`*

*Defined in [entities/status.ts:49](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L49)*

If not empty, warning text that should be displayed before the actual content

___
<a id="tags"></a>

###  tags

**● tags**: *[Tag](_entities_tag_.tag.md)[]*

*Defined in [entities/status.ts:57](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L57)*

An array of Tags

___
<a id="uri"></a>

###  uri

**● uri**: *`string`*

*Defined in [entities/status.ts:15](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L15)*

A Fediverse-unique resource ID

___
<a id="url"></a>

### `<Optional>` url

**● url**: *`string` \| `null`*

*Defined in [entities/status.ts:17](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L17)*

URL to the status page (can be remote)

___
<a id="visibility"></a>

###  visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility)*

*Defined in [entities/status.ts:51](https://github.com/neet/masto.js/blob/c1501e9/src/entities/status.ts#L51)*

One of: `public`, `unlisted`, `private`, `direct`

___

