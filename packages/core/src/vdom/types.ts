export type Component<T = {}, ChildrenType = any> = (props: T, children: ChildrenType) => IGuiNode<T> | string | number | null;

export interface IGuiNode<T = any> {
  tag: string;
  props: T;
  children?: Array<IGuiNode>;
}

export interface IGuiEvents {
  onClick: Function
}
