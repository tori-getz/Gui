import { createElement, IGuiNode } from "@gui/core";
import { createDOMNode } from "./dom";
import { listener } from "./listener";

import type {
  IPatchedNode,
  PatchChildren,
  PatchedNode,
  PatchFn,
  PatchNode, 
  PatchProp,
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
      patchProp(node as IPatchedNode, key, prevProps[key], nextProps[key]);
    }
  });
}

export const patchProp: PatchProp = (
  node,
  key,
  prevValue,
  nextValue
) => {
  if (key === 'className') {
    if (prevValue !== nextValue) {
      node.classList.add(nextValue);
    }
    return;
  }

  if (key.startsWith('on')) {
    const eventName = key.slice(2).toLowerCase();

    node[eventName] = nextValue;

    if (!nextValue) {
      node.removeEventListener(eventName, listener)
    } else {
      node.addEventListener(eventName, listener);
    }

    return;
  }

  if (nextValue === null || (nextValue as unknown) === false) {
    node.removeAttribute(key);
    return;
  }

  node.setAttribute(key, nextValue);
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
