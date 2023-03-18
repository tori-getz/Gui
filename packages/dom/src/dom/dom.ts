import { patchProps } from "./patch";
import type { CreateDOMNode, PatchedNode } from "./types";

export const createDOMNode: CreateDOMNode = node => {
  if (typeof node === 'string' || typeof node === 'number') {
    return document.createTextNode(node.toString());
  }
  
  if (!node) {
    return;
  }

  const { tag, props, children } = node;

  const element = document.createElement(tag) as PatchedNode;

  patchProps(element, {}, props);

  children?.forEach(child => {
    const childNode = createDOMNode(child);

    childNode && element.appendChild(childNode);
  });

  return element;
}
