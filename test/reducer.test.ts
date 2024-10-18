import { describe, expect, it } from 'vitest'
import compose from '../src/reducer.js'
import testComposer from './__helpers__/compose.js'

interface State {
  bar?: string
  foo?: string
  mung?: string
}

describe('reducer', () => {
  testComposer(compose)

  it("overrides the state with whatever's passed to next()", () => {
    return compose<State>([
      (_, next) => next({ foo: 'bar' }),
      (state, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toEqual({ mung: 'face' })
        return next()
      },
    ])({})
  })

  it('throws an error when you attempt to mutate the state', () => {
    return expect(
      compose<State>([
        (state, next) => {
          state.foo = 'bar'
          return next(state)
        },
      ])({ bar: 'foo' }),
    ).rejects.toThrow(
      'State should be immutable. Either pass a new object or nothing to next().',
    )
  })
})
