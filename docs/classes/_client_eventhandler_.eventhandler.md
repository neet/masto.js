

# Type parameters
#### EventTypes :   `string` &#124; `symbol`

# Hierarchy

 `EventEmitter`

**↳ EventHandler**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EventHandler**(url: *`string`*, options: *`object`*): [EventHandler](_client_eventhandler_.eventhandler.md)

*Defined in [client/EventHandler.ts:31](https://github.com/lagunehq/core/blob/daa242c/src/client/EventHandler.ts#L31)*

Starting stream with a specified channel

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| options | `object` |

**Returns:** [EventHandler](_client_eventhandler_.eventhandler.md)

___

# Properties

<a id="prefixed"></a>

## `<Static>` prefixed

**● prefixed**: * `string` &#124; `boolean`
*

*Inherited from EventEmitter.prefixed*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:6*

___

# Methods

<a id="addlistener"></a>

##  addListener

▸ **addListener**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="emit"></a>

##  emit

▸ **emit**(event: *`EventTypes`*, ...args: *`Array`<`any`>*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:27*

Calls each of the listeners registered for a given event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Rest` args | `Array`<`any`> |

**Returns:** `boolean`

___
<a id="eventnames"></a>

##  eventNames

▸ **eventNames**(): `Array`<`EventTypes`>

*Inherited from EventEmitter.eventNames*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:12*

Return an array listing the events for which the emitter has registered listeners.

**Returns:** `Array`<`EventTypes`>

___
<a id="listenercount"></a>

##  listenerCount

▸ **listenerCount**(event: *`EventTypes`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:22*

Return the number of listeners listening to a given event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `number`

___
<a id="listeners"></a>

##  listeners

▸ **listeners**(event: *`EventTypes`*): `Array`<`ListenerFn`>

*Inherited from EventEmitter.listeners*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:17*

Return the listeners registered for a given event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |

**Returns:** `Array`<`ListenerFn`>

___
<a id="off"></a>

##  off

▸ **off**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_client_eventhandler_.eventhandler.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.off*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:44*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_client_eventhandler_.eventhandler.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___
<a id="on"></a>

##  on

▸ **on**<`E`,`P`>(event: *`E`*, callback: *`function`*): `this`

*Overrides EventEmitter.on*

*Defined in [client/EventHandler.ts:75](https://github.com/lagunehq/core/blob/daa242c/src/client/EventHandler.ts#L75)*

**Type parameters:**

#### E :  `keyof EventTypes`
#### P 
**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `E` |
| callback | `function` |

**Returns:** `this`

___
<a id="once"></a>

##  once

▸ **once**(event: *`EventTypes`*, fn: *`ListenerFn`*, context?: *`any`*): `this`

*Inherited from EventEmitter.once*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:38*

Add a one-time listener for a given event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |
| fn | `ListenerFn` |
| `Optional` context | `any` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

##  removeAllListeners

▸ **removeAllListeners**(event?: *[EventTypes]()*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:49*

Remove all listeners, or those of the specified event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | [EventTypes]() |

**Returns:** `this`

___
<a id="removelistener"></a>

##  removeListener

▸ **removeListener**(event: *`EventTypes`*, fn?: *[ListenerFn](../interfaces/_client_eventhandler_.eventhandler.eventemitter.listenerfn.md)*, context?: *`any`*, once?: * `undefined` &#124; `false` &#124; `true`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in /Users/nucx/Developments/core/node_modules/eventemitter3/index.d.ts:43*

Remove the listeners of a given event.

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `EventTypes` |
| `Optional` fn | [ListenerFn](../interfaces/_client_eventhandler_.eventhandler.eventemitter.listenerfn.md) |
| `Optional` context | `any` |
| `Optional` once |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `this`

___

