# op-expression [![NPM version](https://img.shields.io/npm/v/op-expression.svg?style=flat)](https://www.npmjs.com/package/op-expression) [![NPM monthly downloads](https://img.shields.io/npm/dm/op-expression.svg?style=flat)](https://npmjs.org/package/op-expression) [![NPM total downloads](https://img.shields.io/npm/dt/op-expression.svg?style=flat)](https://npmjs.org/package/op-expression) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/op-expression.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/op-expression)

> Using `and` and `or` operators in JavaScript expressions.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install --save op-expression
```

Install with [yarn](https://yarnpkg.com):

```sh
yarn add op-expression
```

## Usage

```ts
import { and, or } from "op-expression";

const isTrue = true;
const isFalse = false;

const result = and(isTrue, isFalse);
console.log(result); // false

const result = or(isTrue, isFalse);
console.log(result); // true

const result = or(isTrue, isFalse, isFalse, isFalse);
console.log(result); // true

const result = and(isTrue, isFalse, isFalse, isFalse);
console.log(result); // false

const result = and(isTrue, isTrue, or(isFalse, isTrue));
console.log(result); // true
```

## About

### Contributors

| **Commits** | **Contributor**                               |
| ----------- | --------------------------------------------- |
| 1           | [hoangnh2912](https://github.com/hoangnh2912) |

### Author

**HoangNH**

- [LinkedIn Profile](https://linkedin.com/in/hoang-nguyen-hai-a04aa6173/)
- [GitHub Profile](https://github.com/hoangnh2912)

### License

Copyright © 2023, [Nguyen Hai Hoang](https://github.com/hoangnh2912).
Released under the [MIT License](LICENSE).
