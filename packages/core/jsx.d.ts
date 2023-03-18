import type {
  Component,
  StateHook,
  EffectHook
} from './dist/src/index';

declare global {
  declare namespace JSX {
    type Element = ReturnType<Component>;

    type ReservedProps = {
      className: string;
      onClick: (event: MouseEvent) => unknown;
    };

    type NativeElements = {
      [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K] & ReservedProps>;
    };

    interface IntrinsicElements extends NativeElements {}

    interface IntrinsicAttributes extends Partial<ReservedProps> {};
  }

  namespace Gui {
    export const state: StateHook;
    export const effect: EffectHook;
    
    export type Component<PropsType = {}, ChildrenType = unknown> = (props: PropsType, children: ChildrenType) => IGuiNode<T> | string | number | null;

    export default Gui;
  }
}
