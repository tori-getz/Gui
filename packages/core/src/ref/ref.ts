import type { IRef } from './types';
import { globalStateManager } from '~/global-state';

export const makeRef = <T = unknown>(
  initialValue: T | null = null
): IRef<T> => {
  const ref: IRef<T> = {
    current: null,
  }

  if (initialValue !== null) {
    ref.current = initialValue;
  }

  Object.seal(ref);

  return ref;
}

const manager = globalStateManager();
const { state: globalState } = manager;

export const mountRef = <T = unknown>(
  cursor: number,
  initialValue: T,
): IRef<T> => {
  if (globalState.refs.list[cursor]) {
    return globalState.refs.list[cursor] as IRef<T>;
  }

  const initialRef: IRef<T> = makeRef<T>(initialValue);

  globalState.refs.list[cursor] = initialRef;

  return initialRef;
}
