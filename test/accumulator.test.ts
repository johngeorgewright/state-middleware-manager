import { describe, expect, it } from 'vitest'
import compose from '../src/accumulator.js'
import testCompose from './__helpers__/compose.js'

interface State {
  foo?: string
  mung?: string
}

describe('accumulator', () => {
  testCompose(compose)

  it('passes a new state to each middleware', () => {
    let prevState: State

    return compose([
      (state, next) => {
        expect(state).toBeInstanceOf(Object)
        prevState = state
        return next()
      },
      (state, next) => {
        expect(state).not.toBe(prevState)
        return next()
      },
    ])()
  })

  it('accumlates state between middleware', () => {
    return compose([
      (_, next) =>
        next({
          foo: 'bar',
        }),
      (state, next) => {
        expect(state).toHaveProperty('foo', 'bar')
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toHaveProperty('foo', 'bar')
        expect(state).toHaveProperty('mung', 'face')
        return next()
      },
    ])()
  })

  it('resolves the final state', async () => {
    const state = await compose([(_, next) => next({ foo: 'bar' })])()

    expect(state).toEqual({ foo: 'bar' })
  })
})
