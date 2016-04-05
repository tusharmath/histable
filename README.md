# Histable

[![Build Status][travis-svg]][travis]
[![npm][npm-svg]][npm]
[![Coverage Status][coveralls-svg]][coveralls]


[travis-svg]: https://travis-ci.org/tusharmath/histable.svg?branch=master
[travis]: https://travis-ci.org/tusharmath/histable
[npm-svg]: https://img.shields.io/npm/v/histable.svg
[npm]: https://www.npmjs.com/package/histable
[coveralls]: https://coveralls.io/github/tusharmath/histable?branch=develop
[coveralls-svg]: https://coveralls.io/repos/github/tusharmath/histable/badge.svg?branch=develop


A no external dependency module that maintains the history of state changes.

## Installation

```bash
npm i histable --save
```

## Usage

```javascript
const histable = require('histable')
const history = histable.history()
history.push(1)
history.push(2)
history.push(3)
history.undo() // 2
history.undo() // 1
history.undo() // undefined
```

## [API DOCUMENTATION](DOCUMENTATION.md)
