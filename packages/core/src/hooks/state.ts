import { globalStateManager } from '~/global-state';
import { mountSetState, mountState, SetState } from '~/state';

export const state = <T = unknown>(
  initialValue: T
): [ state: T, setState: SetState<T> ] => {
  const manager = globalStateManager();
  const { state: globalState } = manager;

  const currentCursor = globalState.states.cursor;

  const state = mountState(currentCursor, initialValue);
  const setState = mountSetState(state, currentCursor);

  globalState.states.cursor += 1;

  return [ state.value, setState ];
}
