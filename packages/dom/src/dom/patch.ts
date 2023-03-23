import { createElement, IGuiNode } from "@gui-framework/core";
import { setProperty } from "~/properties";
import { createDOMNode } from "./dom";

import type {
  IPatchedNode,
  PatchChildren,
  PatchedNode,
  PatchFn,
  PatchNode,
  PatchProps,
  RecycleNode
} from "./types";

export const patch: PatchFn = (
  next,
  container,
) => {
  let node = container as IPatchedNode | void;

  if (!node) {
    return;
  }

  const vNode = node.v || recycleNode(node);

  node = patchNode(node, vNode as IGuiNode, next) as IPatchedNode;
  node.v = next;

  return node;
}

export const patchNode: PatchNode = (
  node,
  prev,
  next,
) => {
  if (next === undefined) {
    node.remove();
    return;
  }

  if (['string', 'number'].includes(typeof prev) || ['string', 'number'].includes(typeof next)) {
    if (prev !== next) {
      const nextNode = createDOMNode(next);
      nextNode && node.replaceWith(nextNode);
      return nextNode;
    }

    return node;
  }

  if (prev.tag !== next.tag) {
    const nextNode = createDOMNode(next);
    nextNode && node.replaceWith(nextNode);
    return nextNode;
  }

  patchProps(node, prev.props, next.props);
  patchChildren(node, prev.children, next.children);

  return node;
}

export const patchProps: PatchProps = (
  node,
  prevProps,
  nextProps
) => {
  const mergedProps = { ...prevProps, ...nextProps };

  Object.keys(mergedProps).forEach(key => {
    if (prevProps[key] !== nextProps[key]) {
      setProperty(node as IPatchedNode, key, prevProps[key], nextProps[key]);
    }
  });
}

export const patchChildren: PatchChildren = (
  node,
  prevChildren,
  nextChildren,
) => {
  node.childNodes.forEach((childNode, i) => {
    patchNode(childNode as PatchedNode, prevChildren![i], nextChildren![i])
  });

  nextChildren?.slice(prevChildren?.length).forEach(child => {
    const newNode = createDOMNode(child)
    newNode && node.appendChild(newNode);
  });
}

const TEXT_NODE_TYPE = 3;

export const recycleNode: RecycleNode = node => {
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node.nodeValue;
  }

  const tagName = node.nodeName.toLowerCase();
  const children = [].map.call(node.childNodes, recycleNode);

  return createElement(tagName, {}, ...children as Array<IGuiNode>);
}
