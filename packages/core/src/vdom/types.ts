export type Component<T = {}, ChildrenType = any> = (props: T, children?: ChildrenType) => GuiElement<T>;

export type GuiElement<T = unknown> = IGuiNode<T> | string | number | null;

export interface IGuiNode<T = any> {
  tag: string;
  props: T;
  children?: Array<IGuiNode>;
}

export interface IGuiEvents {
  onClick: Function
}
