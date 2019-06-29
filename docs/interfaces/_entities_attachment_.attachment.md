> **[masto](../README.md)**

[Globals](../globals.md) / ["entities/attachment"](../modules/_entities_attachment_.md) / [Attachment](_entities_attachment_.attachment.md) /

# Interface: Attachment

## Hierarchy

* **Attachment**

### Index

#### Properties

* [blurhash](_entities_attachment_.attachment.md#optional-blurhash)
* [description](_entities_attachment_.attachment.md#optional-description)
* [id](_entities_attachment_.attachment.md#id)
* [meta](_entities_attachment_.attachment.md#optional-meta)
* [preview_url](_entities_attachment_.attachment.md#preview_url)
* [remote_url](_entities_attachment_.attachment.md#optional-remote_url)
* [text_url](_entities_attachment_.attachment.md#optional-text_url)
* [type](_entities_attachment_.attachment.md#type)
* [url](_entities_attachment_.attachment.md#url)

## Properties

### `Optional` blurhash

• **blurhash**? : *string | null*

*Defined in [entities/attachment.ts:19](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L19)*

Hash value to decode blurred media

___

### `Optional` description

• **description**? : *string | null*

*Defined in [entities/attachment.ts:17](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L17)*

A description of the image for the visually impaired (maximum 420 characters), or null if none provided

___

###  id

• **id**: *string*

*Defined in [entities/attachment.ts:3](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L3)*

ID of the attachment

___

### `Optional` meta

• **meta**? : *[AttachmentMeta](_entities_attachment_.attachmentmeta.md) | null*

*Defined in [entities/attachment.ts:15](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L15)*

See attachment metadata below

___

###  preview_url

• **preview_url**: *string*

*Defined in [entities/attachment.ts:11](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L11)*

URL of the preview image

___

### `Optional` remote_url

• **remote_url**? : *string | null*

*Defined in [entities/attachment.ts:9](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L9)*

For remote images, the remote URL of the original image

___

### `Optional` text_url

• **text_url**? : *string | null*

*Defined in [entities/attachment.ts:13](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L13)*

Shorter URL for the image, for insertion into text (only present on local images)

___

###  type

• **type**: *[AttachmentType](../modules/_entities_attachment_.md#attachmenttype)*

*Defined in [entities/attachment.ts:5](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L5)*

One of: "image", "video", "gifv", "unknown"

___

###  url

• **url**: *string*

*Defined in [entities/attachment.ts:7](https://github.com/neet/masto.js/blob/aaa534e/src/entities/attachment.ts#L7)*

URL of the locally hosted version of the image