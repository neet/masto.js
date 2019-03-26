[masto](../README.md) > ["entities/results"](../modules/_entities_results_.md) > [Results](../interfaces/_entities_results_.results.md)

# Interface: Results

## Type parameters
#### V :  "v1" \| "v2"
## Hierarchy

**Results**

## Index

### Properties

* [accounts](_entities_results_.results.md#accounts)
* [hashtags](_entities_results_.results.md#hashtags)
* [statuses](_entities_results_.results.md#statuses)

---

## Properties

<a id="accounts"></a>

###  accounts

**● accounts**: *[Account](_entities_account_.account.md)[]*

*Defined in [entities/results.ts:7](https://github.com/lagunehq/core/blob/84abcd4/src/entities/results.ts#L7)*

An array of matched Accounts

___
<a id="hashtags"></a>

###  hashtags

**● hashtags**: *`V extends "v1" ? string[] : V extends "v2" ? Tag[] : never`*

*Defined in [entities/results.ts:11](https://github.com/lagunehq/core/blob/84abcd4/src/entities/results.ts#L11)*

An array of matched hashtags, as strings

___
<a id="statuses"></a>

###  statuses

**● statuses**: *[Status](_entities_status_.status.md)[]*

*Defined in [entities/results.ts:9](https://github.com/lagunehq/core/blob/84abcd4/src/entities/results.ts#L9)*

An array of matched Statuses

___

