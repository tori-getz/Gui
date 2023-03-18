import { GuiElement } from "..";

export interface IRef<T = unknown> {
  // (element: T): void;
  current: T | null;
}

export type ForwardRef<Props = {}, Ref = null> = (
  props: Props,
  ref: IRef<Ref>,
) => GuiElement<Props>;
