> ## [masto](../README.md)

[Globals](../globals.md) / ["gateway/websocket"](_gateway_websocket_.md) /

# External module: "gateway/websocket"

### Index

#### Classes

* [WebSocketEvents](../classes/_gateway_websocket_.websocketevents.md)

#### Interfaces

* [Event](../interfaces/_gateway_websocket_.event.md)
* [EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)

#### Type aliases

* [EventListener](_gateway_websocket_.md#eventlistener)
* [EventType](_gateway_websocket_.md#eventtype)

## Type aliases

###  EventListener

Ƭ **EventListener**: *function*

*Defined in [gateway/websocket.ts:28](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L28)*

#### Type declaration:

▸ (`payload`: `EventTypeMap[T]`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | `EventTypeMap[T]` |

___

###  EventType

Ƭ **EventType**: *keyof EventTypeMap*

*Defined in [gateway/websocket.ts:27](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L27)*

___