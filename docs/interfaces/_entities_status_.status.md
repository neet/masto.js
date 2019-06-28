> ## [masto](../README.md)

[Globals](../globals.md) / ["entities/status"](../modules/_entities_status_.md) / [Status](_entities_status_.status.md) /

# Interface: Status

## Hierarchy

* **Status**

### Index

#### Properties

* [account](_entities_status_.status.md#account)
* [application](_entities_status_.status.md#optional-application)
* [card](_entities_status_.status.md#optional-card)
* [content](_entities_status_.status.md#content)
* [created_at](_entities_status_.status.md#created_at)
* [emojis](_entities_status_.status.md#emojis)
* [favourited](_entities_status_.status.md#optional-favourited)
* [favourites_count](_entities_status_.status.md#favourites_count)
* [id](_entities_status_.status.md#id)
* [in_reply_to_account_id](_entities_status_.status.md#optional-in_reply_to_account_id)
* [in_reply_to_id](_entities_status_.status.md#optional-in_reply_to_id)
* [language](_entities_status_.status.md#optional-language)
* [media_attachments](_entities_status_.status.md#media_attachments)
* [mentions](_entities_status_.status.md#mentions)
* [muted](_entities_status_.status.md#optional-muted)
* [pinned](_entities_status_.status.md#optional-pinned)
* [reblog](_entities_status_.status.md#optional-reblog)
* [reblogged](_entities_status_.status.md#optional-reblogged)
* [reblogs_count](_entities_status_.status.md#reblogs_count)
* [replies_count](_entities_status_.status.md#replies_count)
* [sensitive](_entities_status_.status.md#sensitive)
* [spoiler_text](_entities_status_.status.md#spoiler_text)
* [tags](_entities_status_.status.md#tags)
* [uri](_entities_status_.status.md#uri)
* [url](_entities_status_.status.md#optional-url)
* [visibility](_entities_status_.status.md#visibility)

## Properties

###  account

● **account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/status.ts:19](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L19)*

The Account which posted the status

___

### `Optional` application

● **application**? : *[Application](_entities_application_.application.md) | null*

*Defined in [entities/status.ts:59](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L59)*

Application from which the status was posted

___

### `Optional` card

● **card**? : *[Card](_entities_card_.card.md)*

*Defined in [entities/status.ts:27](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L27)*

Embeded card

___

###  content

● **content**: *string*

*Defined in [entities/status.ts:29](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L29)*

Body of the status; this will contain HTML (remote HTML already sanitized)

___

###  created_at

● **created_at**: *string*

*Defined in [entities/status.ts:31](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L31)*

The time the status was created

___

###  emojis

● **emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/status.ts:33](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L33)*

An array of Emoji

___

### `Optional` favourited

● **favourited**? : *boolean | null*

*Defined in [entities/status.ts:43](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L43)*

Whether the authenticated user has favourited the status

___

###  favourites_count

● **favourites_count**: *number*

*Defined in [entities/status.ts:39](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L39)*

The number of favourites for the status

___

###  id

● **id**: *string*

*Defined in [entities/status.ts:13](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L13)*

The ID of the status

___

### `Optional` in_reply_to_account_id

● **in_reply_to_account_id**? : *string | null*

*Defined in [entities/status.ts:23](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L23)*

`null` or the ID of the account it replies to

___

### `Optional` in_reply_to_id

● **in_reply_to_id**? : *string | null*

*Defined in [entities/status.ts:21](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L21)*

`null` or the ID of the status it replies to

___

### `Optional` language

● **language**? : *string | null*

*Defined in [entities/status.ts:61](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L61)*

The detected language for the status, if detected

___

###  media_attachments

● **media_attachments**: *[Attachment](_entities_attachment_.attachment.md)[]*

*Defined in [entities/status.ts:53](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L53)*

An array of Attachments

___

###  mentions

● **mentions**: *[Mention](_entities_mention_.mention.md)[]*

*Defined in [entities/status.ts:55](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L55)*

An array of Mentions

___

### `Optional` muted

● **muted**? : *boolean | null*

*Defined in [entities/status.ts:45](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L45)*

Whether the authenticated user has muted the conversation this status from

___

### `Optional` pinned

● **pinned**? : *boolean | null*

*Defined in [entities/status.ts:63](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L63)*

Whether this is the pinned status for the account that posted it

___

### `Optional` reblog

● **reblog**? : *[Status](_entities_status_.status.md) | null*

*Defined in [entities/status.ts:25](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L25)*

`null` or the reblogged Status

___

### `Optional` reblogged

● **reblogged**? : *boolean | null*

*Defined in [entities/status.ts:41](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L41)*

Whether the authenticated user has reblogged the status

___

###  reblogs_count

● **reblogs_count**: *number*

*Defined in [entities/status.ts:37](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L37)*

The number of reblogs for the status

___

###  replies_count

● **replies_count**: *number*

*Defined in [entities/status.ts:35](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L35)*

The number of replies for the status

___

###  sensitive

● **sensitive**: *boolean*

*Defined in [entities/status.ts:47](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L47)*

Whether media attachments should be hidden by default

___

###  spoiler_text

● **spoiler_text**: *string*

*Defined in [entities/status.ts:49](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L49)*

If not empty, warning text that should be displayed before the actual content

___

###  tags

● **tags**: *[Tag](_entities_tag_.tag.md)[]*

*Defined in [entities/status.ts:57](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L57)*

An array of Tags

___

###  uri

● **uri**: *string*

*Defined in [entities/status.ts:15](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L15)*

A Fediverse-unique resource ID

___

### `Optional` url

● **url**? : *string | null*

*Defined in [entities/status.ts:17](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L17)*

URL to the status page (can be remote)

___

###  visibility

● **visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility)*

*Defined in [entities/status.ts:51](https://github.com/neet/masto.js/blob/80b1796/src/entities/status.ts#L51)*

One of: `public`, `unlisted`, `private`, `direct`

___