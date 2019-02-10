import { Middleware } from './types'

export interface State {
  [key: string]: any
}

export default (middleware: Middleware<State>[] = [], middlewareArgs: any[] = []) =>
  (state: State = {}): Promise<State> => {
    let index = -1

    const dispatch = async (i: number, nextState: State = {}): Promise<State> => {
      if (i <= index) {
        throw new Error('next() called multiple times')
      }

      index = i
      state = { ...state, ...nextState }

      if (i === middleware.length) {
        return state
      }

      return middleware[i](state, dispatch.bind(null, i + 1), ...middlewareArgs)
    }

    return dispatch(0, state)
  }
