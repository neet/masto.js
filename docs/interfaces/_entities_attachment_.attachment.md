[masto](../README.md) > ["entities/attachment"](../modules/_entities_attachment_.md) > [Attachment](../interfaces/_entities_attachment_.attachment.md)

# Interface: Attachment

## Hierarchy

**Attachment**

## Index

### Properties

* [description](_entities_attachment_.attachment.md#description)
* [id](_entities_attachment_.attachment.md#id)
* [meta](_entities_attachment_.attachment.md#meta)
* [preview_url](_entities_attachment_.attachment.md#preview_url)
* [remote_url](_entities_attachment_.attachment.md#remote_url)
* [text_url](_entities_attachment_.attachment.md#text_url)
* [type](_entities_attachment_.attachment.md#type)
* [url](_entities_attachment_.attachment.md#url)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string` \| `null`*

*Defined in [entities/attachment.ts:17](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L17)*

A description of the image for the visually impaired (maximum 420 characters), or null if none provided

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [entities/attachment.ts:3](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L3)*

ID of the attachment

___
<a id="meta"></a>

### `<Optional>` meta

**● meta**: *[AttachmentMeta](_entities_attachment_.attachmentmeta.md) \| `null`*

*Defined in [entities/attachment.ts:15](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L15)*

See attachment metadata below

___
<a id="preview_url"></a>

###  preview_url

**● preview_url**: *`string`*

*Defined in [entities/attachment.ts:11](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L11)*

URL of the preview image

___
<a id="remote_url"></a>

### `<Optional>` remote_url

**● remote_url**: *`string` \| `null`*

*Defined in [entities/attachment.ts:9](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L9)*

For remote images, the remote URL of the original image

___
<a id="text_url"></a>

### `<Optional>` text_url

**● text_url**: *`string` \| `null`*

*Defined in [entities/attachment.ts:13](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L13)*

Shorter URL for the image, for insertion into text (only present on local images)

___
<a id="type"></a>

###  type

**● type**: *[AttachmentType](../modules/_entities_attachment_.md#attachmenttype)*

*Defined in [entities/attachment.ts:5](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L5)*

One of: "image", "video", "gifv", "unknown"

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Defined in [entities/attachment.ts:7](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/attachment.ts#L7)*

URL of the locally hosted version of the image

___

