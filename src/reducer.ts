import { Middleware } from './types'

export default <State>(middleware: Middleware<State>[] = [], middlewareArgs: any[] = []) =>
  (state: Readonly<State>): Promise<State> => {
    let index = -1

    const dispatch = async (i: number, nextState?: Readonly<State>): Promise<State> => {
      if (i <= index) {
        throw new Error('next() called multiple times')
      }

      if (typeof nextState === 'object' && nextState === state) {
        throw new Error('State should be immutable. Either pass a new object or nothing to next().')
      } else if (nextState) {
        state = nextState
      }

      index = i

      if (i === middleware.length) {
        return state
      }

      return middleware[i](state, dispatch.bind(null, i + 1), ...middlewareArgs)
    }

    return dispatch(0)
  }
