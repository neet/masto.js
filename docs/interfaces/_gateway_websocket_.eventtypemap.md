> ## [masto](../README.md)

[Globals](../globals.md) / ["gateway/websocket"](../modules/_gateway_websocket_.md) / [EventTypeMap](_gateway_websocket_.eventtypemap.md) /

# Interface: EventTypeMap

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

● **conversation**: *[Conversation](_entities_conversation_.conversation.md)*

*Defined in [gateway/websocket.ts:24](https://github.com/neet/masto.js/blob/3506035/src/gateway/websocket.ts#L24)*

Status added to a conversation

___

###  delete

● **delete**: *string*

*Defined in [gateway/websocket.ts:18](https://github.com/neet/masto.js/blob/3506035/src/gateway/websocket.ts#L18)*

Status deleted

___

###  filters_changed

● **filters_changed**: *undefined*

*Defined in [gateway/websocket.ts:22](https://github.com/neet/masto.js/blob/3506035/src/gateway/websocket.ts#L22)*

User's filter changed

___

###  notification

● **notification**: *[Notification](_entities_notification_.notification.md)*

*Defined in [gateway/websocket.ts:20](https://github.com/neet/masto.js/blob/3506035/src/gateway/websocket.ts#L20)*

User's notification

___

###  update

● **update**: *[Status](_entities_status_.status.md)*

*Defined in [gateway/websocket.ts:16](https://github.com/neet/masto.js/blob/3506035/src/gateway/websocket.ts#L16)*

Status posted

___