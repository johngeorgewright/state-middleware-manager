/* eslint-env jest */

import compose from '../src/reducer'
import testComposer from '../__helpers__/compose'

describe('reducer', () => {
  testComposer(compose)

  it('overrides the state with whatever\'s passed to next()', () => {
    const middleware = [
      (_, next) =>
        next({ foo: 'bar' }),
      (state, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toEqual({ mung: 'face' })
        return next()
      }
    ]

    return compose(middleware)()
  })

  it('throws an error when you attempt to mutate the state', () => {
    const middleware = [
      (state, next) => {
        state.foo = 'bar'
        return next(state)
      }
    ]

    return expect(compose(middleware)({ bar: 'foo' })).rejects.toThrow(
      'State should be immutable. Either pass a new object or nothing to next().'
    )
  })
})
