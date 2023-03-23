import { GuiElement, IGuiNode } from "@gui-framework/core";

export type CreateDOMNode = (node: GuiElement) => PatchedNode | void; 

export interface IPatchedNode extends HTMLElement {
  [k: string]: unknown;
  v?: IGuiNode
}

export type PatchedNode = IPatchedNode | Text;

export type PatchNode = (
  node: PatchedNode,
  prev: IGuiNode,
  next: IGuiNode | undefined,
) => PatchedNode | void;

export type PatchProps = (
  node: PatchedNode,
  prevProps: IGuiNode['props'],
  nextProps: IGuiNode['props'],
) => void;

export type PatchProp = (
  node: IPatchedNode,
  key: string,
  prevValue: unknown,
  nextValue: unknown,
) => void;

export type PatchChildren = (
  node: PatchedNode,
  prevChildren: IGuiNode['children'],
  nextChildren: IGuiNode['children'],
) => void;

export interface PatchedContainer extends HTMLElement {
  v?: IGuiNode
}

export type PatchFn = (
  next: IGuiNode,
  container: HTMLElement
) => IPatchedNode | void;

export type RecycleNode = (
  node: IPatchedNode
) => GuiElement;
