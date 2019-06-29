> **[masto](../README.md)**

[Globals](../globals.md) / ["gateway/websocket"](../modules/_gateway_websocket_.md) / [EventTypeMap](_gateway_websocket_.eventtypemap.md) /

# Interface: EventTypeMap

Map of event name and callback argument

## Hierarchy

* **EventTypeMap**

### Index

#### Properties

* [conversation](_gateway_websocket_.eventtypemap.md#conversation)
* [delete](_gateway_websocket_.eventtypemap.md#delete)
* [filters_changed](_gateway_websocket_.eventtypemap.md#filters_changed)
* [notification](_gateway_websocket_.eventtypemap.md#notification)
* [update](_gateway_websocket_.eventtypemap.md#update)

## Properties

###  conversation

• **conversation**: *[[Conversation](_entities_conversation_.conversation.md)]*

*Defined in [gateway/websocket.ts:18](https://github.com/neet/masto.js/blob/aaa534e/src/gateway/websocket.ts#L18)*

Status added to a conversation

___

###  delete

• **delete**: *[string]*

*Defined in [gateway/websocket.ts:12](https://github.com/neet/masto.js/blob/aaa534e/src/gateway/websocket.ts#L12)*

Status deleted

___

###  filters_changed

• **filters_changed**: *[]*

*Defined in [gateway/websocket.ts:16](https://github.com/neet/masto.js/blob/aaa534e/src/gateway/websocket.ts#L16)*

User's filter changed

___

###  notification

• **notification**: *[[Notification](_entities_notification_.notification.md)]*

*Defined in [gateway/websocket.ts:14](https://github.com/neet/masto.js/blob/aaa534e/src/gateway/websocket.ts#L14)*

User's notification

___

###  update

• **update**: *[[Status](_entities_status_.status.md)]*

*Defined in [gateway/websocket.ts:10](https://github.com/neet/masto.js/blob/aaa534e/src/gateway/websocket.ts#L10)*

Status posted