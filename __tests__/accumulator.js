/* eslint-env jest */

import compose from '../src/accumulator'
import testCompose from '../__helpers__/compose'

describe('accumulator', () => {
  testCompose(compose)

  it('passes a new state to each middleware', () => {
    let prevState

    const middleware = [
      (state, next) => {
        expect(state).toBeInstanceOf(Object)
        prevState = state
        return next()
      },
      (state, next) => {
        expect(state).not.toBe(prevState)
        return next()
      }
    ]

    return compose(middleware)()
  })

  it('accumlates state between middleware', () => {
    const middleware = [
      (state, next) => next({
        foo: 'bar'
      }),
      (state, next) => {
        expect(state).toHaveProperty('foo', 'bar')
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toHaveProperty('foo', 'bar')
        expect(state).toHaveProperty('mung', 'face')
        return next()
      }
    ]

    return compose(middleware)()
  })

  it('resolves the final state', async () => {
    const middleware = [
      (state, next) => next({ foo: 'bar' })
    ]

    const state = await compose(middleware)()

    expect(state).toEqual({ foo: 'bar' })
  })
})
