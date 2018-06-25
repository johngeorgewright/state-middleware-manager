# state-middleware-manager
> State accumulating and reducing middleware manager

[![Build Status](https://img.shields.io/travis/johngeorgewright/state-middleware-manager/master.svg?style=flat-square)](https://travis-ci.org/johngeorgewright/state-middleware-manager)
[![NPM Version](https://img.shields.io/npm/v/state-middleware-manager.svg?style=flat-square)](https://www.npmjs.com/package/state-middleware-manager)
[![Greenkeeper badge](https://badges.greenkeeper.io/johngeorgewright/state-middleware-manager.svg)](https://greenkeeper.io/)
[![License](https://img.shields.io/npm/l/state-middleware-manager.svg?style=flat-square)](https://github.com/johngeorgewright/state-middleware-manager/blob/master/LICENSE)

## Installation
```
npm install state-middleware-manager
```

## State manager types
There are 2 types of middleware manager available, depending on how you want the
middleware to modify the state.

### 1. Accumulating state manager
State **must be an object** and every new state is **added** to the previous
state.

```javascript
import { accumulator } from 'state-middleware-manager'

const middleware1 = (state, next) => {
  expect(state).toEqual({})
  return next({ foo: 'bar' })
}

const middleware2 = (state, next) => {
  expect(state).toEqual({ foo: 'bar '})
  return next({ mung: 'face' })
}

accumulator([ middleware1, middleware2 ])()
  .then(state => {
    expect(state).toEqual({
      foo: 'bar',
      mung: 'face'
    })
  })
```

This is useful when you don't want the middleware to necessarily delete previous
state, but instead, add to it.

### 2. State reducer manager
A little "redux"y. You pass an initial state, and always a new non-mutated
property to the next function.

```javascript
import { reducer } from 'state-middleware-manager'

const middleware1 = (state, next) => {
  expect(state).toEqual({ start: true })
  return next({ foo: 'bar' })
}

const middleware2 = (state, next) => {
  expect(state).toEqual({ foo: 'bar' })
  return next({ mung: 'face' })
}

accumulator([ middleware1, middleware2 ])({ start: true })
  .then(state => {
    expect(state).toEqual({ mung: 'face' })
  })
```

This is useful when you're happy that any middleware can change the format of
the state. The state can also be any type you fancy.

## Middleware
All middleware should return a promise and the `next()` function will return the
final promise.

### Examples of middleware
```javascript
export async function logger (input, next) {
  console.log('--->', JSON.stringify(input))

  const output = await next()
  console.log('<---', JSON.stringify(output))
}
```

```javascript
import { getUser } from 'my-date-store'

export async function accumulateUser (state, next) {
  if (state.userId) {
    const user = await getUser(state.userId)
    return next({ user })
  } else {
    return next()
  }
}

export async function addUser (state, next) {
  if (state.userId) {
    const user = await getUser(state.userId)
    return next({ ...state, user })
  } else {
    return next()
  }
}
```
