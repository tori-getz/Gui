export type Subscriber = () => void;

export interface IGlobalState {
  states: Array<any>;
  cursor: number;
  subscribers: Array<Subscriber>;
}

export interface IGlobalStateManager {
  state: IGlobalState;
  subscribe: (subscriber: Subscriber) => void;
  notify: () => void;
}
