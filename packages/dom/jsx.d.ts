import type {
  Component,
  StateHook,
  EffectHook,
  GuiElement,
  IGuiNode,
  IRef
} from '@gui/core';
import { GuiEvent } from './dist';

declare global {
  namespace JSX {
    type Element = ReturnType<Component<any, any>>;

    interface HandlersMap {
      'onClick': PointerEvent;
      'onChange': InputEvent;
    }

    type NativeElement<T extends HTMLElement, E extends Event> = {
      [K in keyof HandlersMap]: (e: GuiEvent<T, HandlersMap[K]>) => unknown;
    } & {
      className: string;
      ref: IRef<T>;
    } & T;

    type NativeElements = {
      [K in keyof HTMLElementTagNameMap]: Partial<
        NativeElement<HTMLElementTagNameMap[K], Event>
      >;
    };

    interface IntrinsicElements extends NativeElements {}

    interface IntrinsicAttributes extends Partial<ReservedProps> {}
  }

  namespace Gui {
    export const state: StateHook;
    export const effect: EffectHook;
    
    export type Component<T = {}, ChildrenType = any> = (props: T, children?: ChildrenType) => GuiElement<T>;
  }
}
