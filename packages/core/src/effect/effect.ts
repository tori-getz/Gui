import { globalStateManager } from "~/global-state";
import { getStateCursor } from "~/state";
import type { EffectDeps, EffectFn } from "./types";

const manager = globalStateManager();
const { state: globalState } = manager;

export const mountEffect = (
  cursor: number,
  fn: EffectFn,
  deps: EffectDeps,
) => {
  if (isMounted(cursor)) {
    globalState.effects.list[cursor].fn = fn;
    return;
  }

  const unmountFn = fn();
  globalState.effects.list[cursor] = {
    fn,
    unmountFn: unmountFn,
    deps: deps.map(dep => getStateCursor(dep)),
  };
};

const isMounted = (cursor: number): boolean =>
  globalState.effects.list[cursor] !== undefined;

export const runEffects = (stateCursor: number) => {
  globalState.effects.list.forEach(
    ({ fn, deps }) => {
      if (!deps.includes(stateCursor)) return;
      fn();
    }
  );
}
