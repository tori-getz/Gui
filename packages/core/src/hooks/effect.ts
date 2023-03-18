// import { globalStateManager } from '~/global-state';

import { EffectDeps, EffectFn, mountEffect } from "~/effect";
import { globalStateManager } from "..";

export type EffectHook = (fn: EffectFn, deps?: EffectDeps) => void;

const manager = globalStateManager();
const { state: globalState } = manager;

export const effect: EffectHook = (fn, deps) => {
  if (!deps) {
    fn();
    return;
  }

  const currentCursor = globalState.effects.cursor;

  mountEffect(currentCursor, fn, deps);
  
  globalState.effects.cursor += 1;
}
