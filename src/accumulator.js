import { validateMiddleware } from './validation'

const validateState = state => {
  if (typeof state !== 'object') {
    throw new Error('State must be an object for an accumulator.')
  }
}

const accumulator = (middleware = [], middlewareArgs = []) => (state = {}, next) => {
  validateMiddleware(middleware)
  validateState(state)

  let index = -1

  const dispatch = (i, nextState = {}) => {
    if (i <= index) {
      return Promise.reject(new Error('next() called multiple times'))
    }

    try {
      validateState(nextState)
    } catch (error) {
      return Promise.reject(error)
    }

    index = i
    state = Object.assign(state, nextState)

    const isLast = i === middleware.length
    const fn = isLast ? next : middleware[i]

    if (!fn) {
      return Promise.resolve(state)
    }

    try {
      const result = isLast
        ? fn(...middlewareArgs, Object.assign({}, state))
        : fn(...middlewareArgs, Object.assign({}, state), dispatch.bind(null, i + 1))

      return Promise.resolve(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return dispatch(0, state)
}

export default accumulator
