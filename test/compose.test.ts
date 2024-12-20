import { describe, expect, it, vi } from 'vitest'
import { compose } from '../src/index.js'
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

    const fn = compose(
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

    await fn({})

    expect(spyA).toHaveBeenCalled()
    expect(spyB).toHaveBeenCalled()
  })

  it('runs middleware in order', () => {
    const spyA = vi.fn()
    const spyB = vi.fn()

    const fn = compose(
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

    return fn({})
  })

  it('can change order by calling next early', async () => {
    const spyA = vi.fn()
    const spyB = vi.fn()

    const fn = compose(
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

    await fn({})

    expect(spyA).toHaveBeenCalled()
  })

  it("overrides the state with whatever's passed to next()", () =>
    compose(
      (state, next) => {
        expect(state).toBe('start')
        return next({ foo: 'bar' })
      },
      (state, next) => {
        expect(state).toEqual({ foo: 'bar' })
        return next({ mung: 'face' })
      },
      (state, next) => {
        expect(state).toEqual({ mung: 'face' })
        return next(state)
      },
    )('start'))
})
