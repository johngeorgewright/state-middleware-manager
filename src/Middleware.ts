export type Next<T> = (state: T) => Promise<void>
export type Middleware<I, O> = (state: I, next: Next<O>) => Promise<void>
