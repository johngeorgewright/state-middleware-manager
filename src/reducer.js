import { validateMiddleware } from './validation'

const reducer = (middleware = [], middlewareArgs = []) => (state, next) => {
  validateMiddleware(middleware)

  let index = -1

  const dispatch = (i, nextState) => {
    if (i <= index) {
      return Promise.reject(new Error('next() called multiple times'))
    }

    if (typeof nextState === 'object' && nextState === state) {
      return Promise.reject(new Error('State should be immutable. Either pass a new object or nothing to next().'))
    } else if (nextState) {
      state = nextState
    }

    index = i

    const isLast = i === middleware.length
    const fn = isLast ? next : middleware[i]

    if (!fn) {
      return Promise.resolve(state)
    }

    try {
      const result = isLast
        ? fn(...middlewareArgs, state)
        : fn(...middlewareArgs, state, dispatch.bind(null, i + 1))

      return Promise.resolve(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return dispatch(0)
}

export default reducer
