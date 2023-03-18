import type { IEffect } from '~/effect';
import type { IState } from '~/state';
import { IRef } from '..';

export type Subscriber = () => void;

export interface IList<T> {
  list: Array<T>;
  cursor: number;
}

export interface IGlobalState {
  states: IList<IState>;
  effects: IList<IEffect>;
  refs: IList<IRef>
  subscribers: Array<Subscriber>;
}

export interface IGlobalStateManager {
  state: IGlobalState;
  clearCursors: () => void;
  subscribe: (subscriber: Subscriber) => void;
  notify: () => void;
}
