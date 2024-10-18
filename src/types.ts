export type Next<State> = (state?: State) => Promise<State>

export type Middleware<State> = (
  state: State,
  next: Next<State>,
  ...args: any[]
) => Promise<State>
