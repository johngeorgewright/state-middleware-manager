import { describe, expect, it, vi } from 'vitest'
import { compose, Middleware } from '../src/index.js'
import { timeout } from './__helpers__/async.js'

interface State {
  bar?: string
  foo?: string
  mung?: string
}

describe('reducer', () => {
  it('waits until all middleware has resolved', async () => {
    const spyA = vi.fn()
    const spyB = vi.fn()

    await compose(
      {} as State,
      async (state, next) => {
        await timeout(10)
        spyA()
        await next(state)
      },
      async (state, next) => {
        await timeout(10)
        spyB()
        return next(state)
      },
    )

    expect(spyA).toHaveBeenCalled()
    expect(spyB).toHaveBeenCalled()
  })

  it('runs middleware in order', () => {
    const spyA = vi.fn()
    const spyB = vi.fn()

    return compose(
      {} as State,
      async (state, next) => {
        await timeout(0)
        spyA()
        expect(spyB).not.toHaveBeenCalled()
        await next(state)
      },
      async (state, next) => {
        expect(spyA).toHaveBeenCalled()
        await timeout(10)
        spyB()
        await next(state)
      },
    )
  })

  it('can change order by calling next early', async () => {
    const spyA = vi.fn()
    const spyB = vi.fn()

    await compose(
      {} as State,
      async (state, next) => {
        await next(state)
        expect(spyB).toHaveBeenCalled()
        spyA()
      },
      (state, next) => {
        expect(spyA).not.toHaveBeenCalled()
        spyB()
        return next(state)
      },
    )

    expect(spyA).toHaveBeenCalled()
  })

  it("overrides the state with whatever's passed to next()", () => {
    const a: Middleware<unknown, { foo: string }> = (_, next) =>
      next({ foo: 'bar' })

    return compose(
      null,
      a,
      (state: { foo: string }, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toEqual({ mung: 'face' })
        return next(state)
      },
    )
  })
})
