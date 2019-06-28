> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [UploadMediaAttachmentParams](_clients_masto_params_.uploadmediaattachmentparams.md) /

# Interface: UploadMediaAttachmentParams

## Hierarchy

* **UploadMediaAttachmentParams**

### Index

#### Properties

* [description](_clients_masto_params_.uploadmediaattachmentparams.md#optional-description)
* [file](_clients_masto_params_.uploadmediaattachmentparams.md#file)
* [focus](_clients_masto_params_.uploadmediaattachmentparams.md#optional-focus)

## Properties

### `Optional` description

● **description**? : *string | null*

*Defined in [clients/masto/params.ts:119](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L119)*

A plain-text description of the media, for accessibility (max 420 chars)

___

###  file

● **file**: *any*

*Defined in [clients/masto/params.ts:117](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L117)*

Media to be uploaded (encoded using `multipart/form-data`)

___

### `Optional` focus

● **focus**? : *string | null*

*Defined in [clients/masto/params.ts:121](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L121)*

Focal point: Two floating points, comma-delimited

___