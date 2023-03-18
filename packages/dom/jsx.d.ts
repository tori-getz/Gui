import type {
  Component,
  StateHook,
  EffectHook,
  GuiElement,
  IGuiNode
} from '@gui/core';
import { GuiEvent } from './dist';

declare global {
  namespace JSX {
    type Element = GuiElement<unknown>;

    type ReservedProps = {
      className: string;
      onClick: (event: GuiEvent) => unknown;
      onChange: (event: GuiEvent) => unknown;
    };

    type NativeElements = {
      [K in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[K] & ReservedProps>;
    };

    interface IntrinsicElements extends NativeElements {}

    interface IntrinsicAttributes extends Partial<ReservedProps> {}
  }

  namespace Gui {
    export const state: StateHook;
    export const effect: EffectHook;
    
    export type Component<PropsType = {}, ChildrenType = unknown> = (props: PropsType, children: ChildrenType) => GuiElement<PropsType>;
  }
}
