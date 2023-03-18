export interface IState<T = unknown> {
  value: T;
}

export type NextState<T> = T extends unknown ? (T | ((prev: T) => T)) : never;
export type SetState<T> = (nextState: NextState<T>) => void;

