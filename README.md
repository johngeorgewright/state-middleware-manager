# state-middleware-manager

> State accumulating and reducing middleware manager

[![NPM Version](https://img.shields.io/npm/v/state-middleware-manager.svg?style=flat-square)](https://www.npmjs.com/package/state-middleware-manager)
[![License](https://img.shields.io/npm/l/state-middleware-manager.svg?style=flat-square)](https://github.com/johngeorgewright/state-middleware-manager/blob/master/LICENSE)

## Installation

```
npm install state-middleware-manager
```

## Example

```javascript
import { compose, Middleware } from 'state-middleware-manager'

const middleware1: Middleware<{}, { foo: string }> = (state, next) => {
  expect(state).toEqual({})
  return next({ foo: 'bar' })
}

const middleware2: Middleware<{ foo: string }, { mung: string }> = (state, next) => {
  expect(state).toEqual({ foo: 'bar ' })
  return next({ mung: 'face' })
}

compose({}, middleware1, middleware2).then((state) => {
  expect(state).toEqual({
    mung: 'face',
  })
})
```
