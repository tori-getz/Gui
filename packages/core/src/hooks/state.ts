import { globalStateManager } from '~/state';

export const state = <T = unknown>(
  initialValue: T
): [ state: T, setState: (nextState: T) => void ] => {
  const manager = globalStateManager();
  const { state: globalState } = manager;

  const currentCursor = globalState.cursor;
  const state = globalState.states[currentCursor] ?? initialValue;

  const setState = (nextState: T): void => {
    globalState.states[currentCursor] = nextState;
    manager.notify();
  }

  globalState.cursor += 1;

  console.log(globalState);

  return [ state, setState ];
}
