import { Middleware, Next } from './types'

export default <State>(middleware: Middleware<State>[] = [], middlewareArgs: any[] = []) =>
  (state: Readonly<State>): Promise<State> => {
    let index = -1

    const dispatch = async (i: number, nextState?: Readonly<State>): Promise<State> => {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'))
      }

      if (typeof nextState === 'object' && nextState === state) {
        return Promise.reject(new Error('State should be immutable. Either pass a new object or nothing to next().'))
      } else if (nextState) {
        state = nextState
      }

      index = i

      if (i === middleware.length) {
        return Promise.resolve(state)
      }

      try {
        const result = middleware[i](state, dispatch.bind(null, i + 1), ...middlewareArgs)
        return Promise.resolve(result)
      } catch (err) {
        return Promise.reject(err)
      }
    }

    return dispatch(0)
  }
