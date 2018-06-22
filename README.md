# state-middleware-manager
> State accumulating and reducing middleware manager

## Installation
Currently from github until I can decide on a better name.

```
npm install johngeorgewright/state-middleware-manager
```

## State manager types
There are 2 types of middleware manager available, depending on how you want the
middleware to modify the state.

### 1. Accumulating state manager
State **must be an object** and every new state is **added** to the previous
state.

```javascript
import { accumulator } from 'state-middleware-manager'

const middleware1 = (state, next) =>
  next({ foo: 'bar' })

const middleware2 = (state, next) =>
  next({ mung: 'face' })

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

const middleware1 = (state, next) =>
  next({ ...state, foo: 'bar' })

const middleware2 = (state, next) =>
  next({ ...state, mung: 'face' })

accumulator([ middleware1, middleware2 ])({})
  .then(state => {
    expect(state).toEqual({
      foo: 'bar',
      mung: 'face'
    })
  })
```

This is useful when you're happy that any middleware can completely change the
format of the state. The state can also be any type you fancy.
