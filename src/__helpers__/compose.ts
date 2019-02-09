import { timeout } from './async'
import reducer from '../reducer'
import accumulator from '../accumulator'
import { Middleware } from '../types'

interface State {
  foo?: any
}

export default function (compose: typeof reducer | typeof accumulator) {
  it('waits until all middleware has resolved', async () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware: Middleware<State>[] = [
      async (_, next) => {
        await timeout(10)
        spyA()
        return next()
      },
      async (_, next) => {
        await timeout(10)
        spyB()
        return next()
      }
    ]

    await compose<State>(middleware)({})

    expect(spyA).toHaveBeenCalled()
    expect(spyB).toHaveBeenCalled()
  })

  it('runs middleware in order', () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware: Middleware<State>[] = [
      async (_, next) => {
        await timeout(0)
        spyA()
        expect(spyB).not.toHaveBeenCalled()
        return next()
      },
      async (_, next) => {
        expect(spyA).toHaveBeenCalled()
        await timeout(10)
        spyB()
        return next()
      }
    ]

    return compose<State>(middleware)({})
  })

  it('can change order by calling next early', async () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware: Middleware<State>[] = [
      async (_, next) => {
        const state = await next()
        expect(spyB).toHaveBeenCalled()
        spyA()
        return state
      },
      (_, next) => {
        expect(spyA).not.toHaveBeenCalled()
        spyB()
        return next()
      }
    ]

    await compose<State>(middleware)({})

    expect(spyA).toHaveBeenCalled()
  })

  it('passes a set of arguments to each middleware', () => {
    const arg1 = {}
    const arg2 = jest.fn()

    const middleware: Middleware<State>[] = [
      (_, next, $1, $2) => {
        expect($1).toBe(arg1)
        expect($2).toBe(arg2)
        return next()
      },
      (_, next, $1, $2) => {
        expect($1).toBe(arg1)
        expect($2).toBe(arg2)
        return next()
      }
    ]

    return compose<State>(middleware, [arg1, arg2])({})
  })

  it('accepts an initial state', () => {
    const middleware: Middleware<State>[] = [
      (state, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next()
      }
    ]

    return compose<State>(middleware)({ foo: 'bar' })
  })
}
