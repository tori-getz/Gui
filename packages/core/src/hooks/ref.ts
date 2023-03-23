import { IRef, mountRef } from "~/ref";
import { globalStateManager } from "~/global-state";

export const ref = <T = unknown>(
  initialValue: T | null = null
): IRef<T> => {
  const manager = globalStateManager();
  const { state: globalState } = manager;

  const currentCursor = globalState.refs.cursor;

  const mounted = mountRef<T>(currentCursor, initialValue as T);

  globalState.refs.cursor += 1;

  return mounted;
}
