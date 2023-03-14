import { runEffects } from '~/effect';
import { globalStateManager } from '~/global-state';
import type { IState, SetState } from './types';

const manager = globalStateManager();
const { state: globalState } = manager;

export const mountState = <T = unknown>(
  cursor: number,
  initialValue: T
): IState<T> => {
  if (globalState.states.list[cursor]) {
    return globalState.states.list[cursor] as IState<T>;
  }

  const initialState: IState<T> = {
    value: initialValue
  };

  globalState.states.list[cursor] = initialState;

  return initialState;
}

export const mountSetState = <T>(state: IState<T>, cursor: number) => {
  const setState: SetState<T> = next => {
    state.value = typeof next === 'function' ? next(state.value) : next;
    manager.notify();
    runEffects(cursor);
  }

  return setState;
}

export const getStateCursor = (value: unknown): number => {
  const state = globalState.states.list.find(
    (state) => state.value === value
  );

  if (!state) {
    return -1;
  }

  return globalState.states.list.indexOf(state);
}
