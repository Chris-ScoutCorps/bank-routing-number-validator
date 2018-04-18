## Summary

Validates Bank Routing Numbers

- Checks the first two digits against the allowed ranges
- Run the checksum algorithm on the last digit

See https://en.wikipedia.org/wiki/Routing_transit_number

## Install

```bash
$ npm install bank-routing-number-validator
```

## Usage

```js
brnv = require('bank-routing-number-validator')

brnv.ABARoutingNumberIsValid('abcdabcde') //false
brnv.ABARoutingNumberIsValid('1234567890') //false
brnv.ABARoutingNumberIsValid('021000021') //true

brnv.ABARoutingNumberIsValid(021000021) //false - octal literals forbid in strict mode
brnv.ABARoutingNumberIsValid(21000021) //true - but it's fine if you really want to use ints

```
