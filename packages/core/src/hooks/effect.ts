// import { globalStateManager } from '~/global-state';

import { EffectDeps, EffectFn, mountEffect } from "~/effect";
import { globalStateManager } from "..";

const manager = globalStateManager();
const { state: globalState } = manager;

export const effect = (
  fn: EffectFn,
  deps?: EffectDeps,
) => {
  if (!deps) {
    fn();
    return;
  }

  const currentCursor = globalState.effects.cursor;

  mountEffect(currentCursor, fn, deps);
  
  globalState.effects.cursor += 1;
}
