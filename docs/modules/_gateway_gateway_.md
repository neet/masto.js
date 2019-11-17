[masto](../README.md) › [Globals](../globals.md) › ["gateway/gateway"](_gateway_gateway_.md)

# External module: "gateway/gateway"

## Index

### Classes

* [Gateway](../classes/_gateway_gateway_.gateway.md)

### Interfaces

* [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md)

### Type aliases

* [LoginParams](_gateway_gateway_.md#loginparams)
* [PaginateNext](_gateway_gateway_.md#paginatenext)

## Type aliases

###  LoginParams

Ƭ **LoginParams**: *Omit‹[GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md), "version" | "streamingApiUrl"›*

*Defined in [src/gateway/gateway.ts:27](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L27)*

Params for login. `version` and `streamingApiUrl` will be set automatically so not needed

___

###  PaginateNext

Ƭ **PaginateNext**: *object | object*

*Defined in [src/gateway/gateway.ts:36](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/gateway.ts#L36)*

Argument of `Gateway.paginate().next()`.
When reset = true specified, other params won't be accepted
