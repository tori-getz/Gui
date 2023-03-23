import { IRef } from "@gui-framework/core";
import { IPatchedNode } from "~/dom";
import { attachEvent } from "~/events";
import type { SetProperty } from "./types";

export const setProperty: SetProperty = (
  node,
  key,
  prevValue,
  nextValue
) => {
  if (key === 'ref') {
    const nextRef = nextValue as IRef<typeof node>;
    
    if (nextRef.current === null) {
      nextRef.current = node;
    }

    return;
  }

  if (key === 'className') {
    if (prevValue !== nextValue) {
      node.classList.add(nextValue as string);
    }
    return; 
  }

  if (key === 'onChange') {
    attachEvent(node as IPatchedNode, 'oninput', nextValue);
    return;
  }

  if (key.startsWith('on')) {
    const eventName = key.slice(2).toLowerCase();
    attachEvent(node as IPatchedNode, eventName, nextValue);
    return;
  }

  if (nextValue === null || (nextValue as boolean) === false) {
    node.removeAttribute(key);
    return;
  }

  node.setAttribute(key, nextValue as string);
}
