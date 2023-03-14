export interface IState<T = unknown> {
  value: T;
}

export type NextState<T> = T extends any ? (T | (() => T)) : never;
export type SetState<T> = (nextState: NextState<T>) => void;

