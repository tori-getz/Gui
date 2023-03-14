export type UnmountEffectFn = () => unknown;
export type EffectFn = () => UnmountEffectFn | void;

export type EffectDeps = Array<unknown>;

export interface IEffect {
  fn: EffectFn;
  unmountFn: UnmountEffectFn | void;
  deps: Array<number>;
}
