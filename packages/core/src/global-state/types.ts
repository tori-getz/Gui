import { IEffect } from '~/effect';
import type { IState } from '~/state';

export type Subscriber = () => void;

export interface IList<T> {
  list: Array<T>;
  cursor: number;
}

export interface IGlobalState {
  states: IList<IState>;
  effects: IList<IEffect>;
  subscribers: Array<Subscriber>;
}

export interface IGlobalStateManager {
  state: IGlobalState;
  subscribe: (subscriber: Subscriber) => void;
  notify: () => void;
}
