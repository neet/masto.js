[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [UploadMediaAttachmentParams](../interfaces/_client_params_.uploadmediaattachmentparams.md)

# Interface: UploadMediaAttachmentParams

## Hierarchy

**UploadMediaAttachmentParams**

## Index

### Properties

* [description](_client_params_.uploadmediaattachmentparams.md#description)
* [file](_client_params_.uploadmediaattachmentparams.md#file)
* [focus](_client_params_.uploadmediaattachmentparams.md#focus)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string` \| `null`*

*Defined in [client/params.ts:129](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L129)*

A plain-text description of the media, for accessibility (max 420 chars)

___
<a id="file"></a>

###  file

**● file**: *[IsomorphicFormDataValue](../modules/_client_params_.md#isomorphicformdatavalue)*

*Defined in [client/params.ts:127](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L127)*

Media to be uploaded (encoded using `multipart/form-data`)

___
<a id="focus"></a>

### `<Optional>` focus

**● focus**: *`string` \| `null`*

*Defined in [client/params.ts:131](https://github.com/neet/masto.js/blob/3b7330b/src/client/params.ts#L131)*

Focal point: Two floating points, comma-delimited

___

