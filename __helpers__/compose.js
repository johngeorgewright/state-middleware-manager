/* eslint-env jest */

import { timeout } from './async'

export default function (compose) {
  it('returns a function', () => {
    expect(compose([])).toBeInstanceOf(Function)
  })

  it('waits until all middleware has resolved', async () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware = [
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

    await compose(middleware)()

    expect(spyA).toHaveBeenCalled()
    expect(spyB).toHaveBeenCalled()
  })

  it('runs middleware in order', () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware = [
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

    return compose(middleware)()
  })

  it('can change order by calling next early', async () => {
    const spyA = jest.fn()
    const spyB = jest.fn()

    const middleware = [
      async (_, next) => {
        await next()
        expect(spyB).toHaveBeenCalled()
        spyA()
      },
      (_, next) => {
        expect(spyA).not.toHaveBeenCalled()
        spyB()
        return next()
      }
    ]

    await compose(middleware)()

    expect(spyA).toHaveBeenCalled()
  })

  it('passes a set of arguments to each middleware', () => {
    const arg1 = {}
    const arg2 = jest.fn()

    const middleware = [
      ($1, $2, _, next) => {
        expect($1).toBe(arg1)
        expect($2).toBe(arg2)
        return next()
      },
      ($1, $2, _, next) => {
        expect($1).toBe(arg1)
        expect($2).toBe(arg2)
        return next()
      }
    ]

    return compose(middleware, [arg1, arg2])()
  })

  it('accepts an initial state', () => {
    const middleware = [
      (state, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next()
      }
    ]

    return compose(middleware)({ foo: 'bar' })
  })

  it('accepts a final function', async () => {
    const spy = jest.fn()
    const state = {}

    await compose()(state, spy)

    expect(spy).toHaveBeenCalledWith(state)
  })
}
